let silver = 15.678;
let gold = 90.2345;
let platinum = 123.965;
console.log("Максимальне число: "+Math.max(silver, gold, platinum));
console.log("Мінімальне число: "+Math.min(silver, gold, platinum));
summ = silver+gold+platinum;
console.log("Сума вартості всіх товарів: "+summ);

let silverFloor = (Math.floor(silver))
console.log("Ціле чиало вартості товару, округлене в менший бік: "+silverFloor);

let goldFloor = (Math.floor(gold));
console.log("Ціле чиало вартості товару, округлене в менший бік: "+goldFloor);

let platinumFloor = (Math.floor(platinum));
console.log("Ціле чиало вартості товару, округлене в менший бік: "+platinumFloor);

let summRounded = 300;
summRound = silverFloor+goldFloor+platinumFloor;
console.log("Сума товарів, округлена до сотень "+Math.max(summRound,summRounded));//не зрозумів

let floorSum = ((Math.floor(summ/100))*100);
console.log("Сума заокруглена до меншого: "+floorSum);

function booleanSumm(floorSum) {
	var x
	if (floorSum % 2 == 0) {
		x = true;
	} else {
		x = false;
	}
	return x;

}

console.log("Число є парним: "+booleanSumm(floorSum));

let pay = 500;
console.log("Сума решти, при оплаті всіх товарів куп‘юрою 500 грн: "+(pay-summ));


let price = [silver, gold, platinum];
let sum = 0;
for( let i = 0; i < price.length; i++ ){
    sum += parseFloat( price[i], 10);
}

var avg = sum/price.length;


console.log("Середнє значення сум, округлене до другого знаку, після коми: "+avg.toFixed(2));


let discount = Math.random()*101;
let discountSumm = summ * discount/100;
let paySumm = summ - discountSumm;
console.log("Сума до оплати з рондомною знижкою, заокругленою до 2 знаків після коми: "+paySumm.toFixed(2));

let profit = summ/2;
let discountProfit = profit - discount;
console.log("Чистий прибуток, з урахуванням знижки: "+discountProfit);
console.log("Чистий прибуток, з урахуванням знижки, округлений до 2х знаків після коми: "+discountProfit.toFixed(2));