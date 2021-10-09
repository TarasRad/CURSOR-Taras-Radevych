const capsFirstLetter = (str) => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const getFinallySalary = (fullsalary) => {
  let percent = (fullsalary / 100) * 19.5;
  let salary = fullsalary - percent;
  return salary;
};

const countLetter = (letter, word) => {
  let count = 0;
  let i = 0;
  word = word.toLowerCase();
  for (i = 0; i < word.length; i++) {
    if (word.charAt(i) == letter) {
      count++;
    }
  }
  return count;
};

const deleteLetter = (findLetter, currency) => {
  let count = 0;
  let i = 0;
  let lenght = currency.length;
  currency = currency.toLowerCase();
  for (i = 0; i < lenght; i++) {
    if (currency.charAt(i) == findLetter) {
      currency = currency.replaceAll(findLetter, "");
      break;
    }
  }
  return currency;
};

const exchangeCurrency = (currency) => {
  let count = 0;
  let i = 0;

  currency = currency.toLowerCase();

  for (i = 0; i < currency.length; i++) {
    if (currency.charAt(i) == "$") {
      currency = currency.substring(0, i - 1); // обрізає стрічку від початку до першого знаку$
      currency = currency * 25;

      break;
    } else if (currency.charAt(i) == "u") {
      currency = currency.substring(0, i);
      currency = currency / 25;
      break;
    }
  }

  return currency;
};

const getRandomPassword = (m = 8) => {
  mInteger = parseInt(m, 10);

  if (isNaN(mInteger) || mInteger > 8) {
    length = 8;
  } else {
    length = mInteger;
  }

  let text = "";
  let possible = "0123456789";

  for (let i = 0; i < length; i++) {
    let rand = Math.random();

    let sup = Math.floor(rand * possible.length);

    text = text + (i == 0 && sup == i ? "1" : possible.charAt(sup));
  }
  return Number(text);
};
console.log(capsFirstLetter("tEXt")); // - тест функції
console.log(getFinallySalary(1200)); // - тест функції
console.log(countLetter("а", "Асталавіста"));
console.log(deleteLetter("d", "dddd dolboyo bdddd")); //тест функції
console.log(exchangeCurrency("10000UAH")); //тест функції
console.log(getRandomPassword(5));
