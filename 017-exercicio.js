let velo = 60
let ultr = velo - 80
let multa = ultr * 5



if (velo <= 80) {
    console.log (`Sua velocidade foi ${velo} KM. Você está na velocidade correta. Parabéns :)`)
    
} else {
    console.log (`Sua velocidade foi de ${velo} KM. Você foi MULTADO!!!`)
    console.log (`Você ultrapassou ${ultr} KM do limite permitido. `)
    console.log (`Você receberá uma multa de R$ ${multa .toFixed(2)} .`)
}

