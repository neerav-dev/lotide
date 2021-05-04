//without function implementation
let without = function(words, itemToRemove) {
  let source = Array.from(words);
  itemToRemove.forEach(item => {
    source.splice(source.indexOf(item),1);
  });
  return source;
};

module.exports = without;