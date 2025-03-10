import api from '@/lib/api';
import { useState } from 'react';

interface UrlShortenerProps {
  onSuccess: () => void;
}

const UrlShortener: React.FC<UrlShortenerProps> = ({ onSuccess }) => {
  const [url, setUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Replace with your API call to shorten the URL
      await api.post('/shorten', { 
        longUrl: url,
        customCode: customCode || undefined 
      });
      onSuccess();
      setUrl('');
      setCustomCode('');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Failed to shorten URL');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to shorten"
        className="border border-gray-300 rounded p-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        required
      />
      <input
        type="text"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
        placeholder="Custom code (optional)"
        className="border border-gray-300 rounded p-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
      {error && <div className="text-red-500">{error}</div>}
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2">
        Shorten URL
      </button>
    </form>
  );
};

export default UrlShortener; 