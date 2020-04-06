//Check for a palindrome. Remove all non alpha-numeric characters
function palindrome(str) {
    let convertedStr = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
      
    if (convertedStr.length <= 1) {
      return true;
    } else if (convertedStr[0] == convertedStr[convertedStr.length - 1]) {
      return palindrome(convertedStr.slice(1, convertedStr.length-1));
    } else {
      return false;
    }    
  } 
  
  
  palindrome("1 eye for of 1 eye.");
  