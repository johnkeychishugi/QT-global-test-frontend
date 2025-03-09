import React from 'react';

interface Url {
  id: string;
  originalUrl: string;
  shortenedUrl: string;
}

interface UrlListProps {
  urls: Url[];
  onDelete: (id: string) => void;
}

const UrlList: React.FC<UrlListProps> = ({ urls, onDelete }) => {
  return (
    <div className="space-y-4">
      {urls.map((url) => (
        <div key={url.id} className="flex justify-between items-center p-4 border rounded">
          <div>
            <p className="text-gray-700">{url.originalUrl}</p>
            <a href={url.shortenedUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              {url.shortenedUrl}
            </a>
          </div>
          <button onClick={() => onDelete(url.id)} className="bg-red-500 text-white rounded p-2">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UrlList; 