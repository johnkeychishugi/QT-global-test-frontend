import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlList from '@/components/urls/UrlList';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('UrlList Component', () => {
  // Mock data
  const mockUrls = [
    {
      id: '1',
      longUrl: 'https://example.com/this-is-a-very-long-url-that-should-be-truncated',
      shortCode: 'abc123'
    },
    {
      id: '2',
      longUrl: 'https://another-example.com',
      shortCode: 'def456'
    }
  ];

  // Mock delete handler
  const mockDeleteHandler = jest.fn();

  // Mock environment variable
  const originalEnv = process.env;
  beforeEach(() => {
    jest.resetAllMocks();
    process.env = { ...originalEnv };
    process.env.NEXT_PUBLIC_API_URL = 'https://short.url';
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('renders the list of URLs correctly', () => {
    render(<UrlList urls={mockUrls} onDelete={mockDeleteHandler} />);
    
    // Check if long URLs are displayed
    expect(screen.getByText('https://example.com/this-is-a-very-long-url-that-should-be-truncated')).toBeInTheDocument();
    expect(screen.getByText('https://another-example.com')).toBeInTheDocument();
    
    // Check if short URLs are displayed
    expect(screen.getByText('https://short.url/abc123')).toBeInTheDocument();
    expect(screen.getByText('https://short.url/def456')).toBeInTheDocument();
    
    // Check if buttons are rendered
    expect(screen.getAllByText('View Analytics').length).toBe(2);
    expect(screen.getAllByText('Delete').length).toBe(2);
  });
  
  it('calls onDelete when Delete button is clicked', () => {
    render(<UrlList urls={mockUrls} onDelete={mockDeleteHandler} />);
    
    // Get the first delete button and click it
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    // Check if onDelete was called with the correct URL id
    expect(mockDeleteHandler).toHaveBeenCalledWith('1');
  });
  
  it('renders analytics links with correct URLs', () => {
    render(<UrlList urls={mockUrls} onDelete={mockDeleteHandler} />);
    
    // Get analytics links
    const analyticsLinks = screen.getAllByText('View Analytics');
    
    // Check if the links have the correct hrefs
    expect(analyticsLinks[0].closest('a')).toHaveAttribute('href', '/analytics/abc123');
    expect(analyticsLinks[1].closest('a')).toHaveAttribute('href', '/analytics/def456');
  });
  
  it('renders empty state when no URLs are provided', () => {
    render(<UrlList urls={[]} onDelete={mockDeleteHandler} />);
    
    // Check that no URL items are rendered
    expect(screen.queryByText(/https:\/\//)).not.toBeInTheDocument();
    
    // Since we're rendering an empty list, there should be no buttons
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    expect(screen.queryByText('View Analytics')).not.toBeInTheDocument();
  });
}); 