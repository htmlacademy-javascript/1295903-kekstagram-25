const getRandomNum = (from, to) => {
  if (isNaN(from) || isNaN(to)) {
    return 0;
  }

  if (from === to) {
    return from;
  }

  if (from > to) {
    const tmp = from;
    from = to;
    to = tmp;
  }

  return Math.floor(Math.random() * (to - from + 1)) + from;
};

const isCorrectLength = (str, maxLength) => str.length <= maxLength;

const makeArray = (length, callback) => Array.from({length: length}, (_, i) => callback(i));

const getRandomArrayElement = (elements) => elements[getRandomNum(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNum, isCorrectLength, makeArray, getRandomArrayElement, isEscapeKey};
