const without = function(source, itemsToRemove) {
  let keptItems = [...source];
  let i = 0;

  while (i < keptItems.length) {
    let j = 0;
    while (j < itemsToRemove.length) {
      if (keptItems[i] === itemsToRemove[j]) {
        keptItems.splice(i, 1);
        i--;
        break;
      }
      j++;
    }
    i++;
  }
  return keptItems;
};

module.exports = without;