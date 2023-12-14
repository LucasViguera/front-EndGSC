abstract class FiguraGeometrica {
    abstract calcularPerimetro(): number;
    abstract calcularArea(): number;
  }

class Cuadrado extends FiguraGeometrica {
    private lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
   calcularPerimetro(): number {
    return 4 * this.lado;
  }

   calcularArea(): number {
    return this.lado * this.lado;
  }
}

class Circulo extends FiguraGeometrica {
  private radio: number;

  constructor(radio: number) {
    super();
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }

  calcularArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

function mostrarInformacion(figura: FiguraGeometrica): void {
  console.log("Perímetro:", figura.calcularPerimetro());
  console.log("Área:", figura.calcularArea());
}

// Ejemplo 
const cuadrado = new Cuadrado(4);
const circulo = new Circulo(3);

console.log("Cuadrado:");
mostrarInformacion(cuadrado);

console.log("Círculo:");
mostrarInformacion(circulo);