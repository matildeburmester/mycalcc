const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const bttSomar = document.getElementById('bttSomar');
const bttSubtrair = document.getElementById('bttSubtrair');
const bttDividir = document.getElementById('bttDividir');
const bttMultiplicar = document.getElementById('bttMultiplicar');
const bttLimpar = document.getElementById('bttLimpar');
const resultado = document.getElementById('resultado');

bttSomar.addEventListener('click', () => {
    let a = parseFloat(numero1.value);
    let b = parseFloat(numero2.value);
    let soma = a + b;
    resultado.textContent = `${a} + ${b} = ${soma}`;
})

bttSubtrair.addEventListener('click', () => {
    let a = parseFloat(numero1.value);
    let b = parseFloat(numero2.value);
    let subtrair = a - b;
    resultado.textContent = `${a} - ${b} = ${subtrair}`;
})

bttDividir.addEventListener('click', () => {
  let a = parseFloat(numero1.value);
  let b = parseFloat(numero2.value);
  if (b == 0) {
    resultado.textContent = `Impossível dividir por 0.`;
  } else{
    let dividir = a / b;
    resultado.textContent = `${a} ÷ ${b} = ${dividir}`;
  }
})

bttMultiplicar.addEventListener('click', () => {
    let a = parseFloat(numero1.value);
    let b = parseFloat(numero2.value);
    let multiplicar = a * b;
    resultado.textContent = `${a} x ${b} = ${multiplicar}`;
})

bttLimpar.addEventListener('click', () => {
    numero1.value = "";
    numero2.value = "";
    resultado.textContent =  ``;
})

// Copiar para o final do ficheiro script.js 

// Verifica se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js') // Caminho para o arquivo sw.js
        .then((registration) => {
          console.log('Service Worker registado com sucesso:', registration.scope);
        })
        .catch((error) => {
          console.log('Falha ao registar o Service Worker:', error);
        });
    });
  }
