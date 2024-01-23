import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setReviews } from '../../redux/actions';
import { addReviewApi, fetchReviewsApi } from '../../api/api';
import Notiflix from 'notiflix';
import icons from './icons.svg';
import './styles.css';

const ModalReview = ({ closeModal, onSuccess }) => {
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const [isModalOpen] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleEsc = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen, closeModal]);



  const validateForm = () => {
    const errors = {};
    if (!newReview.name.trim()) {
      errors.name = 'Не введено имя.';
    }
    if (!newReview.comment.trim()) {
      errors.comment = 'Не введен комментарий.';
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
    } else {
      Notiflix.Notify.failure('Пожалуйста, заполните все поля формы.', {
        position: 'center-center',
        timeout: 3000,
      });
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className="modale_overlay" onClick={closeModal}>
      <div
        className="modale_content"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
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
              <div style={{ display: 'none' }}>{formErrors.name}</div>
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
              <div style={{ display: 'none' }}>{formErrors.comment}</div>
            )}
          </label>
          <br />
          <button className="reviews_button" type="submit">
            ВІДПРАВИТИ ВІДГУК
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalReview;
