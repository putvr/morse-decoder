const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {   
    let str = '';

    for(let i=0; i < expr.length; i+=10) {           
        let d = expr.slice(i, i+10);

        if (d === '**********') {
            str += ' ';
            continue;
        }
        
        let sym = '';
        for(let j=0; j < 10; j+=2) {
            const b = `${d[j]}${d[j+1]}`;
            switch(b) {
                case '00': break; 
                case '10': sym += '.'; break;
                case '11': sym += '-'; break;
            }
        }
        
        str +=  MORSE_TABLE[sym];
    } 
    return str;
}

module.exports = {
    decode
}