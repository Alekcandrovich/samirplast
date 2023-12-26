import $ from 'jQuery';

let overlayCount = 0;

function createImageSlider(images) {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  const modal = document.createElement('div');
  modal.id = 'modalProduct';
  modal.classList.add('modal_product');

  const closeButton = document.createElement('button');
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('data-modal-close', true);
  closeButton.classList.add('close-modal', 'close-posicion');
  closeButton.innerHTML = `
    <svg class="icon-modal">
      <use href="./icons.svg#close"></use>
    </svg>
  `;

  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('slider-container');

  const slider = document.createElement('div');
  slider.classList.add('slider');

  images.forEach(imageData => {
    const { imageSrc, text } = imageData;
    const slide = createImageSlide(imageSrc, text);
    slider.appendChild(slide);
  });

  sliderContainer.appendChild(slider);
  modal.appendChild(closeButton);
  modal.appendChild(sliderContainer);

  if (overlayCount === 0) {
    document.body.classList.add('modal-open');
    document.body.appendChild(modalOverlay);
  }

  document.body.appendChild(modal);

  overlayCount++;

  $(slider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: { delay: 2000 },
    infinite: true,
    prevArrow: `
      <div class="slider-arrow prev">
        <svg class="icon-modal">
          <use href="./icons.svg#left"></use>
        </svg>
      </div>
    `,
    nextArrow: `
      <div class="slider-arrow next">
        <svg class="icon-modal">
          <use href="./icons.svg#right"></use>
        </svg>
      </div>
    `,
    pauseOnHover: false,
  });

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
    closeModalFunction(modal);
  };

  closeButton.addEventListener('click', closeModal);
  document.body.addEventListener('keydown', closeOnEsc);

  return modal;
}

function createImageSlide(imageSrc, text) {
  const slide = document.createElement('div');
  slide.classList.add('slide');

  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = 'Slide Image';
  slide.appendChild(image);

  const textElement = document.createElement('p');
  textElement.style.textAlign = 'center';
  textElement.style.marginTop = '10px';
  textElement.style.width = '100%';
  slide.appendChild(textElement);

  if (text.includes('(')) {
    const [prefix, suffix] = text.split('(');

    const prefixSpan = document.createElement('span');
    prefixSpan.textContent = prefix;
    textElement.appendChild(prefixSpan);

    const suffixSpan = document.createElement('span');
    const [size, rest] = suffix.split(')');
    suffixSpan.textContent = `${size}${rest}`;
    suffixSpan.style.fontWeight = 'bold';
    suffixSpan.style.color = 'red';
    textElement.appendChild(suffixSpan);
  } else {
    textElement.textContent = text;
  }

  return slide;
}

function closeModalFunction(modal) {
  if (modal && document.body.contains(modal)) {
    document.body.removeChild(modal);
  }
}

export default createImageSlider;
export { closeModalFunction };