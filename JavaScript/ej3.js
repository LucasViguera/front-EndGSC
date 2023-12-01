// Implementación de la función filter propia
function miFilter(arreglo, llamada) {
    const resultado = [];
  
    for (let i = 0; i < arreglo.length; i++) {
      if (llamada(arreglo[i], i, arreglo)) {
        resultado.push(arreglo[i]);
      }
    }
    return resultado;
  }
  
  // Ejemplo de uso de la función filter personalizada
  const numeros = [1, 2, 3, 4, 5];
  
  const numerosFiltrados = miFilter(numeros, numero => numero > 2);
  
  console.log(numerosFiltrados);