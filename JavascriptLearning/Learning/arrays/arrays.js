"use strict";

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


//ARRAY METHODS
newArray.push()
newArray.pop()
newArray.shift()
newArray.unshift()


/*SPLICE starts from the position index: removes deleteCount elements 
and then inserts elem1, ..., elemN at their place. 
Returns the array of removed elements. */
arr.splice(index[,deleteCount, elem1,...elemN])

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1);                // from index 1 remove 1 element
alert( arr );                    // ["I", "JavaScript"]


let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance");
alert( arr )                    // now ["Let's", "dance", "right", "now"]


arr.slice([start], [end])       //returns new array copying all items from start to finish
arr.slice()                     //No arguments, creates a copy

arr.concat(arg1, arg2...)       //creates new array that concats

arr.forEach(function(item, index,array) {       //run a function for every element in array
    alert("Do something with item");});

["Bilbo", "Gandalf", "Nazgul"].forEach(alert);  //example of forEach


//SEARCHING AN ARRAY
arr.indexOf(item, from)       //looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from)   //same, but looks for from right to left.
arr.includes(item, from)      //looks for item starting from index from, returns true if found.