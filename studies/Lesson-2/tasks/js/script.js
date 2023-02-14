"use strict";





// --------------------------------------------------
//Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

//1. Вхідні дані
// let thisYear = 2023;
// const birthday = parseInt(prompt('Ви народилися 1 січня, а у якому році?'));

// //2. Обчислення результату
// let age = thisYear - birthday;

// //3. Виведення результату
// alert(`Вітаємо! Вам усього ${age} років, бажаємо гарного дня)`)

// --------------------------------------------------
//Задача 3.Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

// //1. Вхідні дані
// let priceOneItem = parseFloat(prompt('Введіть вартість товару', '0'));
// let quantity = parseInt(prompt('Введіть кілкість товару', '1'));

// //2. Обчислення результату
// let allSum = priceOneItem * quantity;
// let tax = allSum / 100 * 5;
// let allSumWithTax = allSum + tax;

// //3. Виведення результату
// alert(`Загальна вартість товару без ПДВ: ${allSum} грн \n ПДВ: ${tax} грн \n Загальна вартість товару з ПДВ: ${allSumWithTax} грн`)

// --------------------------------------------------
//Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

// //1. Вхідні дані
// let centimeters = parseInt(prompt('Введіть значення у сантиметрах', '0'));

// //2. Обчислення результату
// let kilometers = Math.floor(centimeters / 100000)
// let meters = (centimeters % 100000) / 100

// //3. Виведення результату
// alert(`${centimeters} сантиметрів це ${kilometers} кілометрів та ${meters} метрів`);

// --------------------------------------------------
//Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

// //1. Вхідні дані
// let seconds = parseInt(prompt('Яка кілкість секунд пройшла з початку доби?', '0'));

// //2. Обчислення результату
// let hours = Math.floor(seconds / 60 / 60);
// let minutes = Math.floor(seconds / 60 ) - (hours * 60);

// //3. Виведення результату
// alert(`Це буде ${hours} години та ${minutes} хвилин`);

// --------------------------------------------------
//Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

// //1. Вхідні дані
// let minRandomNumberMonts = 1;
// let maxRandomNumberMonts = 12;

// let minRandomNumberDay = 0;
// let maxRandomNumberDay = 6;

// //2. Обчислення результату
// let sumRandomNumberMonts = minRandomNumberMonts + Math.floor(Math.random()*(maxRandomNumberMonts - minRandomNumberMonts + 1));
// let sumRandomNumberDay = minRandomNumberDay + Math.floor(Math.random()*(maxRandomNumberDay - minRandomNumberDay + 1));

// let sumRandomNumber = sumRandomNumberMonts + sumRandomNumberDay;

// //3. Виведення результату
// document.write(`Сума випадкового номера місяця та випадкового номера дня дорівнює: ${sumRandomNumber}`);

