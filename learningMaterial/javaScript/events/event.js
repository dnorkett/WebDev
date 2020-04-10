"use strict";

//pass an event through to a listener
document.addEventListener('keydown' , event => {
    let element = document.querySelector('p');

    //set variables for keydown codes
    let a = 'KeyA';
    let s = 'KeyS';
    let d = 'KeyD';
    let w = 'KeyW';

    //set a direction for each code
    switch (event.code) {
        case a:
            element.textContent='Left';
            break;
        case s:
            element.textContent='Down';
            break;
        case d:
            element.textContent='Right';
            break;
        case w:
            element.textContent='Up';
            break;
    }
});


//TARGEt PROPRERTY
const section = document.querySelector('section');

section.addEventListener('click', event => {
    console.log(event.target);
});