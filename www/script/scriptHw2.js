/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение


function isEven(number){
    if (typeof number === 'number'){
        if (number % 2 == 0){
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

console.log(isEven(4));