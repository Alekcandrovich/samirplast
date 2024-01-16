// // Reviews.js
// import React, { useState } from 'react';
// import './styles.css'; // Import the styles

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ name: '', comment: '' });

//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setNewReview(prevReview => ({ ...prevReview, [name]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     setReviews(prevReviews => [...prevReviews, newReview]);
//     setNewReview({ name: '', comment: '' });
//   };

//   return (
//     <div className="Reviews">
//       {' '}
//       {/* Add the class name here */}
//       <h2>Отзывы</h2>
//       {/* Форма для добавления нового отзыва */}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Имя:
//           <input
//             type="text"
//             name="name"
//             value={newReview.name}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Комментарий:
//           <textarea
//             name="comment"
//             value={newReview.comment}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Добавить отзыв</button>
//       </form>
//       {/* Отображение существующих отзывов */}
//       {reviews.map((review, index) => (
//         <div key={index}>
//           <p>
//             <strong>{review.name}:</strong> {review.comment}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Reviews;




// // Reviews.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './styles.css';

// const API_URL = 'https://65a2b8e842ecd7d7f0a82095.mockapi.io';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ name: '', comment: '' });

//   // useEffect(() => {
//   //   // При монтировании компонента, загрузите отзывы с сервера
//   //   const fetchReviews = async () => {
//   //     try {
//   //       const response = await axios.get(API_URL);
//   //       setReviews(response.data);
//   //     } catch (error) {
//   //       console.error('Error fetching reviews:', error);
//   //     }
//   //   };

//   //   fetchReviews();
//   // }, []); // [] ensures that this effect runs only once on mount


// useEffect(() => {
//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setReviews(response.data);
//     } catch (error) {
//       console.error('Error fetching reviews:', error);

//       // Добавьте обработку ошибки здесь
//       if (error.response) {
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//         console.error('Response headers:', error.response.headers);
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//       } else {
//         console.error('Error setting up the request:', error.message);
//       }
//     }
//   };

//   fetchReviews();
// }, []);


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Отправьте новый отзыв на сервер
//       await axios.post(API_URL, newReview);
//       // Загрузите обновленные отзывы с сервера
//       const response = await axios.get(API_URL);
//       setReviews(response.data);
//     } catch (error) {
//       console.error('Error adding review:', error);
//     }

//     setNewReview({ name: '', comment: '' });
//   };

//   return (
//     <div className="Reviews">
//       <h2>Отзывы</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Имя:
//           <input
//             type="text"
//             name="name"
//             value={newReview.name}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Комментарий:
//           <textarea
//             name="comment"
//             value={newReview.comment}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Добавить отзыв</button>
//       </form>

//       {reviews.map((review, index) => (
//         <div key={index}>
//           <p>
//             <strong>{review.name}:</strong> {review.comment}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Reviews;






// // Reviews.js
// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// import {
//   fetchReviewsApi,
//   addReviewApi,
//   // deleteContactApi,
// } from '../../api/api'; // Путь к вашему файлу с API функциями
// import './styles.css';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ name: '', comment: '' });

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetchReviewsApi(); // Используйте выделенную функцию для запроса отзывов
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//         handleApiError(error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await addReviewApi(newReview); // Используйте выделенную функцию для добавления отзыва
//       const response = await fetchReviewsApi(); // Загрузите обновленные отзывы с сервера
//       setReviews(response.data);
//     } catch (error) {
//       console.error('Error adding review:', error);
//       handleApiError(error);
//     }

//     setNewReview({ name: '', comment: '' });
//   };

//   const handleApiError = (error) => {
//     // Добавьте обработку ошибки API здесь
//     if (error.response) {
//       console.error('Response data:', error.response.data);
//       console.error('Response status:', error.response.status);
//       console.error('Response headers:', error.response.headers);
//     } else if (error.request) {
//       console.error('No response received:', error.request);
//     } else {
//       console.error('Error setting up the request:', error.message);
//     }
//   };

//   return (
//     <div className="Reviews">
//       <h2>Отзывы</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Имя:
//           <input
//             type="text"
//             name="name"
//             value={newReview.name}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Комментарий:
//           <textarea
//             name="comment"
//             value={newReview.comment}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Добавить отзыв</button>
//       </form>

//       {reviews.map((review, index) => (
//         <div key={index}>
//           <p>
//             <strong>{review.name}:</strong> {review.comment}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Reviews;





// Reviews.js
import React, { useState, useEffect } from 'react';
import { fetchReviewsApi, addReviewApi } from '../../api/api';
import './styles.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = async (e) => {
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

  const handleApiError = (error) => {
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
