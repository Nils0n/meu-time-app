import Axios from 'axios';

const api = Axios.create({
  baseURL:import.meta.env.VITE_API_URL
});

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default api;
