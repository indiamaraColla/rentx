import axios from 'axios';

const api = axios.create({
  baseURL: 'https://polls.apiblueprint.org',
});

export default api;
