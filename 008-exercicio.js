let distancia = 185.72 //Nessa situação vamos utilizar a let distancia na interação direta com as outras let para que seja feita a multiplicação ou a divisão para que consigamos os valores desejados.
let km = (distancia /1000) .toFixed(5); 
let hm = (distancia/100) .toFixed(5);
let dam = (distancia/10) .toFixed(5);
let dm = (distancia * 10) .toFixed(1);
let cm = (distancia*100) .toFixed(1);
let mm = (distancia * 1000) .toFixed(1);


console.log (`A distância em quilometros é: ${km} km.`)
console.log(`A distancia hectômetro é: ${hm} hm.`)
console.log (`A distancia em decâmetro é: ${dam} dam.`)
console.log (`A distância em metros é: ${distancia} m. `)
console.log (`A distância em decímetro é : ${dm} dm.`)
console.log (`A distância em centímetro é: ${cm} cm.`)
console.log (`A distância em milimetro é: ${mm} mm.`)
 

