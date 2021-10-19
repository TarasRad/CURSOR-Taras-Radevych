function filterEvenNumbers(...numbers) {
  const result = numbers.filter((num) => num % 2 !== 0);
  return result;
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

filterEvenNumbers(new Array(4, 3, 16, 12, 7, 20, 24));

function calcMedian(array) {
  const sum = array.reduce((total, amount) => {
    return (total += amount);
  });
  console.log(sum);

  let median = sum / array.length;
  if (Number.isInteger(median)) {
    console.log(median);
  } else {
    console.log(median + " - не ціле число");
  }
}
console.log(calcMedian([1, 2, 3, 4, 5]));

function countPositiveNumbers(...numbers) {
  const result = numbers.filter((num) => num > 0);
  return result.reduce((amount) => result.length);
}

console.log(
  "Кількість чисел, які більші за '0': " +
    countPositiveNumbers(1, -2, 3, -4, -5, 6)
);

function getDividedByFive(array) {
  let dividedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 5 === 0 && array[i] !== 0) {
      dividedArray.push(array[i]);
    }
  }

  console.log(dividedArray);
}

getDividedByFive([4, 3, 14, -3, 0, -6, 8, 5, 10, 55]);

function generateCombinations(word) {
  if (word.length < 2) {
    return word;
  } else if (word.length > 10) {
    console.log("Довжина слова " + word + " більше 10 символів");
  } else {
    let allAnswers = [];
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      let shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1); //!!!!!
      let shortwordArray = generateCombinations(shorterWord);
      for (let j = 0; j < shortwordArray.length; j++) {
        allAnswers.push(letter + shortwordArray[j]);
      }
    }
    return allAnswers;
  }
}

console.log(generateCombinations("dog"));

function divideByThree(word) {
  let result = word.toLowerCase();

  if (result.length < 4) {
    return result;
  } else {
    let a = -3;
    let finalArray = [];
    for (let i = 0; i <= result.length; i += 3) {
      finalArray.push(result.slice(a, i));
      a += 3;
    }

    let endval = result.slice(a, result.length);
    if (endval !== "") {
      finalArray.push(endval);
    }
    finalArray.shift();
    console.log(finalArray);
  }
}

console.log(divideByThree("Commander"));
