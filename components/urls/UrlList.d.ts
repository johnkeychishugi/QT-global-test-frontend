declare module '@/components/urls/UrlList' {
  const UrlList: React.FC<{ urls: any[]; onDelete: (id: string) => void }>; // Adjust props as needed
  export default UrlList;
} 