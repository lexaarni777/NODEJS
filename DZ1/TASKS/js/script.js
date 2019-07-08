/*
1. Требуется реализовать декоратор с параметрами pause,
который откладывает выполнение функции на указанное
количество секунд. Пример использования:
function func() {
console.log('Функция выполниться с задержкой в 2 секунды!');}
let paused = pause(func, 2);
paused();
*/
console.log('Задача № 1 начало');
//
function sum(n){
 console.log(n + n);
};

function pauseDecorator(func, second){
  return function(){
    setTimeout(()=>func.apply(this, arguments), second);
  };
};

let paused = pauseDecorator(sum, 5000);
paused(6);
//
console.log('Задача № 1 конец');
//
/*
2*. Требуется реализовать декоратор с параметрами returnObject,
который в случае, если функция возвращает массив, подменяет
его объектом. Имена задаются в параметрах декоратора. Декоратор
универсальный, количество имен переменное.
Пример использования №1:
function func(){
return [1, 2]
}
let func_decoreted = return_object(func, 'one', 'two');
let r = func_decoreted();
console.log(r.one); // 1
console.log(r.two); //2
Пример использования №2:
function func(){
return ['Python', 'is', 'programming language']
}
let r = return_object (func, 'a', 'b', 'c')();
console.log(r.c) // 'programming language'
*/
console.log('Задача № 2 начало');
//
/*
function func(){
  return [1,2];
};
*/
arr = [0,1,2,30]

console.log(typeof(arr));
/*
function return_object(f, ...arg){
  return function(){
      let obj = [];
      
  };  
};

let r = return_object(func, 'one', 'two');

console.log(r.one);



//
console.log('Задача № 2 конец');
//
/*
3. 
*/

console.log('Задача № 3 начало');
//

//
console.log('Задача № 3 конец');
//
/*
4. 
*/

console.log('Задача № 4 начало');
//

//
console.log('Задача № 4 конец');
//




















