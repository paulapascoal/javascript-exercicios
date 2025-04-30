let diaria = 90
let km = 0.20

let carro = diaria * 7
let juros = km * 100
let vfinal = carro + juros
console.log (`A diária do carro é de ${diaria}. No final a diária mais a quantidade de dias ficou R$ ${carro .toFixed(2) }`)
console.log (`O valor de cada Km rodado é de R$ ${km}. O veículo alugado teve o valor de R$ ${juros .toFixed(2)} ao final do contrato.`)
console.log (`O contratante vai pagar o valor de R$ ${vfinal .toFixed(2)} pelo alguel do carro somando as diária e o km rodado.`)