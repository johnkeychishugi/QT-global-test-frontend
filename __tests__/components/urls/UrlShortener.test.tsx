import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlShortener from '@/components/urls/UrlShortener';
import api from '@/lib/api';

// Mock the api module
jest.mock('@/lib/api', () => ({
  post: jest.fn(),
}));

describe('UrlShortener Component', () => {
  const mockOnSuccess = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('renders the form correctly', () => {
    render(<UrlShortener onSuccess={mockOnSuccess} />);
    
    // Check if the URL input field exists
    expect(screen.getByPlaceholderText('Enter URL to shorten')).toBeInTheDocument();
    
    // Check if the custom code input field exists
    expect(screen.getByPlaceholderText('Custom code (optional)')).toBeInTheDocument();
    
    // Check if the submit button exists
    expect(screen.getByRole('button', { name: /shorten url/i })).toBeInTheDocument();
  });
  
  it('handles URL input changes', () => {
    render(<UrlShortener onSuccess={mockOnSuccess} />);
    
    const urlInput = screen.getByPlaceholderText('Enter URL to shorten');
    fireEvent.change(urlInput, { target: { value: 'https://example.com' } });
    
    expect(urlInput).toHaveValue('https://example.com');
  });
  
  it('handles custom code input changes', () => {
    render(<UrlShortener onSuccess={mockOnSuccess} />);
    
    const customCodeInput = screen.getByPlaceholderText('Custom code (optional)');
    fireEvent.change(customCodeInput, { target: { value: 'mycode' } });
    
    expect(customCodeInput).toHaveValue('mycode');
  });
  
  it('submits the form and calls API with correct data', async () => {
    // Mock successful API response
    (api.post as jest.Mock).mockResolvedValueOnce({});
    
    render(<UrlShortener onSuccess={mockOnSuccess} />);
    
    // Fill form fields
    const urlInput = screen.getByPlaceholderText('Enter URL to shorten');
    const customCodeInput = screen.getByPlaceholderText('Custom code (optional)');
    
    fireEvent.change(urlInput, { target: { value: 'https://example.com' } });
    fireEvent.change(customCodeInput, { target: { value: 'mycode' } });
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /shorten url/i });
    fireEvent.click(submitButton);
    
    // Check if API was called with correct parameters
    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/shorten', {
        longUrl: 'https://example.com',
        customCode: 'mycode'
      });
    });
    
    // Check if onSuccess callback was called
    expect(mockOnSuccess).toHaveBeenCalled();
    
    // Check if fields were reset
    await waitFor(() => {
      expect(urlInput).toHaveValue('');
      expect(customCodeInput).toHaveValue('');
    });
  });
  
  it('displays error message when API call fails', async () => {
    // Mock API failure
    (api.post as jest.Mock).mockRejectedValueOnce(new Error('API Error'));
    
    render(<UrlShortener onSuccess={mockOnSuccess} />);
    
    // Fill and submit form
    fireEvent.change(screen.getByPlaceholderText('Enter URL to shorten'), {
      target: { value: 'https://example.com' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /shorten url/i }));
    
    // Check if error message is displayed
    await waitFor(() => {
      expect(screen.getByText(/failed to shorten url/i)).toBeInTheDocument();
    });
    
    // Verify onSuccess was not called
    expect(mockOnSuccess).not.toHaveBeenCalled();
  });
}); 