// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
// sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13,
//      21, 34...), escreva um programa na linguagem que desejar onde, informado 
//      um número, ele calcule a sequência de Fibonacci e retorne uma mensagem 
//      avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua 
// preferência ou pode ser previamente definido no código;

function isFibonacci(num) {
    if (num < 0) return false; 
  
    let a = 0;
    let b = 1;
  
    if (num === a || num === b) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
  
    let next = a + b; 
  
    while (next <= num) {
      if (next === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
      }
  
      a = b;
      b = next;
      next = a + b;
    }
  
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
  
  const numero = 21; 
  console.log(isFibonacci(numero));


  // 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’,
  //  seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela 
  //  ocorre.

  // IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua 
  // preferência ou pode ser previamente definida no código;

  function verificarLetraA(string) {
    let contador = 0;
  
    for (let char of string) {
      if (char === 'a' || char === 'A') {
        contador++; 
      }
    }
  
    if (contador > 0) {
      console.log(`A letra 'a' aparece ${contador} vez(es) na string.`);
    } else {
      console.log("A letra 'a' não foi encontrada na string.");
    }
  }
  
  const stringExemplo = "JavaScript é uma linguagem fantástica!";
  verificarLetraA(stringExemplo);

//   3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto
//    K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K = K + 1;   
    SOMA = SOMA + K; 
}

console.log("Valor final de SOMA:", SOMA);


// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___
// b) 2, 4, 8, 16, 32, 64, ____
// c) 0, 1, 4, 9, 16, 25, 36, ____
// d) 4, 16, 36, 64, ____
// e) 1, 1, 2, 3, 5, 8, ____
// f) 2,10, 12, 16, 17, 18, 19, ____
  
  // a) Sequência: 1, 3, 5, 7, ___
function proximoElementoA() {
  const sequenciaA = [1, 3, 5, 7];
  const proximoElemento = sequenciaA[sequenciaA.length - 1] + 2;
  return proximoElemento;
}

// b) Sequência: 2, 4, 8, 16, 32, 64, ____
function proximoElementoB() {
  const sequenciaB = [2, 4, 8, 16, 32, 64];
  const proximoElemento = sequenciaB[sequenciaB.length - 1] * 2;
  return proximoElemento;
}

// c) Sequência: 0, 1, 4, 9, 16, 25, 36, ____
function proximoElementoC() {
  const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
  const proximoElemento = (Math.sqrt(sequenciaC[sequenciaC.length - 1]) + 1) ** 2;
  return proximoElemento;
}

// d) Sequência: 4, 16, 36, 64, ____
function proximoElementoD() {
  const sequenciaD = [4, 16, 36, 64];
  const proximoElemento = Math.pow(Math.sqrt(sequenciaD[sequenciaD.length - 1]) + 2, 2);
  return proximoElemento;
}

// e) Sequência: 1, 1, 2, 3, 5, 8, ____
function proximoElementoE() {
  const sequenciaE = [1, 1, 2, 3, 5, 8];
  const proximoElemento = sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2];
  return proximoElemento;
}

// f) Sequência: 2, 10, 12, 16, 17, 18, 19, ____
function proximoElementoF() {
  const sequenciaF = [2, 10, 12, 16, 17, 18, 19];
  const proximoElemento = sequenciaF[sequenciaF.length - 1] + 1;
  return proximoElemento;
}

console.log("a) Próximo elemento:", proximoElementoA());
console.log("b) Próximo elemento:", proximoElementoB());
console.log("c) Próximo elemento:", proximoElementoC());
console.log("d) Próximo elemento:", proximoElementoD());
console.log("e) Próximo elemento:", proximoElementoE());
console.log("f) Próximo elemento:", proximoElementoF());




// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada 
// em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode 
// ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir 
// qual interruptor controla qual lâmpada. Como você faria para descobrir, usando 
// apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada 
// lâmpada?

const interruptores = {
  A: 'desligado',
  B: 'desligado',
  C: 'desligado'
};

const lampadas = {
  A: 'desconhecido', 
  B: 'desconhecido', 
  C: 'desconhecido'  
};

function ligarInterruptor(interruptor) {
  interruptores[interruptor] = 'ligado';
}

function desligarInterruptor(interruptor) {
  interruptores[interruptor] = 'desligado';
}

function definirLampadas() {
  lampadas.A = 'quente'; 
  lampadas.B = 'ligada'; 
  lampadas.C = 'fria';  
}

function identificarLampadas() {
  definirLampadas();

  console.log('Estado dos Interruptores:');
  console.log(interruptores);

  console.log('Estado das Lâmpadas:');
  console.log(lampadas);

  for (const [interruptor, estado] of Object.entries(interruptores)) {
      if (estado === 'ligado') {
          console.log(`A lâmpada que está ligada é controlada pelo Interruptor ${interruptor}`);
      }
  }

  for (const [lampada, estado] of Object.entries(lampadas)) {
      if (estado === 'quente') {
          console.log(`A lâmpada quente é controlada pelo Interruptor A`);
      } else if (estado === 'fria' && !Object.values(interruptores).includes('ligado')) {
          console.log(`A lâmpada fria é controlada pelo Interruptor C`);
      }
  }
}

identificarLampadas();
