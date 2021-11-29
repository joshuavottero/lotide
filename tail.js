const assertEqual = require('./assertEqual');

const tail = function(items) {
  let tailArray = [];
  if (items.length > 1) {
    tailArray = items.slice(1);
    return tailArray;
  } else if (items.len === 1) {
    return tailArray;
  } else {
    return tailArray;
  }
};


module.exports = tail;