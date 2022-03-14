const userModalElement = document.querySelector('.big-picture');
const userModalImageElement = userModalElement.querySelector('.big-picture__img img');
const userModalLikesElement = userModalElement.querySelector('.likes-count');
const userModalCommentsElement = userModalElement.querySelector('.comments-count');
const userModalDescriptionElement = userModalElement.querySelector('.social__caption');
const commentsBlock = userModalElement.querySelector('.social__comments');

const renderPhoto = ({url, likes, comments, description}) => {
  userModalImageElement.src = url;
  userModalLikesElement.innerText = likes;
  userModalCommentsElement.innerText = comments.length;
  userModalDescriptionElement.innerText = description;

  let commentsBlockInnerHtml = '';

  comments.forEach(({avatar, message, name}) => {
    const commentElement = `<li class="social__comment"><img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35"> <p class="social__text">${message}</p></li>`;
    commentsBlockInnerHtml += commentElement;
  });

  commentsBlock.innerHTML = commentsBlockInnerHtml;
};

const clearPhoto = () => {
  userModalImageElement.src = '';
  userModalLikesElement.innerText = '';
  userModalCommentsElement.innerText = '';
  userModalDescriptionElement.innerText = '';
  commentsBlock.innerHTML = '';
};

export {renderPhoto, clearPhoto};
