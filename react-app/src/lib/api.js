import axios from 'axios';

export const getProfile = () => axios.get('/api/profile');
export const getRepo = () => axios.get('/api/repo');
