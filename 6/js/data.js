import {getRandomNum, makeArray, isCorrectLength, getRandomArrayElement} from './util.js';

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
  'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const getCommentMessage = () => {
  const SENTENCE_COUNT = getRandomNum(1, 2);
  const MAX_LENGTH = 140;

  const message = Array.from({length: SENTENCE_COUNT}, () => getRandomArrayElement(COMMENTS)).join(' ');

  if (isCorrectLength(message, MAX_LENGTH)) {
    return message;
  }

  return message.substring(0, MAX_LENGTH);
};

const createComment = (photoIndex, commentIndex) => ({
  id: parseInt(`${photoIndex}${commentIndex}`, 10),
  avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
  message: getCommentMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNum(15, 200),
  comments: makeArray(getRandomNum(1,10), (i) => createComment(index, i))
});

const generatePhotos = () => makeArray(25, createPhoto);

export {generatePhotos};
