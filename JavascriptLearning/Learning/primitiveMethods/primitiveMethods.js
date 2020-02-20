"use strict";

//NUMBERS
let billion = 1e9;
let micro = 1e-6;

let num = 255;             
num.toString(16) //hex. 16 is base
num.toString(2)  //binary. 2 is base

Math.floor(num);  //rounds down
Math.ceil(num);   //rounds up
Math.round(num);  //round to nearest integer
Math.trunc(num);  //removes all after decimal

num.toFixed(2)    //rounds to 2 decimal spots. Can decide how far to round

isNaN(num); //converts argument to a number and tests it for being NaN
isFinite(num); //converts to a number and returns true if its regular

parseInt(num);    //read a number from a string until they can't, then return what they found
parseFloat(num);  //read a number from a string until they can't, then return what they found

Math.random() //random from 0 to 1
Math.max(1,2,3) //returns greatest
Math.min(1,2,3) //returns least
Math.pow(3,3) //returns n to a power


//STRINGS
let testString = "Hello!";

testString.length  //not a function like Python, but property instead

testString[0];                      //displays first character
testString[testString.length - 1]   //displays last character

testString.toUpperCase();           //change case of entire word
testString[0].toUpperCase();        //change case of first letter
testString.toLowerCase();           //change case of entire word
testString[0].toLowerCase();        //change case of first letter

testString.indexOf('ello', 0)       //search string for 'ello' starting as position 0. returns location it was found or -1 for no
if (testString.indexOf('ello') != -1) {alert("Found it!");} //quick check to see if it exists
testString.includes("ello")         //BETTER WAY TO DO THIS

testString.slice(start, end)        //can omit end. Can use negative number to count back from end
testString.substring(start, end)    //almost same as slice, but start can be greater than end
testString.substr(start, length)    //start from start and go out length

testString.trim()                   //trims spaces from start and end
testString.repeat(3)                //repeats string 3 times

let newStr = testString[0].toUpperCase() + testString.slice(1);  //sample


//ARRAYS
let newArray = [];

let fruits = ["apple", "banana"];
fruits[1]                               //banana
fruits[2] = "grapes"
fruits.length                           //number of items in array

fruits.pop();                           //removes last item and returns it
fruits.push("Pear");                    //adds new item to end
fruits.shift();                         //removes first item and returns it
fruits.unshift("plum");                 //adds new item to beginning

let arr = ["Apple", "Orange", "Pear"];

for (let i=0; i<arr.length; i++) //works fastest, old-browser-compatible.
for (let item of arr)            //modern syntax for items only
for (let i in arr)               //never use for arrays

String(fruits);                         //returns CSV
