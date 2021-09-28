let n = prompt("Введіть число 'n': ");
nInteger = parseInt(n , 10);


while(isNaN(nInteger)){
    let n = prompt("Ви ввели не число, введіть коректне число 'n': ");
    nInteger = parseInt(n , 10);
    console.log(nInteger);
    
}

let m = prompt("Введіть число 'm': ");
mInteger = parseInt(m , 10);

while(isNaN(mInteger) || nInteger > mInteger) {
    let m = prompt("Ви ввели не число, введіть коректне число 'm': ");
    mInteger = parseInt(m , 10);
    console.log(mInteger);
    document.writeln(mInteger);
}

const flag = confirm("Пропускати парні числа?");

let sum = 0;
console.log(nInteger, mInteger);
for (i = nInteger; i<= mInteger; i++)
{
    if(flag)
    {
        if(i % 2 == 0)
        {
            continue;
        }
    }

sum = sum + i;

}
console.log("Результат додавання чисел у діапазоні від 'n' до 'm': " + sum);
document.writeln("Введене число 'n': " + nInteger);
document.writeln("Введене число 'm': " + mInteger);
document.writeln("Результат додавання чисел у діапазоні від 'n' до 'm': " + sum);


