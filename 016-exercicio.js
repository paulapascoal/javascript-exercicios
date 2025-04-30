let cigarro = 15
let ano = 30
let hora = 144
let acompl = 365
let totfum = ano * 365
let totcig = cigarro * totfum; 
let totmper = totcig * 10
let totper = totmper/60
let tothor = totper/24
let totdi = tothor/24


console.log (`A pessoa fuma ${cigarro} cigarros por dias. Durante ${ano} anos.`)
console.log (`Essa pessoa em um prazo de ${ano} fumou ${totcig} cigarros na vida.`)
console.log (`Essa pessoa fumou ${totmper} minutos`)
console.log (`Ela perdeu ${totper} minutos da vida.`)
console.log (`E perdeu ${tothor .toFixed(0) } horas na vida.`)
console.log (`Essa pessoa perdeu ${totdi .toFixed(0) } dias na vida.`)
