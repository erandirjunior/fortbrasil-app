import axios from 'axios';

const api = axios.create({
  baseURL: 'http://YOUR_IP:8081',
});

export default api;
