import React from 'react';
import Link from 'next/link';

interface Url {
  id: string;
  longUrl: string;
  shortCode: string;
}

interface UrlListProps {
  urls: Url[];
  onDelete: (id: string) => void;
}

const UrlList: React.FC<UrlListProps> = ({ urls, onDelete }) => {
  return (
    <div className="space-y-4">
      {urls.map((url) => (
        <div key={url.id} className="border rounded overflow-hidden">
          <div className="p-4 flex flex-col space-y-4">
            <div className="w-full">
              <div className="overflow-hidden">
                <p className="truncate text-gray-500" title={url.longUrl}>
                  {url.longUrl}
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-1 flex-wrap gap-y-2">
                <a 
                  href={`${process.env.NEXT_PUBLIC_API_URL}/${url.shortCode}`} 
                  className="text-blue-500 truncate max-w-[50%]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {process.env.NEXT_PUBLIC_API_URL}/{url.shortCode}
                </a>
                
                <div className="flex flex-wrap gap-2">
                  <Link 
                    href={`/analytics/${url.shortCode}`} 
                    className="bg-indigo-500 hover:bg-indigo-600 text-white rounded px-3 py-1.5 transition-colors text-sm"
                  >
                    View Analytics
                  </Link>
                  <button 
                    onClick={() => onDelete(url.id)} 
                    className="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1.5 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UrlList; 