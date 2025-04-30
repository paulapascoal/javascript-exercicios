let ano = 2025;
let dias;
let ehBissexto;

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  dias = 366;
  ehBissexto = true;
} else {
  dias = 365;
  ehBissexto = false;
}

console.log(`O ano de ${ano} tem ${dias} dias.`);

if (ehBissexto) {
  console.log(`Como o ano de ${ano} tem ${dias} dias, ele é BISSEXTO.`);
} else {
  console.log(`Como o ano de ${ano} tem ${dias} dias, ele NÃO é BISSEXTO.`);
}