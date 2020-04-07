"use strict";

//three ways to assign events to elements:
//Inline event handlers
//Event handler properties
//Event listeners


//Inline event handler
//typically not used beyond testing and education
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "Changed because of an inline event handler.";
}


//Event handler property
//this time do not include function in html property
//also typically not used due to same limitations
const changeText2 = () => {
    const p2 = document.querySelector('#p2');

    p2.textContent = "I changed because of an event handler property.";
}

const button2 = document.querySelector('#b2');
button2.onclick = changeText2;          //no ()


//Event listeners
//addEventListener(event listening for, listener callback function)
const changeText3 = () => {
    const p3 = document.querySelector('#p3');

    p3.textContent = "you guessed it...";
}

const button3 = document.querySelector("#b3");
button3.addEventListener('click', changeText3);
//often anonymouse functions are used
button3.addEventListener('click', () => {
    alert('test?');
});


///////////////////
//COMMON EVENTS////
///////////////////

//MOUSE
//click
//dblclick
//mouseenter
//mouseleave
//mousemove

//FORM
//submit
//focus
//blur

//KEYBOARD
//keydown
//keyup
//keypress
//KEYBOARD PROPERTIES
//key - represents the character name
//code - represents the physical key being pressed

//EVENT
//SEE EVENT.HTML AND EVENT.JS