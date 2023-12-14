import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrl: './celda.component.css'
})
export class CeldaComponent {
  @Input() estado: string | undefined;
  @Output() asignarEstado = new EventEmitter<void>();
  
  onClick(): void {
    this.asignarEstado.emit();
  }
}
