const head = (arr) => {
  if (arr.length === 0) {
    return "This array is empty!";
  } else {
    return arr[0];
  }
};

module.exports = head;