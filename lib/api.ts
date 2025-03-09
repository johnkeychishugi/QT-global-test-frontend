import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your API base URL
});

export default api; 