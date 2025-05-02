let lado1 = 8;
let lado2 = 12;
let lado3 = 2;
let podeFormarTriangulo = false;

if (lado1 < lado2 + lado3) {
    if (lado2 < lado1 + lado3) {
      if (lado3 < lado1 + lado2) {
          podeFormarTriangulo = true;
      }
    }
  }
  if (podeFormarTriangulo) {
    console.log("Eba! Com esses tamanhos dá pra formar um triângulo!");
  } else {
    console.log("Hmm, acho que não vai dar pra formar um triângulo com essas medidas...");
  }
  