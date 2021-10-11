function capsFirstLetter(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
//console.log(capsFirstLetter('tEXt')) // - тест функції

const getFinallySalary = (fullsalary) => {
  let percent = (fullsalary / 100) * 19.5;
  let salary = fullsalary - percent;
  return salary;
};
//console.log(getFinallySalary(1200)); // - тест функції

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
//console.log(countLetter("а", "Асталавіста"));

const deleteLetter = (findLetter, someText) => {
  let count = 0;
  let i = 0;
  let lenght = someText.length;
  someText = someText.toLowerCase();
  for (i = 0; i < lenght; i++) {
    if (someText.charAt(i) == findLetter) {
      someText = someText.replaceAll(findLetter, "");
      break;
    }
  }
  return someText;
};
//console.log(deleteLetter("d", "dddd dolboyo bdddd")); //тест функції

const exchangeCurrency = (someText) => {
  let count = 0;
  let i = 0;

  someText = someText.toLowerCase();

  for (i = 0; i < someText.length; i++) {
    if (someText.charAt(i) == "$") {
      someText = someText.substring(0, i - 1); // обрізає стрічку від початку до першого знаку$
      someText = someText * 25;

      break;
    } else if (someText.charAt(i) == "u") {
      someText = someText.substring(0, i);
      someText = someText / 25;
      //console.log("фініш " + someText);
      break;
    }
  }
  //console.log("фініш " + someText);

  return someText;
};
//console.log(exchangeCurrency("10000UAH")); //тест функції

function getRandomPassword(m) {
  //let m = prompt("Введіть число 'm': ");
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
    //console.log("rand " + rand );
    //console.log( rand * (possible.length));

    let sup = Math.floor(rand * possible.length);

    //console.log(sup);
    //console.log(i);

    text = text + (i == 0 && sup == i ? "1" : possible.charAt(sup));
    //console.log("-- " + text);
  }
  return Number(text);
}
console.log(capsFirstLetter("tEXt")); // - тест функції
console.log(getFinallySalary(1200)); // - тест функції
console.log(countLetter("а", "Асталавіста"));
console.log(deleteLetter("d", "dddd dolboyo bdddd")); //тест функції
console.log(exchangeCurrency("10000UAH")); //тест функції
console.log(getRandomPassword(5));
