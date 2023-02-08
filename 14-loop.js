// ======== while loop ===========

// let num = 1;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// let num = 100;
// let total = 0;
// let i = 0;

// while (i <= 100) {
//     total = total + i;
//     i++;
// }
// console.log(total);









// =========== do while loops =============

// let numTwo = 1;

// do {
//     console.log(numTwo);
//     numTwo++;
// } while (numTwo <= 20);









// =============== for loop ===============

// let num = 1;

// for (num = 1; num <= 10; num++) {
//     console.log(num);
// }

// let num = 1000;
// let total = 0;

// for (let i = 0; i <= num; i++) {
//     total = total + i;
// }
// console.log(total);












// =========== for of loop in array =========== 

// const fruits = ["apple", "mango", "grapes"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// ===========for in loop =========== 

// const fruits = ["apple", "mango", "grapes", "fruit4"];
// const fruits2 = [];

// for (let index in fruits) {
//     console.log(fruits[index]);
// }

// ---- for loop logic practice----------

for (let i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}