'use strict';

//getElementsByClassName() returns HTML collections which do not have forEach(). Must use for loop
//querySelectorAll() CAN use forEach().


let objectLiteral = {};
let objectConstructor = new Object();

//Easiest way to access an element is with id.
//document.getElementById('id');
//can place this into a variable:
//let navLink=document.getElementById('nav');
//can then change attributes and modify values
//ex: navLink.href = 'joe.html'    changes link
//ex: navLink.textContent = 'changing actual text'

let button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'midnightblue';
    document.body.style.color = 'white';
});


//DOM ACCESS

//Elements by ID
let demoID = document.getElementById('demo');
demoID.style.border = '3px solid purple';


//Elements by Class
//returns an array-like object of elements
let demoClass = document.getElementsByClassName('demo');
demoClass[0].style.border = '3px solid red';
demoClass[1].style.border = '3px solid red';

for (let i = 0; i < demoClass.length; i++){
    demoClass[i].style.border = '3px solid orange';
}


//Elements by Tag
//also returns array like object
let demoTag = document.getElementsByTagName('article');

for (let j=0; j < demoTag.length; j++){
    demoTag[j].style.border = "3px solid pink";
}


//Element (single) by query
//use hash tag # for id attribute
//use a period . for class attribute
//if multiple exist, grabs the first one
let demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = "3px solid green";


//Elements (multiple) by query
let demoQueryAll = document.querySelectorAll('.demo-query-all');
for (let k = 0; k < demoQueryAll.length; k++){
    demoQueryAll[k].style.border = "3px solid gold";
}

//Alternative
demoQueryAll.forEach(query => {
    query.style.border = '3px solid gold';
});


//Queries and commas
//for querySelector, functions as OR
//for querySelectorAll, functions as AND