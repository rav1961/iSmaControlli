import axios from 'axios';

const API_URL = import.meta.env.PROD ? 'haystack' : 'http://192.168.1.123:88/haystack';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'text/plain'
  }
});
