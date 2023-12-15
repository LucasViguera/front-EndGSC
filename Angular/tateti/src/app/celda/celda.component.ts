import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-celda',
  template: `
    <button (click)="seleccionarCelda()" [disabled]="estado !== null">{{ estado }}</button>
  `,
  styleUrls: ['./celda.component.css'],
})
export class AppCeldaComponent {
  @Input() estado: string | null = null;
  @Output() seleccionCelda = new EventEmitter<void>();

  seleccionarCelda() {
    this.seleccionCelda.emit();
  }
}