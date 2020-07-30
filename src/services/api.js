import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.172.220.177:8180'
});

export default api;