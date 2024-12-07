import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5266', // Fallback to default
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;