alert("Bem vindo ao jogo do número secreto");
let numeroSecreto = parseInt (Math.random() * 50 + 1);
let numeroDigitado 
console.log(numeroSecreto);


while (numeroDigitado != numeroSecreto) {
  numeroDigitado = prompt ('Digite um número de 1 a 50');
  if (numeroDigitado == numeroSecreto) {
    alert("Parabéns! você descobriu o número secreto " + numeroSecreto);
  } else {
    if (numeroDigitado > numeroSecreto) {
      alert('O número secreto é menor que ' + numeroDigitado);
    } else {
      alert ('O numero secreto é maior que ' + numeroDigitado);}
  }
}

