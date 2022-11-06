import axios from '../utils/axios';

export const bookApartment = (payload) => axios.post('/orders', payload);

export const getOrders = () => axios.get('/orders');
