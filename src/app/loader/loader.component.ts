import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() images1: string[] = []; // Imágenes para la primera configuración
  @Input() texts1: string[] = []; // Textos para la primera configuración
  @Input() images2: string[] = []; // Imágenes para la segunda configuración
  @Input() texts2: string[] = []; // Textos para la segunda configuración
  currentIndex = 0; // Índice actual para rastrear qué imagen y texto mostrar
  currentConfig = 1; // Configuración actual, inicializada en 1
  isFullScreen = false; // Variable para controlar si está en pantalla completa o no

  constructor(private router: Router) {}

  ngOnInit() {
    // Lógica para cambiar la imagen y el texto cada cierto tiempo
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % (this.currentConfig === 1 ? this.images1.length : this.images2.length);
    }, 3000); // Cambiar cada 3 segundos (3000 milisegundos)

    // Simulación de setTimeout para apagar el loader y redireccionar después de 5 segundos
    setTimeout(() => {
      // Redireccionar a la página de bienvenida
      this.router.navigate(['/welcome']);
    }, 5000); // Cambiar después de 5 segundos (5000 milisegundos)
  }

  toggleFullScreen() {
    // Cambiar el estado de pantalla completa
    this.isFullScreen = !this.isFullScreen;
  }

  getImageUrl() {
    // Obtener la URL de la imagen basada en la configuración actual
    const images = this.currentConfig === 1 ? this.images1 : this.images2;
    return `assets/${images[this.currentIndex]}`;
  }

  getText() {
    // Obtener el texto basado en la configuración actual
    const texts = this.currentConfig === 1 ? this.texts1 : this.texts2;
    return texts[this.currentIndex];
  }

  toggleConfig() {
    // Cambiar entre las dos configuraciones
    this.currentConfig = this.currentConfig === 1 ? 2 : 1;
    // Reiniciar el índice para empezar desde la primera imagen de la nueva configuración
    this.currentIndex = 0;
  }
}
