'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import api from '@/lib/api';

export default function UrlShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [customShortCode, setCustomShortCode] = useState('');
  const [isCustomCodeOpen, setIsCustomCodeOpen] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const payload: { longUrl: string; customShortCode?: string } = { longUrl };
      if (customShortCode) {
        payload.customShortCode = customShortCode;
      }

      const { data } = await api.post('/shorten', payload);
      
      // Construct full shortened URL
      const host = window.location.origin;
      const fullUrl = `${host}/${data.shortCode}`;
      
      setShortenedUrl(fullUrl);
      setLongUrl('');
      setCustomShortCode('');
      setIsCustomCodeOpen(false);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to shorten URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    toast.success('URL copied to clipboard!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shorten a URL</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="longUrl" className="block text-sm font-medium text-gray-700">
            Enter a long URL
          </label>
          <input
            type="url"
            id="longUrl"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="https://example.com/very/long/url/that/needs/shortening"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={() => setIsCustomCodeOpen(!isCustomCodeOpen)}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            {isCustomCodeOpen ? 'Use random code' : 'Use custom short code'}
          </button>
        </div>

        {isCustomCodeOpen && (
          <div>
            <label htmlFor="customShortCode" className="block text-sm font-medium text-gray-700">
              Custom short code (optional)
            </label>
            <input
              type="text"
              id="customShortCode"
              value={customShortCode}
              onChange={(e) => setCustomShortCode(e.target.value)}
              placeholder="my-custom-code"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="mt-1 text-sm text-gray-500">
              Leave empty for a random short code
            </p>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </div>
      </form>

      {shortenedUrl && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-700">Your shortened URL:</p>
          <div className="mt-2 flex items-center">
            <input
              type="text"
              readOnly
              value={shortenedUrl}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            />
            <button
              onClick={copyToClipboard}
              className="ml-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 