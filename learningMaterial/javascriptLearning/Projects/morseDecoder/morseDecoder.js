//'use strict';

//setup morse code dictionary
let MORSE_CODE = {
    '-.-.--': '!',
    '.-..-.': '"',
    '...-..-': '$',
    '.-...': '&',
    '.----.': '\'',
    '-.--.': '(',
    '-.--.-': ')',
    '.-.-.': '+',
    '--..--': ',',
    '-....-': '-',
    '.-.-.-': '.',
    '-..-.': '/',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '..--..': '?',
    '.--.-.': '@',
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '..--.-': '_',
    '...---...': 'SOS'
}

//translate binary transmission to morse code
let decodeBits = function(bits){        
    //let transmissionRate = 2;

    let wordSpaceValue = '0000000'.repeat(transmissionRate);    
    let wordSpaceRegex = new RegExp(wordSpaceValue, "gi");

    let charSpaceValue = '000'.repeat(transmissionRate);    
    let charSpaceRegex = new RegExp(charSpaceValue, "gi");

    let dashValue = '111'.repeat(transmissionRate);    
    let dashRegex = new RegExp(dashValue, "gi");

    let dotValue = '1'.repeat(transmissionRate);    
    let dotRegex = new RegExp(dotValue, "gi");

    let morsePauseValue = '0'.repeat(transmissionRate);    
    let morsePauseRegex = new RegExp(morsePauseValue, "gi");
    
    return(bits.trim().replace(wordSpaceRegex, '   ').replace(charSpaceRegex, ' ').replace(dashRegex, '-').replace(dotRegex, '.').replace(morsePauseRegex, ''));
}


//decode morse code - translate morse codes to ASCII
let decodeMorse = function(morseCode) {
    let translationArr = [];            
    
    let wordArr = morseCode.trim().split('   ');           

    let letterArr = wordArr.map( item => {
        return item.split(' ');
    })

    for (let word of letterArr) {
        let translatedWord = '';
        for (let letter of word) {
            translatedWord += MORSE_CODE[letter];                    
        }
        translationArr.push(translatedWord);
    }
                
    return translationArr.join(' ');
}


console.log(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')));

//decodeMorse('.... . -.--   .--- ..- -.. .') // 'HEY JUDE'
