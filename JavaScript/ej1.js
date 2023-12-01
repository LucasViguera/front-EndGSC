//Implemente su propia funcion MAP
function miMapa(arreglo, llamada) {
    const resultado = [];

    for (let i = 0; i < arreglo.length; i++) {

      resultado.push(llamada(arreglo[i], i, arreglo));
    }
    return resultado;
  }

  //implementamos la funcion MAP con un ejemplo
  const numeros = [4, 6, 10, 40, 1];

  const SumaTres = function(numero) {
    return numero + 3;
  };

  const numerosDuplicados = miMapa(numeros, SumaTres);
  
  console.log(numerosDuplicados); 