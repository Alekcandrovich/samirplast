// import React, { useState } from 'react';
// import ProductItem from '../../components/ProductsSet/ProductItem';
// import ButtonPrice from '../../components/ButtonPrice/ButtonPrice';
// import ModalPrice from '../../components/Modal/ModalPrice';
// import productData from '../../assets/productsData.json';

// const Mayka = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [imgSrc, setImgSrc] = useState('');

//   const maykaProduct = productData.find(
//     product => product.productName === 'mayka'
//   );

//   if (!maykaProduct) {
//     return <div>Product not found</div>;
//   }

//   const productDetails1 = {
//     imageSrc: process.env.PUBLIC_URL + maykaProduct.productImg_1,
//     productName: maykaProduct.title_product_1,
//     productDescription: maykaProduct.description_detail_1,
//   };

//   const productDetails2 = {
//     imageSrc: process.env.PUBLIC_URL + maykaProduct.productImg_2,
//     productName: maykaProduct.title_product_2,
//     productDescription: maykaProduct.description_detail_2,
//   };

//   const handleButtonPriceClick = () => {
//     const currentPath = window.location.pathname;
//     const imageName = currentPath.split('/').pop();

//     setImgSrc(`${process.env.PUBLIC_URL}/prices/${imageName}.jpg`);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <>
//       <ProductItem {...productDetails1} />
//       <ProductItem {...productDetails2} />
//       <ButtonPrice onClick={handleButtonPriceClick} />
//       <ModalPrice
//         imgSrc={imgSrc}
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//       />
//     </>
//   );
// };

// export default Mayka;








import React from 'react';
import ProductPage from '../../components/ProductsSet/ProductPage';

const Mayka = () => {
  const productName = 'mayka';

  return <ProductPage productName={productName} />;
};

export default Mayka;







// import React from 'react';
// import ProductPage from '../../components/ProductsSet/ProductPage';
// import { useParams } from 'react-router-dom';

// const Mayka = () => {
//   const { productName } = useParams();

//   if (!productName) {
//     return <div>Product name is not defined</div>;
//   }

//   return <ProductPage productName={productName.toLowerCase()} />;
// };

// export default Mayka;






// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const Mayka = () => {
//   const { productName } = useParams();
//   const navigate = useNavigate();

//   if (!productName) {
//     return <div>Здесь выводится информация о продукте Mayka</div>;
//   } else {
//     const formattedProductName = productName.toLowerCase();

//     return (
//       <div>
//         <p>Здесь выводится информация о продукте {formattedProductName}</p>
//         <button onClick={() => navigate('/')}>Вернуться на главную</button>
//       </div>
//     );
//   }
// };

// export default Mayka;



