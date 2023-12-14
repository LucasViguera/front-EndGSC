import { Component } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent {
  estadoCeldas: string[] = Array(9).fill(null);
  jugadorActual: string = 'X'; 

  asignarEstado(index: number): void {
    if (!this.estadoCeldas[index]) {
      this.estadoCeldas[index] = this.jugadorActual;
      this.jugadorActual = this.jugadorActual === 'X' ? 'O' : 'X';
    }
  }
}
