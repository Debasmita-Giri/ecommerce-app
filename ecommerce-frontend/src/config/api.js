
import axios from 'axios';
const LOCALHOST='http://localhost:5454'
// const LOCALHOST='https://ecommerce-backend-production-309d.up.railway.app'

export const API_BASE_URL = LOCALHOST

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
