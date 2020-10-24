

module.exports = function towelSort(matrix = []) {
  let arr = [];
  let dir = true;

  for (let i of matrix) {

    if (dir) {
      dir = false;
      for (let j of i) {
        arr.push(j);
      }
    }
    else {
      dir = true;
      for (let j = i.length - 1; j >= 0; j--) {
        arr.push(i[j]);
      }
    }

  }

  return arr;
}

