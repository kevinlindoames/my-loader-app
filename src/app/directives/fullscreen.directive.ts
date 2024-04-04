import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[fullscreen]' // Selector de la directiva
})
export class FullscreenDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Aplicar estilos para pantalla completa
    this.renderer.setStyle(this.el.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.el.nativeElement, 'top', '0');
    this.renderer.setStyle(this.el.nativeElement, 'left', '0');
    this.renderer.setStyle(this.el.nativeElement, 'right', '0');
    this.renderer.setStyle(this.el.nativeElement, 'bottom', '0');
  }
}