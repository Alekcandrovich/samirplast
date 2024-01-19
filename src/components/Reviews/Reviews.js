import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReviews } from '../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchReviewsApi } from '../../api/api';
import ReviewsSlider from './ReviewsSlider';
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

      toast.error('Ошибка при выполнении запроса', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    } else if (error.request) {
      console.error('Не получен ответ:', error.request);
      toast.error('Ошибка при выполнении запроса', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    } else {
      console.error('Ошибка настройки запроса:', error.message);
      toast.error('Ошибка при выполнении запроса', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="Reviews">
      <h2>ВІДГУКИ</h2>

      {loading && <p>Завантаження...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <ToastContainer />
          <div>
            <ReviewsSlider reviews={reviews} />
          </div>
          <button type="button" onClick={openModal}>
            ДОДАТИ ВІДГУК
          </button>
          {isModalOpen && <ModalReview closeModal={closeModal} />}
        </>
      )}
    </div>
  );
};

export default Reviews;
