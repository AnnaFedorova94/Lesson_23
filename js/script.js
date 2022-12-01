"use strict"

// Домашка №1

// Вариант 1 - не вірно, повинно бути щось одне, чи + чи -
 console.log('35'  -  "22");

// Вариант 2 - правильно
console.log('35' * "22");

// Вариант 3 - не вірно, треба використовувати  змінну  
let user = 22;
console.log('558' > user++);

//  Вариант 4 - вернет 0, так як newUsers отримує початкове значення. Якщо використовувати  ++userCounter, то поверне 1
 let userCounter = 0;
 let newUsers = userCounter++;
 console.log(newUsers);

//  Вариант 5 - вернет 11. Виконуєтся перша умова !false = true
 console.log(!false && 11 || 18 && ! '');

//  Вариант 6 - правильно, вернув перший аргумент
 let name = 0;
console.log(name ?? "Без імені");

// =================================================================

// Домашка №2

//  Вариант1 -  число 1 не строго равна строке 1  'Брехня!'
if (1 === "1") {
   console.log('Правда!');
} else {
   console.log('Брехня!');
}

//  Вариант2-   число 5 не строго равна строке 5  'Брехня!'
if (5 === "5") {
   console.log('Правда!');
} else {
   console.log('Брехня!');
}

//  Вариант 3  'Правда!'  92 > '11' та 58 < 100 це true
let message = (92 > '11' && 58 < 100) ? 'Правда!' : 'Брехня!';
console.log(message);

//  Вариант 4  'Правда!'
if (0) {
   console.log('Брехня!');
} else if (" ") {
   console.log('Правда!');
}

// =================================================================

// Домашка №3
//  Вариант 1
 for (let i = 1; i < 6; ++i){
    console.log(i);
}

//  Вариант 2-   последний результат 1 
let num = 8;
while(num){
   console.log(num);
   num--;
}

//  Вариант 3
let numm = 0;
while (numm < 3) {
   console.log( numm);
   numm++;
}

//  Вариант 4 - тут не розібралася

// =================================================================

// Домашка №4
//  Вариант 1  
let sourceNum = 1.005 + Number.EPSILON;
let numOne = Math.round(sourceNum * 100) / 100;
 console.log(numOne);
 console.log( numOne.toFixed(1));

//  Вариант 2
let value = "135.58px";
let someValue = parseFloat(value);
console.log( someValue);

//  Вариант 3
let valuee = 58 + "Фрилансер";
 if(58 + "Фрилансер" !==NaN){
   console.log('I NOT NAN')
}
   
//  Вариант 4
console.log(Math.max(10, 58, 39, -150, 0))

// Вариант 5
let someFl = 58.858;
console.log(Math.floor(someFl));

// Домашка №5
//  Вариант 1-  не правильні кавички потрібні хвилясті ``  
let fls = "Фрилансер";
let text = `Привіт! Я  ${fls}`;
console.log(text);

// Вариант 2
let text2 = "Фрилансер";
console.log(text2[5]);

// Вариант 3- неправильно, потрібен унарний оператор
let text3 = 123 + +"456"
console.log(text3);

// Вариант 4
let text4 = "фрилансер";
console.log(text4.toUpperCase());

// Вариант 5
let text5 = "фрилансер";
let textNew = text5.slice(3, 6);
console.log(textNew);

// Вариант 6 - false.    якщо ('лан', 3) - true
let text6 = "фрилансер";
console.log(text6.includes('лан', 4));