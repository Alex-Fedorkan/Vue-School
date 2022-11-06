import axios from '../utils/axios';

export const getApartmentsList = () => axios.get('/apartments');

export const getApartmentById = (id) => axios.get(`/apartments/${id}`);
