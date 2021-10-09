//const students = [
//  "Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана",
//];

const names = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const namesString = "Виктор и Карина и Татьяна и Юрий и Ирина";

//document.writeln(`В массиве есть Игорь? ---> ${names.includes("Игорь")} <br>`);
//document.writeln(`В массиве есть Влад? ---> ${names.includes("Влад")} <br>`);
//document.writeln(`Индекс Игоря ---> ${names.indexOf("Игорь")} <br>`);
//document.writeln(`Индекс Влада ---> ${names.indexOf("Влад")} <br>`);
//document.writeln(`Создадим массив из строки с именами: ${namesString.split(" и ")} <br>`);
document.writeln(`Создадим строку из массива с именами: ${names.join("! ")} <br>`);
document.writeln(`Объединим и выведем оба наших массива с именами: ${names.concat(namesString.split(" и "))} <br>`);
document.writeln(`Тоже самое с помощью spread оператора: ${[...names, ...namesString.split(" и ")]} <br>`);
document.writeln(`Показать имена с 2 по 5(включительно): ${names.slice(2, 5)}<br>`);

// .splice() – МУТИРУЕТ МАССИВ!!!
const oldNames = names.splice(1, 2, "Влад", "Женя");
document.writeln(`Заменим имена Игорь и Светлана на имена Влад и Женя: ${names} <br>`);



console.log(names.lastIndexOf('а'))



'канал'.lastIndexOf('а', 2);  // вернёт 1