let nome = "Paula"
let sexo = "Feminino"
let valorcompr = 1510.00
let desconto = 0

if (sexo === "Feminino") {
    desconto = 0.13;
  } else {
    desconto = 0.05;
  }
  
  let valorDesconto = valorcompr * desconto;
  let valorFinal = valorcompr - valorDesconto;
  
  console.log(`O valor da compra foi de R$${valorcompr.toFixed(2)}. Você terá um desconto de ${desconto * 100}%.`);
  console.log(`O valor do desconto é de R$${valorDesconto.toFixed(2)}, sendo assim, o valor final da sua compra será de R$${valorFinal.toFixed(2)}.`);