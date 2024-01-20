// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setReviews } from '../../redux/actions';
// import Notiflix from 'notiflix';
// import { addReviewApi, fetchReviewsApi } from '../../api/api';
// import icons from './icons.svg';
// import './styles.css';

// const ModalReview = ({ closeModal, onSuccess }) => {
//   const [newReview, setNewReview] = useState({ name: '', comment: '' });
//   const dispatch = useDispatch();

//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setNewReview(prevReview => ({ ...prevReview, [name]: value }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//   }
    
//     if (!canSubmit) {
//       Notiflix.Notify.failure('Пожалуйста, заполните все поля формы.'); // Отображение сообщения об ошибке
//       return;
//     }

//   const canSubmit =
//     newReview.name.trim() !== '' && newReview.comment.trim() !== '';

//   const handleSubmit = async e => {
//     e.preventDefault();

//     if (!canSubmit) {
//       return;
//     }

//     try {
//       await addReviewApi(newReview);
//       const data = await fetchReviewsApi();
//       dispatch(setReviews(data));
//       onSuccess();
//       closeModal();
//     } catch (error) {
//       console.error('Ошибка при добавлении отзыва:', error);
//     }

//     setNewReview({ name: '', comment: '' });
//   };

//   return (
//     <div className="modale_overlay" onClick={closeModal}>
//       <div className="modale_content" onClick={e => e.stopPropagation()}>
//         <button className="close_modal" onClick={closeModal}>
//           <svg className="icon_modal">
//             <use xlinkHref={`${icons}#close`} />
//           </svg>
//         </button>
//         <form className="reviews_form" onSubmit={handleSubmit}>
//           <label className="reviews_label">
//             Ім'я:
//             <input
//               className="reviews_input"
//               type="text"
//               name="name"
//               value={newReview.name}
//               onChange={handleInputChange}
//             />
//           </label>
//           <br />
//           <label>
//             Коментар:
//             <textarea
//               className="reviews_textarea"
//               name="comment"
//               value={newReview.comment}
//               onChange={handleInputChange}
//             />
//           </label>
//           <br />
//           <button
//             className="reviews_button"
//             type="submit"
//             disabled={!canSubmit}
//           >
//             ВІДПРАВИТИ ВІДГУК
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalReview;







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

    if (!canSubmit) {
      Notiflix.Notify.failure('Пожалуйста, заполните все поля формы.'); // Отображение сообщения об ошибке
      return;
    }

    try {
      await addReviewApi(newReview);
      const data = await fetchReviewsApi();
      dispatch(setReviews(data));
      onSuccess();
      closeModal();
    } catch (error) {
      console.error('Ошибка при добавлении отзыва:', error);
    }

    setNewReview({ name: '', comment: '' });
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
