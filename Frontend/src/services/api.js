import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Substitua pelo IP do backend, se necessário
});

export default api;
