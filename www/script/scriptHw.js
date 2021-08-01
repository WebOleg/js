/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */
let today = new Date();
const person = {
    rate: today.getDate(),
    // value : 'Nata'
    // configurable: true
    // writable: true
    // enumerable: true
    set salary(salary){

    },
    get salary(){
        if( this.rate > 0){
            return this.salary * this.rate;

        }
        else{
            return '0'
        }
    },
};

Object.defineProperty(person, 'rate', {
    writable: false,
    enumerable: false,
    configurable: false
});

Object.defineProperty(person, 'salary', {
    writable: false,
    enumerable: false
});

person.salary = 50;
console.log(person)