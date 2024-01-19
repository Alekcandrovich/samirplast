// ModalReview.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setReviews } from '../../redux/actions';
import { addReviewApi, fetchReviewsApi } from '../../api/api';

const ModalReview = ({ closeModal }) => {
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewReview(prevReview => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await addReviewApi(newReview);
      const data = await fetchReviewsApi();
      dispatch(setReviews(data));
      closeModal();
    } catch (error) {
      console.error('Ошибка при добавлении отзыва:', error);
    }

    setNewReview({ name: '', comment: '' });
  };

  return (
    <div className="modal">
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
        <button type="submit">ВІДПРАВИТИ ВІДГУК</button>
      </form>
    </div>
  );
};

export default ModalReview;
