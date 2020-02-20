'use strict';

/* 
for (let someTest = 0; someTest < 6; someTest++){
    alert(`Woo ${someTest}`);
} */

/* let a = +prompt("a?");

if (a == 0){
    alert(0);
}
if (a == 1){
    alert(1);
}
if (a == 2 || a==3){
    alert('2,3');
} */

/* let a = +prompt("a?");

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;    
} */


//FUNCTIONS
/* function testFunction(){
    alert("whoa!");
}

testFunction();
testFunction();
 */

/* function testMessage(from, message){
    alert(`${from}: ${message}`);
}

testMessage('don','what up?') */

/* function testMessage(from, message = "no message"){
    alert(`*${from}* : ${message}`);
}

testMessage("Don", "sup");
testMessage("Don");
testMessage(); */

/* function returnSomething(){
    return "something";
}

function callFunctionParam(message = returnSomething()){
    alert(message);
}

callFunctionParam("nothing");
callFunctionParam();
 */


/*  function checkAge(age){
     return (age > 18 || confirm("Did your parents allow you?"));
 }

 alert(checkAge(19)); */
/* 
 function checkAge(age){
     return (age > 18) ? true : confirm("Did your parents allow you?");
      }

alert(checkAge(1)); */

/* function min(a,b){
    return (a < b) ? a : b;
}

alert(min(3,4));
alert(min(6,2)); */
/* 
function pow(x,n){
    let result = x;
    for (i=1; i < n; i++){
        result *= x;
    }
    return result;
}

let x = prompt('Enter a number');
let n = prompt('Enter a power');

if (x > 0 && n > 0){
    alert(pow(x,n));
}
 */
/* 
let x = prompt('Enter X');
let y = prompt('Enter y');

function pow(x,y){
    let result = x;
    for (let i=1; i<y; i++){
        result *=x;
        }
    return result;
}

alert(pow(x,y));

 */
/* function someFunction(args="arrgghhhhsssss"){
    alert(args);
}

someFunction(); */

//WHILE LOOPS
/* 
let counter = 0;

while (counter < 6){
    alert(counter);
    counter++;
}
 */
/* 
let sum = 0;
while (true){
    let value = prompt("Enter a number");
    if (value > 20){
        break
    }
}
 */
/* 
let sum = 0;

while(true){
    let value= +prompt("Enter a value");   //add + to prompt to force int conversion
    if (!value) break;
    sum += value;
}
alert('Sum: ' + sum)
 */
/* 
for (let i=0; i < 10; i++){
    if (i%2 == 0) continue;   //continue skips the rest of the current iteration
    alert(i);
}
 */
/* 
let num = -1;
while (num < 100 && num) {
    num=prompt("Enter a num");
}
 */


//DO WHILE
/* 
let num = 0;
do {
    num = prompt("Enter a number greater than 100");
} while (num <= 100 && num);
 */


//FOR LOOPS
/* 
for (let i=0; i < 3; i++){
    alert(`LOL ${i}`);
}
 */
/* 
let i=0;
for (;i < 5;i++){
    alert(i);
}
 */
/* 
outer: for (let x=0; x < 4; x++){
    for (let y=0; y < 4; y++){
        let input = prompt(`Enter a value for X:${x},Y:${y}`);
        if (!input) break outer;    //can name a loop and break out of that loop
    }
}
 */
/* 
let i=0;
while (i < 3){
    alert(`number ${i}!`);
    i++;
}
 */

/* 
while (true){
    let userInput = prompt("Enter a number greater than 100");
    if (userInput > 0 && userInput <= 100){
        alert("Please enter a number greater than 100");
    } else if (!userInput) {
        alert("Canceled");
        break;
    } else break; 
    
} 
 */
/* 
function someFunction(args = "argsss"){
    alert(args);
}

someFunction(); */

/* function sayHi(){
    alert("hi!");
}

sayHi(); */

/* let sayHi = function() {
    alert("hi!");
};

let newFunc = sayHi;

alert(newFunc()); */

/* function ask(question,yes,no){
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOK(){
    alert("You said yes!");
}

function showCancel() {
    alert("You said NO!");
}

ask("Really?", showOK, showCancel); */
/* 
function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() {alert("You agreed");},
    function() {alert("You canceled the execution");}
) */

/* let age = prompt("What is your age?");

let welcome = (age < 18) ? 
    function() {alert("yo!");} :
    function() {alert("Greetings");};

welcome(); */

//ARROW FUNCTIONS
//let func = (arg1, argN) => expression
//returns results of expression
/* let sum = (a,b) => a+b;

alert(sum(1,2)); */

/* let prod = (a, b) => a*b;
alert(prod(23,23));
 */

/*  let age = prompt("Enter your age");

 let welcome = (age < 18)?
    () => 'howdy!' : () => 'greetings';

alert(welcome()); */

/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

   */
/* 
  function pow(x, n){
    let result=1;

    for(let i=0; i < n; i++) {
        result *= x;
    }

    return result;
  }
  
  let x=prompt("x?", '');
  let n=prompt("n?", '');

  if ( n <= 0 ) {
    alert(`Power ${n} is not supported, 
           please enter an integer number greater than zero`);
  } else{
    alert( pow(x, n) );
  } */


/*   function showPrimes(n) {
    nextPrime:
    for (let i = 2; i < n; i++) {
  
      // check if i is a prime number
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert(i);
    }
  }

//Better version, factored out function
  function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
  
    return true;
  } */

  /**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
