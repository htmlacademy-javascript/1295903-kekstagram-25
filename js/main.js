function getRandomNum(from, to) {
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
}

function isCorrectLength(str, maxLength) {
  return str.length <= maxLength;
}

getRandomNum(1, 5);
isCorrectLength('test', 3);
