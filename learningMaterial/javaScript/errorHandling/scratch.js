"use strict";

//Error handling
//Pass the error in try to catch, can view details

try {
  console.log('executing try');
  console.log('no errors identified');
}

catch(err) {
  console.log('caught an error!');4
}


try {
  console.log('executing try #2 - intended failure');
  console.log(undeclaredVariable);
}

catch(err) {
  console.log('identified an error!');

  console.log(`ERROR LOG NAME: ${err.name}`);
  console.log(`ERROR LOG MESSAGE: ${err.message}`);
  console.log(`ERROR LOG STACK ${err.stack}`);
}


//Can do more than just throw an error
//Can give the user a warning etc, retry function, retry request etc...
let json = "{ bad JSON }";
try {
  let user = JSON.parse(json);     //doesn't work
  console.log(user.name);          //doesn't work
} catch(e){
  //execution jumps here on error
  console.log("Unfortunately the data has errors, we will request it again");
  console.log(e.name);
  console.log(e.message);
}


//THROW operator
let error = new Error("Bad things happen O_o");
console.log(error.name);
console.log(error.message);


let json2 = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json2); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name!!!!"); // (*)
  }

  console.log( user.name );

} catch(e) {
  console.log( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}


//FINALLY
//runs after try if no errors, otherwise rusn after catch
try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}