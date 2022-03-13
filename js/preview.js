import {generatePhotos} from './data.js';
import {openUserModal} from './user-modal.js';

const picturesBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photos = generatePhotos();

const picturesBlockFragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const {url, likes, comments} = photo;
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').innerText = likes;
  pictureElement.querySelector('.picture__comments').innerText = comments.length;
  pictureElement.addEventListener('click', () => {
    openUserModal(photo);
  });
  picturesBlockFragment.appendChild(pictureElement);
});

picturesBlock.appendChild(picturesBlockFragment);
