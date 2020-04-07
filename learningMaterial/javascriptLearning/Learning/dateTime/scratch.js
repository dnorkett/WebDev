"use strict";

let now = new Date();		//without arguments current time is used

let millDate = new Date(0); //Create a Date object with the time equal 
							//to number of milliseconds (1/1000 of a 
							//second) passed after the Jan 1st of 
							//1970 UTC+0.

let millDateAdd = new Date(24 * 3600 * 1000) //adds a day in milliseconds

//new Date(year, month, date, hours, minutes, seconds, ms)
//only first two arguments are required
//MONTH IS 0-11
let bday = new Date(1984,9,27);

bday.getFullYear();
bday.getMonth();
bday.getDate();
bday.getHours();
bday.getMinutes();

bday.getDay();  //day of the week 0 to 6

//ALL ABOVE ARE LOCAL TIME ZONE
//FOR UTC, INSERT 'UTC' AFTER GET!!!

bday.getTime();		//returns timestamp, number of milliseconds from Jan 1 1970

bday.getTimezoneOffset();  //diff btw local and UTC in minutes

//Below methods used to set. ALSO HAVE UTC VARIANT
/*
bday.setFullYear(year, [month], [date])
bday.setMonth(month, [date])
bday.setDate(date)
bday.setHours(hour, [min], [sec], [ms])
bday.setMinutes(min, [sec], [ms])
bday.setSeconds(sec, [ms])
bday.setMilliseconds(ms)
bday.setTime(milliseconds) 
*/


//Date to number, Date diffs
//when date object is converted to a number, becomes timestamp (millisecs)
//PERFORMANCE CALC

let start = new Date(); // start measuring time. Can swap w/ Date.now()

for (let i = 0; i < 100000; i++) {
  let someThing = i*i*i;
}

let end = new Date(); // end measuring time. Can swap w/ Date.now()

console.log(`The loop took ${end - start} ms` );


//Date.now()
//returns current timestamp, same as new Date().getTime();
console.log(Date.now())


//Date parse
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms);


//Print the day of the week
function dayOfWeek(date){
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	return days[date.getDay()];
}


//How many seconds today

function getSecondsToday(){
	let now = new Date();
	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	return (now - today) / 1000;
}