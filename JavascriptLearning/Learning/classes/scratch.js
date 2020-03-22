"use strict";

//Basic shape classes - FCC#1
class Rectangle {
  constructor (_width, _height, _color) {
    console.log("Creating rectangle!");

    this.width = _width;
    this.height = _height;
    this.color = _color;    
  }  

  getArea () {
    return this.width * this.height;
  }

  printDescription () {
    console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}.`)
  }
}

let rectangle1 = new Rectangle(3, 5, "red");
let rectangle2 = new Rectangle(6, 2, "blue");


//Getters and Setters
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestsForArea = 0;
  }

  get area () {
    this.numOfRequestsForArea++;
    return this.width * this.height;    
  }

  set area (area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let square1 = new Square(3);
console.log(square1.area);


//Static methods. Methods on class, not instantiated on object. Does not require an instance to be used. Like helper methods.
class Square2 {
  constructor (_width) {
    this.width = _width;
    this.height = _width;
  }

  static equals(a,b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimensions(width, height) {
    return width === height;
  }
}

let squareA = new Square2(8);
let squareB = new Square2(8);
let squareC = new Square2(9);
Square2.equals(squareA, squareB)   //since it's static, call directly on the class not the objects.
Square2.isValidDimensions(2,3);


//Inheritence and Extends
//Parent and Child Class
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old.`)
  }
}

class Programmer extends Person {
  constructor(name, age, yearsOfExperience) {
    super(name, age); //calls and assigns from parent class
    this.yearsOfExperience = yearsOfExperience;
  }

  code () {
    console.log(`${this.name} is coding.`)
  }
}

let james = new Person('James', 11);

let programmers = [
  new Programmer('Don', 35, 1),
  new Programmer('Bob', 46, 17)
];

function developSoftware(programmers) {
  for (let programmer of programmers) {
    programmer.code();
  }
}

developSoftware(programmers);


//Polymorphism
class Animal {
  constructor (name) {
    this.name = name;
  }

  makeSound () {
    console.log('Generic Animal Sound!!');
  }
}

let a1 = new Animal('Bub');
a1.makeSound();

class Dog extends Animal {
  constructor (name) {
    super(name);
  }

  makeSound () {
    super.makeSound(); //use generic behavior, then add special additional functionality for child class
    console.log('woof woof!')
  }
}

let a2 = new Dog('Jeff');
a2.makeSound();


//Classes in Practice - HTML EXAMPLE
class ListBinding {
  constructor (element) {
    this.listElement = element;
    this.textList = [];
  }

  static createListItem(text) {
    /* Makes an <li></li> element/tag */
    let li = document.createElement('li');
    li.textContent = text;

    return li;
  }

  update () {
    /* Remove existing <li> elements / tags */
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    /* Fill <ul>/<ol> tag with <li> */
    for (let text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }

  add (text) {
    this.textList.push(text);
    this.update();
  }

  remove (index) {
    this.textList.splice(index, 1);
    this.update();
  }
}

let myList = document.getElementById('myList');
let listBinding = new ListBinding(myList);








//Class example with super
/* class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  
  stop(){
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");


class Rabbit extends Animal {
  hide(){
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); //calls parent stop
    this.hide();  //and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");


class Fox extends Animal {
  constructor(name, tailLength) {
    super(name);
    this.tailLength = tailLength;
  }
}

let fox = new Fox("Foxey Lady", "3 inches"); */