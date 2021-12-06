// Desafio 10
function techList(techs, name) {
  if (techs == '' ) {
    return  "Vazio!"
  } else {
  let sorted = techs.sort()
  let techNames  = {}
  let result = []
  
  for (let key in sorted) {
    techNames.tech = sorted[key]
    techNames.name = name
    result.push(techNames)
    techNames = {}
  }
  return result
  }
}



// Desafio 11
function generatePhoneNumber(numbers) {
  let ddd = ['(','#','#',')', ' ']
  let telNumber = ['#', '#', '#', '#', '#', '-', '#', '#', '#', '#']
  let DDD = ''
  let celPhone = ''
  let count  = 0;
  let isValid = true; 
  let numbersIndex = 0
  
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto."
  } 

  for (let i = 0; i < numbers.length; i += 1) {
    for (let index in numbers) {
      if (numbers[i] === numbers[index] ) {
        count += 1;
      } 
      if (numbers[index] < 0 || numbers[index] > 9 || count >= 3) {
        isValid = false;
        break;
      }
    }  
    count = 0
    if (isValid === false) {
      break;
    }
  }
  if (isValid === false) {
    return "não é possível gerar um número de telefone com esses valores"
  } 
                
  for (let index = 0; index < ddd.length + telNumber.length; index += 1) {
    if (index < 5 && ddd[index] == '#') {
      DDD = ddd.splice(index,1,numbers[numbersIndex])
      numbersIndex += 1
    } else if (index >= 5 && telNumber[index - 5] == '#') {
      celPhone = telNumber.splice(index - 5,1,numbers[numbersIndex])
      numbersIndex += 1
    }
  }
  let numberTemplate = [ddd.join(''), telNumber.join('')]
  return numberTemplate.join('')
}



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
 let somaAB = lineA + lineB;
 let diferençaAB = Math.abs(lineA - lineB);
 let somaAC = lineA + lineC;
 let diferençaAC = Math.abs(lineA - lineC);
 let somaBC = lineB + lineC;
 let diferençaBC = Math.abs(lineB - lineC);
 let isTriangle = false
 
 if (lineA < somaBC && lineA > diferençaBC && lineB < somaAC && lineB > diferençaAC && lineC < somaAB && lineC > diferençaAB) {
   isTriangle = true
  }
   
 return isTriangle
}

// Desafio 13
function hydrate(string) {
  let matchNumbers = string.match(/[1-9]/g);
  let soma = 0;

  for (let index in matchNumbers) {
    soma = soma + parseInt( matchNumbers[index]);
  }
  
  if (soma !== 1) {
    return soma + " copos de água"
  } else {
    return soma + " copo de água"
  }
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
