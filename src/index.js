exports.min = function min (array) {
  if (array && array.length) {
    return Math.min.apply(null, array);
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
