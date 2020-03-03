function convertToRoman(num) {
    let remainingNum = num;
    let roman = ''

    while (remainingNum / 1000 >= 1) {
       roman += 'M';
       remainingNum -= 1000;
    }

    while (remainingNum / 900 >= 1) {
       roman += 'CM';
       remainingNum -= 900;
    }

    while (remainingNum / 500 >= 1) {
       roman += 'D';
       remainingNum -= 500;
    }

    while (remainingNum / 400 >= 1) {
       roman += 'CD';
       remainingNum -= 400;
    }

    while (remainingNum / 100 >= 1) {
       roman += 'C';
       remainingNum -= 100;
    }

    while (remainingNum / 90 >= 1) {
       roman += 'XC';
       remainingNum -= 90;
    }

    while (remainingNum / 50 >= 1) {
       roman += 'L';
       remainingNum -= 50;
    }
    
    while (remainingNum / 40 >= 1) {
       roman += 'XL';
       remainingNum -= 40;
    }

    while (remainingNum / 10 >= 1) {
       roman += 'X';
       remainingNum -= 10;
    }

    while (remainingNum / 9 >= 1) {
       roman += 'IX';
       remainingNum -= 9;
    }

    while (remainingNum / 5 >= 1) {
       roman += 'V';
       remainingNum -= 5;
    }

    while (remainingNum / 4 >= 1) {
       roman += 'IV';
       remainingNum -= 4;
    }

    while (remainingNum / 1 >= 1) {
       roman += 'I';
       remainingNum -= 1;
    }

 
 return roman;
}


/*
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};
*/