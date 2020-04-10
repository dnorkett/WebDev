//Assumes upper case only (otherwise we could convert first)
//Transform alpha characters by 13, leave spaces and special characters alone

function rot13(str) { //
    //Use character codes to add 13. If answer is greater than 26, look at answer-26
    //Loop through each character and add to return variable  
    let decodedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      //check to see if the character is A-Z. Otherwise ignore.        
      if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
        //check to see if we can add 13 to the letter without going over Z. If so, need to loop over and start at A. 
        if (str[i].charCodeAt(0) + 13 <= 90){
          decodedStr += String.fromCharCode((str[i].charCodeAt(0) + 13));
        } else {
          decodedStr += String.fromCharCode((str[i].charCodeAt(0) + 13-90+64));
        }      
      } else {
        decodedStr += str[i];
      }    
    }
      
    return decodedStr;
  }