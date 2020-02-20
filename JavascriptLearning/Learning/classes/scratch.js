"use strict";

class Animal {
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

let fox = new Fox("Foxey Lady", "3 inches");


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log(`Hello, my name is ${this.name}`);
  }

  goodbye(){
    console.log(`${this.name} says goodbye!`);
  }
}

let don = new Person('Don', 35);

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);    
    this.major = major;
  }
  changeMajor(newMajor){
    this.major = newMajor;
  }
}

let James = new Student('James', 11, 'Computer Science');