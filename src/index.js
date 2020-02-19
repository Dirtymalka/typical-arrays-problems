
exports.min = function min (array) {
    if (arguments.length > 0 && array.length > 0) {
        array.sort(function(a, b) { return a - b; });
        console.log(array);
        return array[0];
    }
  return 0;
}

exports.max = function max (array) {
    if (arguments.length > 0 && array.length > 0) {
        array.sort(function(a, b) { return a - b; });
        console.log(array);
        return array[array.length - 1];
    }
  return 0;
}

exports.avg = function avg (array) {
    if (arguments.length > 0 && array.length > 0) {
        return (array.reduce((sum, current) => sum + current, 0)) / array.length;
    }
  return 0;
}
