import axios from 'axios';

const API_URL = `https://65a2b8e842ecd7d7f0a82095.mockapi.io`;

export const fetchContactsApi = () => axios.get(`${API_URL}/reviews`);
export const addContactApi = newContact =>
  axios.post(`${API_URL}/reviews`, newContact);
export const deleteContactApi = id => axios.delete(`${API_URL}/reviews/${id}`);
