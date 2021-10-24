const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const getMyTaxes = function (salary) {
  return salary * this.tax;
};
console.log(`Податки в Україні:  ${getMyTaxes.call(ukraine, 10000)}`);
console.log(`Податки у Латвії:  ${getMyTaxes.call(latvia, 9000)}`);
console.log(`Податки у Литві:  ${getMyTaxes.call(litva, 7500)}`);

const getMiddleTaxes = function () {
  return this.tax * this.middleSalary;
};
console.log(
  `Податки, які платять ІТ-спеціалісти в Україні: ${getMiddleTaxes.call(
    ukraine
  )}`
);
console.log(
  `Податки, які платять ІТ-спеціалісти в Латвії: ${getMiddleTaxes.call(latvia)}`
);
console.log(
  `Податки, які платять ІТ-спеціалісти в Литві: ${getMiddleTaxes.call(litva)}`
);

const getTotalTaxes = function () {
  return this.tax * this.middleSalary * this.vacancies;
};

console.log(
  `Всі податки, які платять ІТ-спеціалісти в Україні: ${getTotalTaxes.call(
    ukraine
  )}`
);
console.log(
  `Всі податки, які платять ІТ-спеціалісти в Латвії: ${getTotalTaxes.call(
    latvia
  )}`
);
console.log(
  `Всі податки, які платять ІТ-спеціалісти в Литві: ${getTotalTaxes.call(
    litva
  )}`
);

const getMyRondomSalary = function () {
  const minSalary = 1500;
  const maxSalary = 2000;
  const salary = Math.floor(
    Math.random() * (maxSalary - minSalary + 1) + minSalary
  );
  const taxes = +(salary * this.tax).toFixed(2);
  const profit = +(salary - taxes).toFixed(2);
  const result = {
    salary,
    taxes,
    profit,
  };
  console.log(result);
};

const getMySalary = function () {
  setInterval(() => {
    getMyRondomSalary.call(ukraine);
    getMyRondomSalary.call(latvia);
    getMyRondomSalary.call(litva);
  }, 10000);
};
getMySalary();
