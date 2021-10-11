function filterEvenNumbers(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 == 0) {
      array.splice(i, 1);
    }
  }

  console.log(array);
}

filterEvenNumbers(new Array(4, 3, 16, 12, 7, 20));
