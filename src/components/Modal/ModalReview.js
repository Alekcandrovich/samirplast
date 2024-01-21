import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setReviews } from '../../redux/actions';
import Notiflix from 'notiflix';
import { addReviewApi, fetchReviewsApi } from '../../api/api';
import icons from './icons.svg';
import './styles.css';

const ModalReview = ({ closeModal, onSuccess }) => {
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

    console.log('Submitting form...');

    console.log('Name:', newReview.name); // Добавьте эту строку для отладки
    console.log('Comment:', newReview.comment); // Добавьте эту строку для отладки

    if (!canSubmit) {
      console.log('Empty fields detected');
      Notiflix.Notify.failure('Пожалуйста, заполните все поля формы.'); // Отображение сообщения об ошибке
      return;
    }

    try {
      console.log('Adding review...');
      await addReviewApi(newReview);
      console.log('Review added successfully.');

      console.log('Fetching reviews...');
      const data = await fetchReviewsApi();
      console.log('Fetched reviews:', data);

      dispatch(setReviews(data));
      onSuccess();
      closeModal();
    } catch (error) {
      console.error('Error adding review:', error);
      console.error('Ошибка при добавлении отзыва:', error);
    }

    setNewReview({ name: '', comment: '' });
  };

  console.log('Rendering ModalReview...');

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
          </label>
          <br />
          <button
            className="reviews_button"
            type="submit"
            disabled={!canSubmit}
          >
            ВІДПРАВИТИ ВІДГУК
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalReview;
