let preco = 300.86

console.log (`O preço do moletom que você deseja custa R$: ${preco}.`)

let des = preco*5/100 .toFixed(1);
let valor = preco - des 

console.log (`O desconto vai ser de ${des.toFixed(2)}`)
console.log (`Com o desconto de 5% aplicado na compra. O valor final ficou R$ ${valor.toFixed(2)}.`)