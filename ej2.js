class FiguraGeometrica {
}
class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularPerimetro() {
        return 4 * this.lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}
function mostrarInformacion(figura) {
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
