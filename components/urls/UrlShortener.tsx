import { useState } from 'react';

interface UrlShortenerProps {
  onSuccess: () => void;
}

const UrlShortener: React.FC<UrlShortenerProps> = ({ onSuccess }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Replace with your API call to shorten the URL
      await api.post('/urls/shorten', { url });
      onSuccess();
      setUrl('');
    } catch (err) {
      setError('Failed to shorten URL');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to shorten"
        className="border rounded p-2"
        required
      />
      {error && <div className="text-red-500">{error}</div>}
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Shorten URL
      </button>
    </form>
  );
};

export default UrlShortener; 