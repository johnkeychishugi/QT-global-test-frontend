'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import api from '@/lib/api';
import Loading from '@/components/ui/Loading';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ClicksByDate {
  date: string;
  count: number;
}

interface BrowserStats {
  browser: string;
  count: number;
}

interface ReferrerStats {
  referrer: string;
  count: number;
}

interface UrlData {
  id: string;
  shortCode: string;
  longUrl: string;
  clicks: number;
  createdAt: string;
}

interface AnalyticsData {
  url: UrlData;
  analytics: {
    clicksByDate: ClicksByDate[];
    browserStats: BrowserStats[];
    referrerStats: ReferrerStats[];
  };
}

export default function AnalyticsPage() {
  const params = useParams();
  const shortCode = params?.shortCode as string;
  const router = useRouter();
  const { user, loading } = useAuth();
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!loading && user) {
      fetchAnalytics();
    }
  }, [loading, user, shortCode]);

  const fetchAnalytics = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/analytics/${shortCode}`);
      console.log(data);
      setAnalyticsData(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load analytics');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    router.push('/');
  };

  if (loading || isLoading) {
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

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Error</h1>
          <p className="mt-2">{error}</p>
          <button 
            onClick={goBack}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">No analytics data available</h1>
          <button 
            onClick={goBack}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Prepare data for the charts
  const clicksChartData = {
    labels: analyticsData.analytics.clicksByDate.map(item => new Date(item.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Clicks',
        data: analyticsData.analytics.clicksByDate.map(item => item.count),
        backgroundColor: 'rgba(79, 70, 229, 0.6)',
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 1,
      },
    ],
  };

  const browserChartData = {
    labels: analyticsData.analytics.browserStats.map(item => item.browser),
    datasets: [
      {
        label: 'Browser Usage',
        data: analyticsData.analytics.browserStats.map(item => item.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const referrerChartData = {
    labels: analyticsData.analytics.referrerStats.map(item => item.referrer),
    datasets: [
      {
        label: 'Referrer Sources',
        data: analyticsData.analytics.referrerStats.map(item => item.count),
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">URL Analytics</h1>
        <button 
          onClick={goBack}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">URL Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Original URL</p>
            <p className="truncate text-indigo-500">{analyticsData.url.longUrl}</p>
          </div>
          <div>
            <p className="text-gray-600">Short URL</p>
            <a 
              href={`${process.env.NEXT_PUBLIC_API_URL}/${analyticsData.url.shortCode}`} 
              className="text-indigo-600 hover:text-indigo-800"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {process.env.NEXT_PUBLIC_API_URL}/{analyticsData.url.shortCode}
            </a>
          </div>
          <div>
            <p className="text-gray-600">Total Clicks</p>
            <p className="text-2xl font-bold text-indigo-500">{analyticsData.url.clicks}</p>
          </div>
          <div>
            <p className="text-gray-600">Created On</p>
            <p className="text-indigo-500">{new Date(analyticsData.url.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Clicks Over Time</h2>
          {analyticsData.analytics.clicksByDate.length > 0 ? (
            <Bar data={clicksChartData} options={{ responsive: true }} />
          ) : (
            <p className="text-gray-500 text-center py-8">No click data available</p>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Browser Distribution</h2>
          {analyticsData.analytics.browserStats.length > 0 ? (
            <Pie data={browserChartData} options={{ responsive: true }} />
          ) : (
            <p className="text-gray-500 text-center py-8">No browser data available</p>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Referrer Sources</h2>
        {analyticsData.analytics.referrerStats.length > 0 ? (
          <div className="h-80">
            <Pie data={referrerChartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No referrer data available</p>
        )}
      </div>
    </div>
  );
} 