import React, { useState, useEffect } from 'react';
import { fetchReviewsApi, addReviewApi } from '../../api/api';
import './styles.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '' });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchReviewsApi();
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        handleApiError(error);
      }
    };

    fetchReviews();
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewReview(prevReview => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await addReviewApi(newReview);
      const response = await fetchReviewsApi();
      setReviews(response.data);
    } catch (error) {
      console.error('Error adding review:', error);
      handleApiError(error);
    }

    setNewReview({ name: '', comment: '' });
  };

  const handleApiError = error => {
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }
  };

  return (
    <div className="Reviews">
      <h2>Отзывы</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Комментарий:
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Добавить отзыв</button>
      </form>

      {reviews.map((review, index) => (
        <div key={index}>
          <p>
            <strong>{review.name}:</strong> {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
