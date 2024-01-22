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

//   const canSubmit =
//     newReview.name.trim() !== '' && newReview.comment.trim() !== '';

//   const handleSubmit = async e => {
//     e.preventDefault();

//     console.log('Submitting form...');

//     console.log('Name:', newReview.name); // Добавьте эту строку для отладки
//     console.log('Comment:', newReview.comment); // Добавьте эту строку для отладки

//     if (!canSubmit) {
//       console.log('Empty fields detected');
//       Notiflix.Notify.failure('Пожалуйста, заполните все поля формы.'); // Отображение сообщения об ошибке
//       return;
//     }

//     try {
//       console.log('Adding review...');
//       await addReviewApi(newReview);
//       console.log('Review added successfully.');

//       console.log('Fetching reviews...');
//       const data = await fetchReviewsApi();
//       console.log('Fetched reviews:', data);

//       dispatch(setReviews(data));
//       onSuccess();
//       closeModal();
//     } catch (error) {
//       console.error('Error adding review:', error);
//       console.error('Ошибка при добавлении отзыва:', error);
//     }

//     setNewReview({ name: '', comment: '' });
//   };

//   console.log('Rendering ModalReview...');

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
//               autoComplete="name"
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
//               autoComplete="comment"
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







// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setReviews } from '../../redux/actions';
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

//   const canSubmit =
//     newReview.name.trim() !== '' && newReview.comment.trim() !== '';

//   const handleSubmit = async e => {
//     e.preventDefault();

//     console.log('Submitting form...');

//     console.log('Name:', newReview.name);
//     console.log('Comment:', newReview.comment);

//     try {
//       console.log('Adding review...');
//       await addReviewApi(newReview);
//       console.log('Review added successfully.');

//       console.log('Fetching reviews...');
//       const data = await fetchReviewsApi();
//       console.log('Fetched reviews:', data);

//       dispatch(setReviews(data));
//       onSuccess();
//       closeModal();
//     } catch (error) {
//       console.error('Error adding review:', error);
//       console.error('Ошибка при добавлении отзыва:', error);
//     }

//     setNewReview({ name: '', comment: '' });
//   };

//   console.log('Rendering ModalReview...');

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
//               autoComplete="name"
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
//               autoComplete="comment"
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






// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setReviews } from '../../redux/actions';
// import { addReviewApi, fetchReviewsApi } from '../../api/api';
// import icons from './icons.svg';
// import './styles.css';

// const ModalReview = ({ closeModal, onSuccess }) => {
//   const [newReview, setNewReview] = useState({
//     name: { value: '', touched: false },
//     comment: { value: '', touched: false },
//   });
//   const dispatch = useDispatch();

//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setNewReview(prevReview => ({
//       ...prevReview,
//       [name]: { value, touched: true },
//     }));
//   };

//   const canSubmit =
//     newReview.name.value.trim() !== '' &&
//     newReview.comment.value.trim() !== '' &&
//     newReview.name.touched &&
//     newReview.comment.touched;

//   const handleSubmit = async e => {
//     e.preventDefault();

//     console.log('Submitting form...');

//     console.log('Name:', newReview.name.value);
//     console.log('Comment:', newReview.comment.value);

//     if (!canSubmit) {
//       console.log('Form not filled out completely');
//       return;
//     }

//     try {
//       console.log('Adding review...');
//       await addReviewApi(newReview);
//       console.log('Review added successfully.');

//       console.log('Fetching reviews...');
//       const data = await fetchReviewsApi();
//       console.log('Fetched reviews:', data);

//       dispatch(setReviews(data));
//       onSuccess();
//       closeModal();
//     } catch (error) {
//       console.error('Error adding review:', error);
//       console.error('Ошибка при добавлении отзыва:', error);
//     } finally {
//       setNewReview(prevReview => ({
//         ...prevReview,
//         name: { value: '', touched: false },
//         comment: { value: '', touched: false },
//       }));
//     }
//   };

//   console.log('Rendering ModalReview...');

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
//               value={
//                 newReview.name && typeof newReview.name === 'object'
//                   ? newReview.name.value
//                   : newReview.name
//               }
//               autoComplete="name"
//               onChange={handleInputChange}
//             />
//           </label>
//           <br />
//           <label>
//             Коментар:
//             <textarea
//               className="reviews_textarea"
//               name="comment"
//               value={
//                 newReview.comment && typeof newReview.comment === 'object'
//                   ? newReview.comment.value
//                   : newReview.comment
//               }
//               autoComplete="comment"
//               onChange={handleInputChange}
//             />
//           </label>
//           <br />
//           {!canSubmit && (
//             <div className="error-message">
//               <p>Пожалуйста, заполните все поля формы</p>
//             </div>
//           )}
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
import { addReviewApi, fetchReviewsApi } from '../../api/api'; // Проверьте правильность пути
import icons from './icons.svg'; // Проверьте, что путь до файла с иконками верный
import './styles.css';

const ModalReview = ({ closeModal, onSuccess }) => {
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  const validateForm = () => {
    const errors = {};
    if (!newReview.name.trim()) {
      errors.name = 'Пожалуйста, введите имя.';
    }
    if (!newReview.comment.trim()) {
      errors.comment = 'Пожалуйста, введите комментарий.';
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
        onSuccess(); // Предположим, что это функция для уведомления пользователя об успехе
        closeModal(); // Закрытие модального окна
      } catch (error) {
        console.error('Ошибка при добавлении отзыва:', error);
      }
    }
  };

  console.log('Rendering ModalReview...');

  return (
    <div className="modal_overlay" onClick={closeModal}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
        <button className="close_modal" onClick={closeModal}>
          <svg className="icon_modal">
            <use xlinkHref={`${icons}#close`} />
          </svg>
        </button>
        <form className="reviews_form" onSubmit={handleSubmit}>
          <label className="reviews_label">
            Имя:
            <input
              className="reviews_input"
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <div className="error_message">{formErrors.name}</div>
            )}
          </label>
          <br />
          <label className="reviews_label">
            Комментарий:
            <textarea
              className="reviews_textarea"
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
            />
            {formErrors.comment && (
              <div className="error_message">{formErrors.comment}</div>
            )}
          </label>
          <br />
          <button className="reviews_button" type="submit">
            Отправить отзыв
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalReview;
