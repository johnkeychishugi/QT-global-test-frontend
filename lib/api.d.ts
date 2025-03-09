declare module '@/lib/api' {
  const api: {
    get: (url: string) => Promise<any>; // Adjust return type as needed
    post: (url: string, data: any) => Promise<any>; // Adjust return type as needed
    delete: (url: string) => Promise<any>; // Adjust return type as needed
  };
  export default api;
} 