// Reviews.js
import React, { useState } from 'react';
import './styles.css'; // Import the styles

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewReview(prevReview => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setReviews(prevReviews => [...prevReviews, newReview]);
    setNewReview({ name: '', comment: '' });
  };

  return (
    <div className="Reviews">
      {' '}
      {/* Add the class name here */}
      <h2>Отзывы</h2>
      {/* Форма для добавления нового отзыва */}
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
      {/* Отображение существующих отзывов */}
      {reviews.map((review, index) => (
        <div key={index}>
          <p>
            <strong>{review.name}:</strong> {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
