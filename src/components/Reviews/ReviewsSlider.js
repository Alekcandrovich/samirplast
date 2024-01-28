import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import icons from "./icons.svg";
import './styles.css';

const shuffleArray = array => {
  if (!Array.isArray(array)) {
    console.error('Входные данные не являются массивом');
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
  const shuffledReviews = shuffleArray(reviews.reviews || []);

  if (!Array.isArray(shuffledReviews)) {
    console.error('Перемешанные отзывы не является массивом');
    return null;
  }

  const PrevArrow = ({ onClick }) => (
    <div className="slider_arrow prev" onClick={onClick}>
      <svg className="icon_modal">
        <use xlinkHref={`${icons}#left`} />
      </svg>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="slider_arrow next" onClick={onClick}>
      <svg className="icon_modal">
        <use xlinkHref={`${icons}#right`} />
      </svg>
    </div>
  );

  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
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
        <div key={index} className="slider">
          <p className="slider_p">
            <strong className="slider_strong">{review.name}:</strong>{' '}
            {review.comment}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default ReviewsSlider;
