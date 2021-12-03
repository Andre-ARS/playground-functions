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
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
