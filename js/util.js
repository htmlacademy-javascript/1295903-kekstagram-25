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

const showAlert = (message) => {
  const alertTemplate = document.querySelector('#data-error').content.querySelector('.error');
  const alertContainer = alertTemplate.cloneNode(true);
  const alertTextContainer = alertContainer.querySelector('.error__title');
  const ALERT_SHOW_TIME = 5000;

  alertTextContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomNum, isCorrectLength, makeArray, getRandomArrayElement, isEscapeKey, showAlert, debounce};
