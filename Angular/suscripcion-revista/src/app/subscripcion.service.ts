import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscripcionService {
  registrarSuscripcion(datosSuscripcion: any) {
    console.log('Datos de la suscripción:', datosSuscripcion);
    // Aquí puedes realizar acciones con los datos de la suscripción, como enviar a un servidor.
  }
}