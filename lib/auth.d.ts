declare module '@/lib/auth' {
  export function useAuth(): {
    user: any; // Replace with the actual type
    loading: boolean;
    login: (emailOrUsername: string, password: string) => Promise<void>;
  };
} 