//const assertEqual = require('./assertEqual');

const head = function(items) {
  if (items.length === 0) {
    return undefined;
  }
  return items[0];
};

module.exports = head;

