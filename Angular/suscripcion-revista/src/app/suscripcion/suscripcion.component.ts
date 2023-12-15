import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscripcionService } from '../subscripcion.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css'],
})
export class SuscripcionComponent {
  formularioSuscripcion: FormGroup;

  constructor(private fb: FormBuilder, private subscripcionService: SubscripcionService) {
    this.formularioSuscripcion = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      contrasenia: ['', Validators.required],
      recibirNotificaciones: [false],
      aceptarTerminos: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.formularioSuscripcion.valid) {
      this.subscripcionService.registrarSuscripcion(this.formularioSuscripcion.value);
    }
  }
}
