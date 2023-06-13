// ------- test code ------
/*
console.log("Hello world");
console.log("Congrat, Kailash, Now you can go other topics for master in Javascript language");


*/
// ===================================================
//                   1.       VARIABLES
// ====================================================

/*
var numOne = 10;
var numTwo = 20;

var totalNum = numOne + numTwo;
console.log(totalNum);

var firstName = "Kailash";
var lastName = "Kumar";

fullName = firstName + " " + lastName;
console.log(fullName);

var trueAns = true;
var falseAns = false;

if(trueAns == true && falseAns == false){
    console.log("You are Right Kailash");
}



let myName = "Kailash Kumar";
const myAge = 20;

if(myName == "Kailash Kumar" && myAge == 20){
    console.log("You are eligible to Admission in this college");
}



function test() {
  if (true) {
    var myName = "Kailash";
    console.log(myName);
  }
}

test(myName);

function example() {
    if (true) {
      var x = 5;
      console.log(x); // Output: 5
    }
    console.log(x); // Output: 5
  }

  example();
  console.log(x); // Throws an error: ReferenceError: x is not defined

*/

// ============================================================
//                    2.       DATA TYPES
// ============================================================

// let numOne = 20;
// let numTwo = 10.5;
// let numThree = -10;

// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);

// console.log(numTwo / 0);

// let firstName = "Kailash";
// let lastName = "Kumar";

// let myName = "Kailash";
// console.log(typeof myName);

// let myNum = 82833348757834678345643;
// console.log(myNum);
// console.log(typeof myNum);

// let ansReply = true;
// console.log(typeof ansReply);

// if(ansReply==true){
//   function greet(){
//     console.log("Hello world");
//   }

//   greet();
// }

// let myNum;

// console.log(typeof myNum);

// const myObject = {
//   userName : "Kailash",
//   userAge : 24,
//   userAddress : "Bangalore"

// }

// console.log(myObject.userName);
// console.log(myObject.userAddress);

// let myArray = [10, 11,12];

// console.log(myArray);

// console.log(myArray[1]);

// function myFunc(a,b){
//   return a+b;
// }

// let funcValue = myFunc(10,11);

// console.log(funcValue);

// ============================================================
//                    3.      OPERATORS
// ============================================================

// let numOne = 30, numTwo = 20;
// console.log(numOne + numTwo);
// console.log(numOne%numTwo);

// let newNum = numOne +=numTwo;
// console.log(newNum);
// console.log(numOne);

// if(numOne>=numTwo){
//   console.log("Num one greater than num two");
// }

// ============================================================
//                    4.      IF ELSE STATEMENTS
// ============================================================

// let numOne = 11;

// if(numOne<12){
//   console.log("Number less then 12");
// }else if(numOne==10){
//   console.log("Number is equal to 19");
// }

// let userOneAge = 18, userTwoAge = 20, userThreeAge = 30;
// if(userOneAge==18){
//   if(userTwoAge==20){
//     if(userThreeAge==30){
//       console.log("You are BIHARI HERO");
//       if(userOneAge == 18 && userTwoAge<=30){
//         console.log("BIHARI NUMBER - 2");
//       }
//     }
//   }
// }

// ============================================================
//                    5.      LOOPS
// ============================================================

// let myNum = 10;

// while (myNum<=20) {
//   console.log(myNum);
//   myNum++;
// }

// let myNum = 10;
// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// for(let j = 1; j<=myNum; j++){
//   console.log('The number is : ${myNum(j)}');
// }

// let i = -10;
// while(i<=10){
//   console.log(i);
//   i++;
// }

// do{
//   console.log(i);
//   i++;
// }while(i<=10);

// const myArray = [1,2,3,4,15];

// for(const i of myArray){
//   console.log(i);
// }

// const myObject = {
//   firstName : "Kailash",
//   lastName : "Kumar",
//   myAge : 25,
// }

// for(const i in myObject){
//   console.log(i);
// }

// ============================================================
//                    6.      FUNCTION & SCOPES
// ============================================================

// function myFunc(userName, userAge){
// console.log(`The user name is : ${userName} and the user age is : ${userAge}`);
// }

// myFunc("Kailash Kumar", 25);
// myFunc("Aryan Kumar", 20);

// ============================================================
//                    7.      ARRAY & OBJECTS
// ============================================================

// let firstArray = [1,2,443,4365];
// let secondArray = ["Mango", "Papaya", "Banana", "Apple"];

// console.log(firstArray);
// console.log(secondArray);

// console.log(secondArray[0]);
// console.log(secondArray[1]);

// secondArray[0] = "Kailash";
// console.log(secondArray[0]);

// console.log(secondArray.length);

// let userData = {
//   userName : "Kailash Kumar",
//   userParents : "Papa and Mom",
//   userLocation : "Bangalore",
//   userAge : 25
// }

// console.log(userData);
// console.log(userData.userName);

// ============================================================
//                    8.      DOM : DOCUMENT OBJECT MODEL
// ============================================================

// let myHeader = document.getElementById('header-text');

// myHeader.style.backgroundColor = "red";

// let headingText = document.getElementsByClassName("header-text");

// for(let i = 0; i<headingText.length; i++){
//   headingText[i].style.color = 'red';
// }


// let myTagHeading = document.getElementsByTagName('h1');
// for(let i = 0; i<myTagHeading.length; i++){
//   myTagHeading[i].style.color = 'red';
// }

// let myHeading = document.querySelectorAll('.header-text');
// for(let i = 0; i<myHeading.length; i++){
// myHeading[i].style.color = 'red';
// }

// let myBody = document.getElementById('body');
// console.log(myBody);