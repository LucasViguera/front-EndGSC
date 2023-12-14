//clase generica de una pila
class PilaGenerica <T> {
   private elementos: T[] = [];
  
    push(elemento: T): void {
      this.elementos.push(elemento);
    }
  
    pop(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      else {
      return this.elementos.pop();
          }
  }
  
    size(): number {
      return this.elementos.length;
    }
  
    isEmpty(): boolean {
      return this.size() === 0;
    }

    getElementos(): T[] {
      return this.elementos;
    }
  }

//clase con valores no repetidos de una pila
class PilaNoRepetidos <T> extends PilaGenerica <T> {
    push(elemento: T): void {
      if (!this.getElementos().includes(elemento)) {
        super.push(elemento);
      } else {
        console.log("Elemento duplicado. No se permiten elementos repetidos.");
      }
    }
  }
  

//Ejemplo

const pilaNumeros = new PilaGenerica<number>();
pilaNumeros.push(6);
pilaNumeros.push(5);
pilaNumeros.push(4);
pilaNumeros.push(3);
pilaNumeros.push(2);
pilaNumeros.push(1);

console.log("Pila de números:", pilaNumeros);

// Pila que no permite elementos repetidos
const pilaUnica = new PilaNoRepetidos<string>();
pilaUnica.push("h");
pilaUnica.push("o");
pilaUnica.push("l"); 
pilaUnica.push("a");

pilaUnica.push("h");
pilaUnica.push("o"); 


console.log("Pila única:", pilaUnica);
