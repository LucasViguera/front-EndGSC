const { array } = require("forms/lib/fields");

//Implementar su propia funcion Find
  function miFind(arreglo, llamada) {
    for (let i = 0; i < arreglo.length; i++) {
      if (llamada(arreglo[i], i, arreglo)) 
        return arreglo[i];
    }
  }
// Ejemplo

const juguetes= [
    {id:1, nombre:'Auto', edadMinima:7},
    {id:2, nombre:'Peluche', edadMinima:6},
    {id:3, nombre:'Barbie', edadMinima:10},
    {id:4, nombre:'Sonajero', edadMinima:2},
  ];

const JugueteEncontrado = miFind(juguetes,juguete => juguete.id > 2) ;

console.log(JugueteEncontrado);


