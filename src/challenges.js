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
function catAndMouse(mouse, cat1, cat2) {
  let cat1Length = Math.abs(cat1 - mouse);
  let cat2Length = Math.abs(cat2 - mouse);

  if (cat1Length < cat2Length) {
    return 'cat1';
  } else if (cat2Length < cat1Length) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(numbers) {
 let divisiveis = []
 
  for (let key in numbers) {
    if (numbers[key] % 3 === 0 && numbers[key] % 5 === 0) {
      divisiveis.push('fizzBuzz')
    } else if (numbers[key] % 3 === 0) {
      divisiveis.push('fizz')
    } else if (numbers[key] % 5 === 0) {
      divisiveis.push('buzz')
    } else {
      divisiveis.push('bug!')
    }
  }
  return divisiveis
}

// Desafio 9
let vogais = ['a', 'e', 'i', 'o', 'u']
let numeros = [1, 2, 3, 4, 5]
let encoded = ''
let decoded = ''
let letters = ''

function encode(string) {
   letters = string.split('')
  for(index = 0; index < string.length; index += 1) {
    for (let key in vogais) {
      if (string[index] === vogais[key]) {
        encoded = letters.splice(index, 1, numeros[key])
      } 
    }    
  }
  letters = letters.join('')
  return letters
}

function decode(string) {
  let number = string.split('')
  
  for(index = 0; index < string.length; index += 1) {
    for (let key in numeros) {
      if (string[index] == numeros[key]) {
        decoded = number.splice(index, 1, vogais[key])
      } 
    }    
  }
  number = number.join('')
  return number
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
