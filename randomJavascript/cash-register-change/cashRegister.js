//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
//Payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//The checkCashRegister() function should always return an object with a status key and a change key.

function checkCashRegister(price, cash, cid) {
  //initialize starting variables
  let remainingChange = ((cash - price) * 100).toFixed(2);
  let remainingCid = {};  
  let change = {};

  //convert cid from an array to an object for easy lookups
  cid.forEach(item => {
    remainingCid[item[0]] = (item[1]*100).toFixed(0);
  })

  //loop through each denomination to make change
  while (remainingChange >= 10000 && remainingCid["ONE HUNDRED"] >= 10000) {
    remainingChange -= 10000;
    remainingCid["ONE HUNDRED"] -= 10000;
    if (change.hasOwnProperty("ONE HUNDRED")) {
      change["ONE HUNDRED"] += 10000;} else {
        change["ONE HUNDRED"] = 10000;}
  }

  while (remainingChange >= 2000 && remainingCid["TWENTY"] >= 2000) {
    remainingChange -= 2000;
    remainingCid["TWENTY"] -= 2000;
    if (change.hasOwnProperty("TWENTY")) {
      change["TWENTY"] += 2000;} else {
        change["TWENTY"] = 2000;}
  }

  while (remainingChange >= 1000 && remainingCid["TEN"] >= 1000) {
    remainingChange -= 1000;
    remainingCid["TEN"] -= 1000;
    if (change.hasOwnProperty("TEN")) {
      change["TEN"] += 1000;} else {
        change["TEN"] = 1000;}
  }

  while (remainingChange >= 500 && remainingCid["FIVE"] >= 500) {
    remainingChange -= 500;
    remainingCid["FIVE"] -= 500;
    if (change.hasOwnProperty("FIVE")) {
      change["FIVE"] += 500;} else {
        change["FIVE"] = 500;}
  }

  while (remainingChange >= 100 && remainingCid["ONE"] >= 100) {
    remainingChange -= 100;
    remainingCid["ONE"] -= 100;
    if (change.hasOwnProperty("ONE")) {
      change["ONE"] += 100;} else {
        change["ONE"] = 100;}
  }

  while (remainingChange >= 25 && remainingCid["QUARTER"] >= 25) {
    remainingChange -= 25;
    remainingCid["QUARTER"] -= 25;
    if (change.hasOwnProperty("QUARTER")) {
      change["QUARTER"] += 25;} else {
        change["QUARTER"] = 25;}
  }

  while (remainingChange >= 10 && remainingCid["DIME"] >= 10) {
    remainingChange -= 10;
    remainingCid["DIME"] -= 10;
    if (change.hasOwnProperty("DIME")) {
      change["DIME"] += 10;} else {
        change["DIME"] = 10;}
  }

  while (remainingChange >= 5 && remainingCid["NICKEL"] >= 5) {
    remainingChange -= 5;
    remainingCid["NICKEL"] -= 5;
    if (change.hasOwnProperty("NICKEL")) {
      change["NICKEL"] += 5;} else {
        change["NICKEL"] = 5;}
  }

   while (remainingChange >= 1 && remainingCid["PENNY"] >= 1) {
    remainingChange -= 1;
    remainingCid["PENNY"] -= 1;
    if (change.hasOwnProperty("PENNY")) {
      change["PENNY"] += 1;} else {
        change["PENNY"] = 1;}
  } 

  //convert change object back to array
  let changeArr = Object.keys(change).map( key => [key, change[key]/100])

  //determine if there is enough cash to make change
  let cashLeft = false;

  let cidKeys = Object.keys(remainingCid);
    
  for (let i = 0; i < cidKeys.length; i++) {        
    if (remainingCid[cidKeys[i]] > 0) {
      cashLeft = true;
    }
  }
  
  //return change amount and register status
  if (remainingChange > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  } else if (!cashLeft) {
      return {
        status: 'CLOSED',
        change: changeArr
      }
  } else {
      return {
        status: 'OPEN',
        change: changeArr
    };
  }  
}