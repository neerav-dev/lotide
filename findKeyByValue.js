let findKeyByValue = function(bestTVShowsByGenre, showName) {
  for (const genre in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[genre] === showName) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;
