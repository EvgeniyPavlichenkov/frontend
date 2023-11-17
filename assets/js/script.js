// string
// const name = 'Tom';
// const surname = 'Todd';
// const fullName = surname + name;
// const fullName = surname + ' ' + name;
// const fullName = `My fullName is ${surname} ${name}`
// console.log(fullName)

//number
// -2^53 +2^53
// const age = 20;
// const price = 20.4;
// console.log('My LOG', age, price)

// BigInt
// const num = 9007199254740991;
// console.log('num', num);
// console.log('num', num + 1);
// console.log('num', num + 2);

// const numB = 9007199254740991n;
// console.log('numB', numB);
// console.log('numB', numB + 1n);
// console.log('numB', numB + 2n);

// boolean
// const flag = true;
// const flag2 = false;

// null, undefined
// var isAlive;
// console.log(isAlive)
// isAlive = null;
// console.log(isAlive)
// isAlive = undefined;
// console.log(isAlive);

// Object
// var user = {
//     name: 'Tom',
//     age: 20 + 2,
//     isAlive: isAlive
// }
// console.log(user)


// var var1 = 45;
// var varNumberResult = var1 + 5;
// console.log(varNumberResult);

// var1 = '45';
// var varStringResult = var1 + 5;
// console.log(varStringResult);


// typeof
// const varNull = null;
// const varUndefined = undefined;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof numB);
// console.log(typeof flag)
// console.log(typeof user);
// console.log(typeof varUndefined)
// console.log(typeof varNull)


// Math
// var x = 10;
// var y = x + 1;
// w = x - y;
// y = x * w;
// console.log(x / 3);
// console.log(x % 3);
// console.log(x ** 3);

// console.log(x)
// x++; // x = x + 1
// x--
// console.log(x)
// ++x;
// --x
// console.log(x)

// comparing
// == сравнивает значения
// === сравнивает значения и ТИП
// != сравнивает значения
// !== сравнивает значения и ТИП
// > сравнивает значения
// < сравнивает значения
// >= сравнивает значения
// <= сравнивает значения

// const income = 100;
// const incomeString = '100';
// console.log(income == incomeString);
// console.log(income === incomeString);


// var a = 100;
// const b = 50;
// console.log(a > 50 && b < 60);
// console.log(a > 50 || b < 8);
// const c = true;
// console.log(!(a > 50 || b < 8));

// a += 5; // a = a + 5
// console.log(a);


// if...else

// if (a > 100) {
//     console.log('a > 100')
// } else {
//     console.log('a <= 100')
// }


// if else if
// if (a > 100) {
//     console.log('a > 100');
// } else if (a === 100) {
//     console.log('a === 100')
// } else {
//     console.log('a < 100')
// }

// if (undefined) - false
// if (null) - false
// if (boolean) - boolean
// if (number) - true 'number>0', false 'number<=0'
// if (string) - true 'строка не пустая', false 'строка пустая'
// if (Object) - true

// Тернарные операции
// var a;
// var flag = true;
// if (flag) {
//     a = 5;
// } else {
//     a = 10;
// }
// var a = flag ? 5 : 10;
// console.log(flag ? 5 : 10)

// Оператор ??
// console.log("hello" ?? "world");
// console.log(null ?? "world");
// console.log("hello" ?? null);
// console.log(undefined ?? "world");
//
// var response = ".....";
// console.log(response ?? 'There is no response');

// switch...case
// var income = 100;
// switch (income) {
//     case 100:
//     case 200:
//         console.log('Доход равен 100');
//         console.log('Доход равен 200');
//         break;
//     case 300:
//         console.log('Доход равен 300');
//     case 400:
//         console.log('Доход равен 400');
//         break;
//     default:
//         console.log('Доход отсутствует')
//         break;
// }

// Массивы
// var myArray = ['Tom', 'Alice', 'Sam'];
// console.log(myArray[1]) // Alice
// console.log(myArray[3]) // undefined
// myArray[4] = 'Jhon';
// console.log(myArray, myArray.length);

// var a = 10;
// var myArray = ['Tom', 5, false, 5n, a];
// console.log(myArray)

// var myArray = [
//     ["Tom", 25, false],
//     ["Bill", 38, true]
// ];
//
// console.log(myArray[0][0])

// Циклы
// for
// for..in
// for..of
// while
// do..while


// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// for(let i = 0; myArray[i] != 4; i++) {
//     console.log(myArray[i]);
// }

// for (let i = 0, j = 1; i < nestedArray.length; i++, j++) {
//     console.log(i, j)
// }

// var i = 0;
// do {
//     console.log(myArray[i]);
//     i++;
// } while (i < myArray.length)

// var myArray = ['Tom', 'Alice', 'Sam'];
// for (const key in myArray) {
//     console.log(key);
// }
//
// for (const value of myArray) {
//     console.log(value);
// }


// functions

// function sayHi (name = 'Bill', city) {
//     console.log(`Hi, ${name}! Are you from ${city}?`)
// }
// sayHi();

// var myFunc = sayHi;
// myFunc();

// var myFunc = function () {
//     console.log("Hi")
// }
//
// myFunc();

// sayHi('Tom', 'Moscow');
// sayHi();
// sayHi(undefined, 'Moscow');

// sayHi(undefined, 'Moscow');

// function sum(){
//     var result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         const value = arguments[i];
//         if (typeof value === 'number') {
//             result += value; // result = result + value;
//         }
//     }
//     return result;
// }
//
// console.log(sum(1,2,3,4,5,6,'Tom', false, undefined, null, 9));

// function sum(x, y) {
//     return x + y;
// }
//
// function subtract (x, y) {
//     return x - y;
// }
//
// function operation(x, y, func) {
//     const result = func(x,y);
//     console.log(result);
// }
//
// console.log('Sum');
// operation(10, 6, sum);
//
// console.log('Subtract');
// operation(10, 6, subtract);

// function menu (n) {
//     switch (n) {
//         case 1:
//             return function(x, y){
//                 return x + y;
//             }
//         case 2:
//             return function(x, y){
//                 return x - y;
//             }
//         case 3:
//             return function(x, y){
//                 return x * y;
//             }
//         default:
//             return function(){
//                 return 0
//             }
//     }
// }
//
// var sum = menu(1);
// console.log(sum(5,4));
// //menu(2)(6,2)
// console.log(menu(2)(6,2));
// console.log(menu(0)());



// var a = 5;
// let b = 6;
// const c = 7;
//
// function sum() {
//     var d = a + b + c;
//     console.log(d)
// }
//
// sum()


// {
//     var a = 5;
//     let b = 6;
//     const c = 7;
// }


// function print () {
//     var a = 5;
//     let b = 6;
//     const c = 7;
//     console.log(a, b, c);
// }
//
// print();
// console.log(a);

// {
//     var a = 5;
// }

// if (true) {
//     var a = 6;
// }
//
// console.log(a)


// {
//     // let a = 5;
//     const a = 5;
// }

// if (true) {
//     let a = 4;
// }
//
// console.log(a);

// var a = 89;
//
// function print () {
//     var a = 10;
//     console.log(a);
// }
//
// print();


// function print () {
//     var a = 89;
//     {
//         var a = 10;
//         console.log('Block', a)
//     }
//     console.log('Function', a);
// }
//
// print();

// const a = 12;
// function print () {
//     const a = 89;
//     {
//         const a = 10;
//         console.log('Block', a)
//     }
//     console.log('Function', a);
// }
//
// print();
// console.log('Global', a)


// function change(x) {
//     x = 2 * x;
//     console.log('Function', x);
// }
//
// const a = 5;
// change(a);
// console.log(a)

// function change(user) {
//     user.name = 'Tom';
//     console.log('Function', user);
// }
// const user = {
//     name: 'Bill'
// }
//
// console.log('Before', user);
// change(user);
// console.log('After', user);

// function change(user) {
//     user = 5
//     console.log('Function', user);
// }
// const user = {
//     name: 'Bill'
// }
//
// console.log('Before', user);
// change(user);
// console.log('After', user);

// const user = {
//  name: 'Tom'
// }
// const user = new Object();

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function() {
//         console.log(`Hi, I am ${this.name}! I am ${age} years old`);
//     }
// }
//
//
// const tom = new User('Tom', 20);
// tom.sayHi();

// console.log(this); // Window

// function print () {
//     var bar = 'bar2';
//     const func = function () {
//         console.log(this.bar);
//     }
//     func();
// }
// var bar = 'bar1';
// print();
// console.log(this)

// var user = {
//     name: 'Tom',
//     sayHi: function() {
//         console.log(`Hi, I am ${this.name}`)
//     }
// }
//
// user.sayHi();

// function foo() {
//     var bar = 'bar2';
//     console.log(this.bar);
// }
//
// var o3 = {bar: 'bar3', foo: foo};
// var o4 = {bar: 'bar4', foo: foo};
//
// var bar = 'bar1';
//
// foo();
// o3.foo();
// o4.foo();


// var o1 = {
//     bar: 'bar1',
//     foo: function() {
//         console.log(this.bar);
//     }
// }
//
// var o2 = {
//     bar: 'bar2',
//     foo: o1.foo
// }
//
// var bar = 'bar3';
// var foo = o1.foo;
//
// o1.foo();
// o2.foo();
// foo();


// var bar = "bar2";
//
// function foo(){
//     var bar = "bar5";
//     function foo1(){
//         console.log(this.bar);
//     }
//     foo1();
// }
// foo();

// function foo(a, b) {
//     console.log('LOG', this.bar, a, b);
// }
//
// const obj = {
//     bar: 'Hello from obj'
// };
// var bar = 'Hello from window';
//
// foo();
// foo.call(obj, 1, 2);
//foo.apply()

// const person = {
//     name: 'Tom',
//     sayHi: () => {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }
// var name = 'John';
// person.sayHi();

// console.log('Before');
// window.alert('Hello World!');
// window.alert('Hello World!');
// const result = prompt('Hello World!');
// console.log('After', result);

// var alert = function(message) {
//     console.log(message);
// }
//
// window.alert('Hello World');

// var message = 'Hello World!!!'
// alert(window.message);
// const timeoutFunction = () => {
//     console.log('Log after 5 seconds');
// }
// setTimeout(
//     () => {
//         console.log('Log after 5 seconds');
//     },
//     5000
// )

// let timerId = setInterval(
//     () => {
//         const date = new Date();
//         const result = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//         document.body.innerText = result;
//     },
//     1000
// )

// setTimeout(() => {
//     clearInterval(timerId)
// }, 5000);



