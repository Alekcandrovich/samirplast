import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import icons from "./icons.svg";
import './styles.css';

const shuffleArray = array => {
  if (!Array.isArray(array)) {
    console.error('Input is not an array');
    return array;
  }

  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ReviewsSlider = ({ reviews }) => {
  const reviewsArray = Array.isArray(reviews) ? reviews : reviews.reviews || [];

  const shuffledReviews = shuffleArray(reviewsArray);

  if (!Array.isArray(shuffledReviews)) {
    console.error('shuffledReviews is not an array');
    return null;
  }

  const PrevArrow = ({ onClick }) => (
    <div className="slider-arrow prev" onClick={onClick}>
      <svg className="icon-modal">
        <use xlinkHref={`${icons}#left`} />
      </svg>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="slider-arrow next" onClick={onClick}>
      <svg className="icon-modal">
        <use xlinkHref={`${icons}#right`} />
      </svg>
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
    <Slider {...settings}>
      {shuffledReviews.map((review, index) => (
        <div key={index} className="slide">
          <p>
            <strong>{review.name}:</strong> {review.comment}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default ReviewsSlider;
