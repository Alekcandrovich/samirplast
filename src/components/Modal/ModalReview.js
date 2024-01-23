import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setReviews } from '../../redux/actions';
import { addReviewApi, fetchReviewsApi } from '../../api/api';
import icons from './icons.svg';
import './styles.css';

const ModalReview = ({ closeModal, onSuccess }) => {
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  const validateForm = () => {
    const errors = {};
    if (!newReview.name.trim()) {
      errors.name = 'Пожалуйста, введите имя.';
    }
    if (!newReview.comment.trim()) {
      errors.comment = 'Пожалуйста, введите комментарий.';
    }
    return errors;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await addReviewApi(newReview);
        const reviews = await fetchReviewsApi();
        dispatch(setReviews(reviews));
        onSuccess();
        closeModal();
      } catch (error) {
        console.error('Ошибка при добавлении отзыва:', error);
      }
    }
  };

  return (
    <div className="modale_overlay" onClick={closeModal}>
      <div className="modale_content" onClick={e => e.stopPropagation()}>
        <button className="close_modal" onClick={closeModal}>
          <svg className="icon_modal">
            <use xlinkHref={`${icons}#close`} />
          </svg>
        </button>
        <form className="reviews_form" onSubmit={handleSubmit}>
          <label className="reviews_label">
            Ім'я:
            <input
              className="reviews_input"
              type="text"
              name="name"
              value={newReview.name}
              autoComplete="name"
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <div className="error_message">{formErrors.name}</div>
            )}
          </label>
          <br />
          <label>
            Коментар:
            <textarea
              className="reviews_textarea"
              name="comment"
              value={newReview.comment}
              autoComplete="comment"
              onChange={handleInputChange}
            />
            {formErrors.comment && (
              <div className="error_message">{formErrors.comment}</div>
            )}
          </label>
          <br />
          <button
            className="reviews_button" type="submit">
            ВІДПРАВИТИ ВІДГУК
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalReview;
