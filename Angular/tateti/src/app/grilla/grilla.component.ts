import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grilla',
  template: `
    <div class="grilla">
      <div *ngFor="let row of grilla; let i = index">
        <div *ngFor="let col of grilla[i]; let j = index">
          <app-celda [estado]="grilla[i][j]" (seleccionCelda)="seleccionarCelda(i, j)"></app-celda>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./grilla.component.css'],
})
export class AppGrillaComponent implements OnInit {
  grilla: (string | null)[][] = [];
  jugadorActual: string = 'X';

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.grilla.push(Array(3).fill(null));
    }
  }

 seleccionarCelda(fila: number, columna: number) {
    if (!this.grilla[fila][columna]) {
      this.grilla[fila][columna] = this.jugadorActual;
      this.jugadorActual = this.jugadorActual === 'X' ? 'O' : 'X';
    }
  } 
}
