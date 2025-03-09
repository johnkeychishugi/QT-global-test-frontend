import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import api from './api';
import { useMutation, useQuery } from '@tanstack/react-query';

type User = {
  id: string;
  username: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (emailOrUsername: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        
        if (token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const { data } = await api.get('/users/me');
          setUser(data);
        }
      } catch (error) {
        localStorage.removeItem('accessToken');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const loginMutation = useMutation({
    mutationFn: async ({ emailOrUsername, password }: { emailOrUsername: string; password: string }) => {
      const { data } = await api.post('/auth/login', { emailOrUsername, password });
      return data;
    },
  });

  const login = async (emailOrUsername: string, password: string) => {
    try {
      const data = await loginMutation.mutateAsync({ emailOrUsername, password });
      localStorage.setItem('accessToken', data.accessToken);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      const userResponse = await api.get('/users/me');
      setUser(userResponse.data);
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const register = async (email: string, username: string, password: string) => {
    try {
      const { data } = await api.post('/auth/register', {
        email,
        username,
        password,
      });
      
      localStorage.setItem('accessToken', data.accessToken);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      
      const userResponse = await api.get('/users/me');
      setUser(userResponse.data);
      
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('accessToken');
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    } 
  };

  // Fetch user data
  const { data: userData, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await api.get('/users/me');
      return data;
    },
  });

  // Return the context provider instead of an object
  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 