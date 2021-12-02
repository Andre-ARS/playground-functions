// Desafio 1
function compareTrue(val1, val2) {
  if (val1 === true && val2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; 
}

// Desafio 3
function splitSentence(string) {
  let splitedString = string.split('') ;
  let splitedWords = [];
  let word = '';
for (let key in splitedString) {
  if (splitedString[key] !== ' ') {
    word = word + splitedString[key];
  } else {
    splitedWords.push(word);
    word  = '';
  }
  if (key >= splitedString.length - 1) {
    splitedWords.push(word);
    break;
  }
}
  return splitedWords;
}

// Desafio 4
function concatName(array) {
 return array[array.length -1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties; 
}

// Desafio 6
function highestCount(array) {
  let bigger = 0
  
  for(let index in array) {
    if (array[bigger] < array[index]) {
      bigger = index
    }
  }
  let higher = array[bigger]
  let couter = 0
  
  for(let index in array) {
    if (higher === array[index]) {
      couter += 1
    }
 }
  return couter
}

// Desafio 7
function catAndMouse() {
  
}

// Desafio 8
function fizzBuzz() {
  
}

// Desafio 9
function encode() {
  
}
function decode() {
  
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
