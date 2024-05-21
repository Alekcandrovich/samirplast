import axios from 'axios';

const API_URL = `https://65a6b61f74cf4207b4f0aee2.mockapi.io`;

export const fetchReviewsApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении отзывов', error);
    throw error;
  }
};

export const addReviewApi = async (newReview) => {
  try {
    await axios.post(`${API_URL}/reviews`, newReview);
  } catch (error) {
    console.error('Ошибка при добавлении отзыва', error);
    throw error;
  }
};
