import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchReviewsApi, addReviewApi } from '../../api/api';
// import icons from '../../components/Modal/icons.svg';
import './styles.css';

const Reviews = ({ reviews, setReviews }) => {
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
  }, [setReviews]);

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

  // const PrevArrow = ({ onClick }) => (
  //   <div className="slide-arrow prev" onClick={onClick}>
  //     <svg className="icon-modal">
  //       <use xlinkHref={`${icons}#left`} />
  //     </svg>
  //   </div>
  // );

  // const NextArrow = ({ onClick }) => (
  //   <div className="slide-arrow next" onClick={onClick}>
  //     <svg className="icon-modal">
  //       <use xlinkHref={`${icons}#right`} />
  //     </svg>
  //   </div>
  // );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

      <div className="slide">
        {' '}
        {/* Добавлен контейнер для слайдера */}
        <Slider {...settings} className="slider-container">
          {reviews.map((review, index) => (
            <div key={index}>
              <p>
                <strong>{review.name}:</strong> {review.comment}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
