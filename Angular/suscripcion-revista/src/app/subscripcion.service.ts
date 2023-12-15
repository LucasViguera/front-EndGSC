import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscripcionService {
  registrarSuscripcion(datosSuscripcion: any) {
    console.log('Datos de la suscripción:', datosSuscripcion);
  }
}
