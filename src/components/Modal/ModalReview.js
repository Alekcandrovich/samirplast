// ModalReview.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setReviews } from '../../redux/actions';
import { addReviewApi, fetchReviewsApi } from '../../api/api';
import './styles.css';

const ModalReview = ({ closeModal }) => {
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewReview(prevReview => ({ ...prevReview, [name]: value }));
  };

  const canSubmit =
    newReview.name.trim() !== '' && newReview.comment.trim() !== '';

  const handleSubmit = async e => {
    e.preventDefault();

    if (!canSubmit) {
      return;
    }

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
    <div className="modale-backdrop" onClick={closeModal}>
      <div className="modale-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>
          &#10005;{' '}
          {/* Это 'X' символ для кнопки закрытия, вы можете использовать иконку */}
        </button>
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
          <button type="submit" disabled={!canSubmit}>
            ВІДПРАВИТИ ВІДГУК
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalReview;
