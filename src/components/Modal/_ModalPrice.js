let overlayCount = 0;

function createImageModal(pdfSrc) {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  const modal = document.createElement('div');
  modal.id = 'modalPrice';
  modal.classList.add('modal_price');

  const closeButton = document.createElement('button');
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('data-modal-close', true);
  closeButton.classList.add('close-modal', 'close-posicion');
  closeButton.innerHTML = `
    <svg class="icon-modal">
      <use href="../images/icons.svg#icon-close"></use>
    </svg>
  `;

  const pdfContainer = document.createElement('div');
  pdfContainer.classList.add('pdf-container');

  const iframe = createPDFIframe(pdfSrc);
  pdfContainer.appendChild(iframe);

  modal.appendChild(closeButton);
  modal.appendChild(pdfContainer);

  if (overlayCount === 0) {
    document.body.classList.add('modal-open');
    document.body.appendChild(modalOverlay);
    modalOverlay.style.display = 'block';
  }

  document.body.appendChild(modal);

  overlayCount++;

  let isModalOpen = true;

  const closeOnEsc = event => {
    if (event.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  };

  const closeModal = () => {
    isModalOpen = false;
    overlayCount--;

    if (overlayCount === 0) {
      document.body.classList.remove('modal-open');
      document.body.removeChild(modalOverlay);
    }

    document.body.removeEventListener('keydown', closeOnEsc);
    closeModalFunction(modal, modalOverlay);
  };

  closeButton.addEventListener('click', closeModal);
  document.body.addEventListener('keydown', closeOnEsc);

  return modal;
}

function createPDFIframe(pdfSrc) {
  const iframe = document.createElement('iframe');
  iframe.src = `${pdfSrc}#toolbar=0&navpanes=0&scrollbar=0`;
  iframe.width = '100%';
  iframe.height = '600px';
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('scrolling', 'no');
  return iframe;
}

function closeModalFunction(modal, overlay) {
  if (modal && document.body.contains(modal)) {
    document.body.style.overflow = '';
    document.body.removeChild(modal);
    document.body.removeChild(overlay);
  }
}

const buttons = document.querySelectorAll('.open-modal_price');

buttons.forEach(button => {
  const pdfSrc = button.getAttribute('data-pdf-src');

  button.addEventListener('click', () => {
    createImageModal(pdfSrc);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  closeModalFunction(document.getElementById('modalPrice'));
});
