/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

function f(arr){
    if (Array.isArray(arr) && arr.length > 0){
        for (var x = 0; x <= arr.index; x++) {
            arr.slice(x);
            console.log(arr[x]);
        }
    }
    else{
        throw new Error('Error');
    }
    return console.log(arr);
}


f([1, 2, 3]);
// 1
// 2
// 3

// Array.isArray(arr);