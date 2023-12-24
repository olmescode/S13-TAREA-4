import { Join } from '../utils.js'

function GenereatedArryList(){
    var arrayList =  [];
    for (var i = 0; i < 10; i++) {
        arrayList.push(Math.floor(Math.random() * 100));
    }
  return  Join( arrayList,',');
}

function GenereatedText(){
  return  `Hola, como estas yo soy una cadena`;
}

function GenereatedNumber(){
  return  Math.floor(Math.random() * 100);
}

function GenereateBinary(longitud=8) {
  let numeroBinario = '';
  for (let i = 0; i < longitud; i++) {
    // Genera un bit aleatorio (0 o 1)
    const bitAleatorio = Math.floor(Math.random() * 2);
    numeroBinario += bitAleatorio;
  }
  console.log(numeroBinario);
  return numeroBinario;
}
  

export  {GenereatedArryList,GenereatedText, GenereatedNumber,GenereateBinary};