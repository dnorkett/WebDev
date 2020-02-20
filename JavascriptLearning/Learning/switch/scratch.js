"use strict";

function testSwitch(someVar) {
  switch(someVar) {
    case 'a':
      return 'A!';
      break;
    case 'b':
      return 'B!';
      break;
  }
  return 'neither!';
}


let cardCount = 0;

function cardCounter(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:    
      console.log('Low!');
      cardCount--;
      break;
    case 10:
    case 'j':
    case 'q':
    case 'k':
    case 'a':
      console.log('High!');
      cardCount++;
      break;
  }
  
}