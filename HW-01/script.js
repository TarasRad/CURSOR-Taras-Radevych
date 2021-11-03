console.log("Зміни внесено");
const silverPrice = 15.678;
const goldPrice = 90.2345;
const platinumPrice = 123.965;
console.log("Максимальне число: " + Math.max(silverPrice, goldPrice, platinumPrice));
console.log("Мінімальне число: " + Math.min(silverPrice, goldPrice, platinumPrice));
summ = silverPrice + goldPrice + platinumPrice;
console.log("Сума вартості всіх товарів: " + summ);

const silverPriceFloor = (Math.floor(silverPrice))
console.log("Ціле чиало вартості товару, округлене в менший бік: "+silverPriceFloor);

const goldPriceFloor = (Math.floor(goldPrice));
console.log("Ціле чиало вартості товару, округлене в менший бік: " + goldPriceFloor);

const platinumPriceFloor = (Math.floor(platinumPrice));
console.log("Ціле чиало вартості товару, округлене в менший бік: " + platinumPriceFloor);

const summRounded = 300;
summRound = silverPriceFloor + goldPriceFloor + platinumPriceFloor;
console.log("Сума товарів, округлена до сотень " + Math.max(summRound,summRounded));//не зрозумів

const floorSum = ((Math.floor(summ / 100)) * 100);
console.log("Сума заокруглена до меншого: " + floorSum);

function checkIfEven(floorSum) {
	return floorSum % 2 == 0

}

console.log("Число є парним: " + checkIfEven(floorSum));

let pay = 500;
console.log("Сума решти, при оплаті всіх товарів куп‘юрою 500 грн: " + (pay-summ));


let price = [silverPrice, goldPrice, platinumPrice];
let sum = 0;
for( let i = 0; i < price.length; i++ ){
    sum += parseFloat( price[i], 10);
}

const avg = sum/price.length;


console.log("Середнє значення сум, округлене до другого знаку, після коми: "+avg.toFixed(2));


let discount = Math.random() * 101;
let discountSumm = summ * discount / 100;
let paySumm = summ - discountSumm;
console.log("Сума до оплати з рондомною знижкою, заокругленою до 2 знаків після коми: " + paySumm.toFixed(2));

let profit = summ/2;
let discountProfit = profit - discount;
console.log("Чистий прибуток, з урахуванням знижки: " + discountProfit);
console.log("Чистий прибуток, з урахуванням знижки, округлений до 2х знаків після коми: " + discountProfit.toFixed(2));