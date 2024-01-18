import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsSlider from './ReviewsSlider';
import { fetchReviewsApi, addReviewApi } from '../../api/api';
import { setReviews } from '../../redux/actions';
import './styles.css';

const Reviews = () => {
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchReviewsApi();
        dispatch(setReviews(response.data));
      } catch (error) {
        console.error('Error fetching reviews:', error);
        handleApiError(error);
      }
    };

    fetchReviews();
  }, [dispatch]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewReview(prevReview => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await addReviewApi(newReview);
      const response = await fetchReviewsApi();
      dispatch(setReviews(response.data));
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
      <h2>ВІДГУКИ</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Коментар:
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <div>
          <ReviewsSlider reviews={reviews} />
        </div>
        <button type="submit">ДОДАТИ ВІДГУК</button>
      </form>
    </div>
  );
};

export default Reviews;
