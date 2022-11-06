import axios from '../utils/axios';

export const loginUser = (payload) => axios.post('/users/login', payload);

export const registerUser = (payload) => axios.post('/users/register', payload);

export const logout = () => axios.post('/users/logout');
