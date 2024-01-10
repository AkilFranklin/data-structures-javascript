let num1 = 1;
let num2 = num1;

console.log(num1) // 1
console.log(num2) // 1, not permanent. num1 can change but it will not change num2

num1 = 5;

console.log(num1) // 5
console.log(num2) // 1
// this is not a pointer. this is setting values at runtime.

let obj1 = { value: 1 };
let obj2 = obj1;

console.log(obj1)   
console.log(obj)

obj1.value = 5;
