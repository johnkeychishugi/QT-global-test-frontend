'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import api from '@/lib/api';
import UrlShortener from '@/components/urls/UrlShortener';
import UrlList from '@/components/urls/UrlList';
import Pagination from '@/components/ui/Pagination';
import Loading from '@/components/ui/Loading';

export default function Dashboard() {
  const { user, loading, logout } = useAuth();
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!loading && user) {
      fetchUrls();
    }
  }, [loading, user, page]);

  const fetchUrls = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/urls?page=${page}&limit=10`);
      setUrls(data.data);
      setTotalPages(data.meta.pages);
    } catch (err) {
      setError('Failed to load URLs');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUrl = async (id: string) => {
    try {
      await api.delete(`/urls/${id}`);
      fetchUrls();
    } catch (err) {
      console.error('Failed to delete URL:', err);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">You need to be logged in to access this page</h1>
          <p className="mt-2">
            <a href="/auth/login" className="text-indigo-600 hover:text-indigo-800">
              Login here
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button 
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Logout
        </button>
      </div>
      
      <div className="mb-12">
        <UrlShortener onSuccess={fetchUrls} />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Your URLs</h2>
        
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : urls.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-md">
            <p className="text-gray-500">You haven&apos;t created any shortened URLs yet.</p>
          </div>
        ) : (
          <>
            <UrlList urls={urls} onDelete={handleDeleteUrl} />
            
            <div className="mt-6">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
} 