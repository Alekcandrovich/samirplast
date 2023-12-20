import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <button onClick={onRequestClose}>Закрыть</button>
      <img src={imgSrc} alt="Прайс" />
    </Modal>
  );
};

export default ModalPrice;






// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import { Document, Page } from 'react-pdf';

// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'pdfjs-dist/build/pdf.worker.entry';

// import { pdfjs } from 'react-pdf';

// Modal.setAppElement('#root');
// pdfjs.GlobalWorkerOptions.workerSrc = null;

// const ModalPrice = ({ pdfSrc, isOpen, onRequestClose }) => {
//   const [numPages, setNumPages] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="PDF Modal"
//     >
//       <button onClick={onRequestClose}>Закрыть</button>
//       <Document file={pdfSrc} onLoadSuccess={onDocumentLoadSuccess}>
//         {Array.from(new Array(numPages), (el, index) => (
//           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//         ))}
//       </Document>
//     </Modal>
//   );
// };

// export default ModalPrice;

// import React, { useCallback, useEffect, useRef } from 'react';
// import { pdfjs } from 'react-pdf';

// const ModalPrice = ({ isOpen, onRequestClose, pdfSrc }) => {
//   const pdfContainerRef = useRef(null);
//   const pdfDocRef = useRef(null);
//   const closeModalRef = useRef(onRequestClose);

//   useEffect(() => {
//     closeModalRef.current = onRequestClose;
//   }, [onRequestClose]);

//   const closeModal = useCallback(() => {
//     if (pdfContainerRef.current) {
//       pdfContainerRef.current.innerHTML = '';
//     }
//     if (closeModalRef.current) {
//       closeModalRef.current();
//     }
//     if (pdfDocRef.current) {
//       pdfDocRef.current.destroy();
//     }
//     pdfDocRef.current = null;
//   }, []);

//   const renderPage = useCallback((num, page) => {
//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');
//     const viewport = page.getViewport({ scale: 1.5 });

//     canvas.height = viewport.height;
//     canvas.width = viewport.width;

//     const renderContext = {
//       canvasContext: context,
//       viewport: viewport,
//     };

//     page.render(renderContext);
//     pdfContainerRef.current.appendChild(canvas);
//   }, []);

//   const openModal = useCallback(async () => {
//     if (pdfContainerRef.current) {
//       pdfContainerRef.current.innerHTML = '';

//       try {
//         const pdfDocInstance = await pdfjs.getDocument(pdfSrc).promise;
//         pdfDocRef.current = pdfDocInstance;

//         const page = await pdfDocInstance.getPage(1);
//         renderPage(1, page);
//       } catch (error) {
//         console.error('Error loading PDF:', error);
//       }
//     }
//   }, [pdfSrc, renderPage]);

//   useEffect(() => {
//     let currentContainer = pdfContainerRef.current;

//     if (isOpen) {
//       openModal();
//     }

//     return () => {
//       if (currentContainer) {
//         currentContainer.innerHTML = '';
//       }
//       if (closeModalRef.current) {
//         closeModalRef.current();
//       }
//       if (pdfDocRef.current) {
//         pdfDocRef.current.destroy();
//         pdfDocRef.current = null;
//       }
//     };
//   }, [isOpen, openModal]);

//   return (
//     <div className="modal_price" style={{ display: isOpen ? 'block' : 'none' }}>
//       <button type="button" onClick={closeModal}>
//         Закрыть
//       </button>
//       <div ref={pdfContainerRef}></div>
//     </div>
//   );
// };

// export default ModalPrice;
