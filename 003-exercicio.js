let nome = "Paula"
let sal = 1512.50

sal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) //comando que reconhece a moeda que desejamos para aquela situação.

console.log (`O funcionário ${nome} tem um salário de R$ ${sal} em Junho`);