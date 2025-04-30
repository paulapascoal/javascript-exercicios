let anonasc = 2010
let anoat = 2025
let idade = anoat - anonasc

if (idade >= 18){
    console.log (`Você tem ${idade} anos. Você já tem que estar alistado há pelo menos ${idade - 18} anos.`) //Posso declarar dentro do console.log uma conta aritmética para concluir a resposta desejada.
} else if (idade < 18) {
    console.log (`Voce tem ${idade} anos. Você ainda não precisa se alistar. Mas falta ${18 - idade} anos.`)
}