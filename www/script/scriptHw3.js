/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function isPositive(number){
    if (typeof number === 'number'){
        if (number >= 0){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        throw new Error('Error');
    }
}

isPositive(3); // true

console.log(isPositive(-3));

// isPositive(-3); // false

// throw new Error('Error');