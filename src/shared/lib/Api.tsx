import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://watertraker-backend.onrender.com/api/',
});

export const setAuthToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};
