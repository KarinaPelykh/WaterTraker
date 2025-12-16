import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://watertraker-backend.onrender.com/api/',
});
