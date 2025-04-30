let nome = "Paula"
let nota1 = 1.5
let nota2 = 4
let m = (nota1+nota2)/2

console.log(`A aluna ${nome} tirou na primeira nota ${nota1} e na segunda nota ${nota2}.`)

if (m > 7){
    console.log (`A média das sua notas foi ${m .toFixed(1)} sendo assim você foi APROVADO.`)
} else if (m >=5 && m < 7){
    console.log (`A média das sua notas foi ${m .toFixed(1)} sendo assim você está de RECUPERAÇÃO`)
} 
    else {
    console.log (`A média das sua notas foi ${m .toFixed(1)} sendo assim você está REPROVADO`)
}  