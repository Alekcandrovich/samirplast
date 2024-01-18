import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsSlider from './ReviewsSlider';
import { fetchReviewsApi, addReviewApi } from '../../api/api';
import { setReviews } from '../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

const Reviews = () => {
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews);

  useEffect(() => {
    const maxRetries = 3;
    let retries = 0;

    const fetchReviews = async () => {
      setLoading(true);
      try {
        const data = await fetchReviewsApi();
        dispatch(setReviews(data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError(error.message);
        setLoading(false);

        if (retries < maxRetries) {
          retries++;
          console.log(`Retrying (${retries}/${maxRetries})...`);
          fetchReviews();
        } else {
          console.error('Max retries reached. Unable to fetch reviews.');
          handleApiError(error);
        }
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
      setLoading(true);
      await addReviewApi(newReview);
      const data = await fetchReviewsApi();
      dispatch(setReviews(data));
    } catch (error) {
      console.error('Error adding review:', error);
      handleApiError(error);
    } finally {
      setLoading(false);
    }

    setNewReview({ name: '', comment: '' });
  };

  const handleApiError = error => {
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);

      toast.error('Ошибка при выполнении запроса', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    } else if (error.request) {
      console.error('No response received:', error.request);
      toast.error('Ошибка при выполнении запроса', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    } else {
      console.error('Error setting up the request:', error.message);
      toast.error('Ошибка при выполнении запроса', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="Reviews">
      <h2>ВІДГУКИ</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <ToastContainer />
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
        </>
      )}
    </div>
  );
};

export default Reviews;
