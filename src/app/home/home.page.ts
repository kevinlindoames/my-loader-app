import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showLoader = false; // Variable para controlar si se muestra el loader o no
  showLoader1 = false; // Variable para controlar si se muestra el loader con la primera configuración
  showLoader2 = false; // Variable para controlar si se muestra el loader con la segunda configuración

  constructor(private router: Router) {}

  startLoader() {
    // Mostrar el loader al hacer clic en el botón
    this.showLoader = true; 
    setTimeout(() => {
      // Ocultar el loader después de 5 segundos
      this.showLoader = false;
      // Aquí puedes agregar la lógica para redireccionar a una ruta diferente
    }, 5000); // Detener después de 5 segundos (5000 milisegundos)
  }

  startLoaderWithConfig1() {
    // Mostrar el loader con la primera configuración al hacer clic en el botón
    this.showLoader1 = true;
    setTimeout(() => {
      // Ocultar el loader después de 5 segundos
      this.showLoader1 = false;
      // Aquí puedes agregar la lógica para redireccionar a una ruta diferente
    }, 5000); // Detener después de 5 segundos (5000 milisegundos)
  }

  startLoaderWithConfig2() {
    // Mostrar el loader con la segunda configuración al hacer clic en el botón
    this.showLoader2 = true;
    setTimeout(() => {
      // Ocultar el loader después de 5 segundos
      this.showLoader2 = false;
      // Aquí puedes agregar la lógica para redireccionar a una ruta diferente
    }, 5000); // Detener después de 5 segundos (5000 milisegundos)
  }
}
