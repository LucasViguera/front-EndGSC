// Implementación de la función reduce propia
function miReduce(arreglo, llamada, valorIni) {
    let acumulador = valorIni === undefined ? arreglo[0] : valorIni;
    const inicio = valorIni === undefined ? 1 : 0;
  
    for (let i = inicio; i < arreglo.length; i++) {
      acumulador = llamada(acumulador, arreglo[i], i, arreglo);
    }
  
    return acumulador;
  }
  
  // Ejemplo de uso de la función reduce personalizada
  const numeros = [0, 1, 2, 3, 4];
  
  const suma = miReduce(numeros, (acumulador, numero) => acumulador + numero, 0);
  
  console.log(suma);