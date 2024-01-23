import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReviews } from '../../redux/actions';
import { fetchReviewsApi } from '../../api/api';
import ReviewsSlider from './ReviewsSlider';
import Notiflix from 'notiflix';
import CustomLoader from '../../components/Loader/CustomLoader';
import ModalReview from '../../components/Modal/ModalReview';
import './styles.css';

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        console.error('Ошибка при получении отзывов:', error);
        setError(error.message);
        setLoading(false);

        if (retries < maxRetries) {
          retries++;
          console.log(`Повтор (${retries}/${maxRetries})...`);
          fetchReviews();
        } else {
          console.error(
            'Достигнуто максимальное количество повторов. Невозможно получить отзывы.'
          );
          handleApiError(error);
        }
      }
    };

    fetchReviews();
  }, [dispatch]);

  const handleApiError = error => {
    if (error.response) {
      console.error('Данные ответа:', error.response.data);
      console.error('Статус ответа:', error.response.status);
      console.error('Заголовки ответа:', error.response.headers);
    } else if (error.request) {
      console.error('Не получен ответ:', error.request);
    } else {
      console.error('Ошибка настройки запроса:', error.message);
      if (error.message.includes('empty fields')) {
        Notiflix.Notify.failure('Пожалуйста, заполните все поля формы.');
      }
    }
  };

  const addReviewSuccess = () => {
    Notiflix.Notify.success('Отзыв успешно добавлен!', {
      position: 'center-center',
      timeout: 3000,
    });
  };

  return (
    <div className="reviews">
      <h2 className="reviews_h2">ВІДГУКИ</h2>

      {loading && <CustomLoader />}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <div>
            <ReviewsSlider reviews={reviews} />
          </div>
          <button className="reviews_button" type="button" onClick={openModal}>
            ДОДАТИ ВІДГУК
          </button>
          {isModalOpen && (
            <ModalReview closeModal={closeModal} onSuccess={addReviewSuccess} />
          )}
        </>
      )}
    </div>
  );
};

export default Reviews;
