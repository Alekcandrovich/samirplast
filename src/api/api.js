import axios from 'axios';

const API_URL = `https://65a6b61f74cf4207b4f0aee2.mockapi.io`;

export const fetchReviewsApi = () => axios.get(`${API_URL}/reviews`);
export const addReviewApi = newReview => axios.post(`${API_URL}/reviews`, newReview);
