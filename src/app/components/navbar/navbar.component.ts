import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  anchor: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  scrolled = false;
  menuOpen = false;

  links: NavLink[] = [
    { label: 'Inicio', anchor: '#hero' },
    { label: 'Acerca de', anchor: '#about' },
    { label: 'Características', anchor: '#features' },
    { label: 'Objetivos', anchor: '#objectives' },
    { label: 'Metodología', anchor: '#methodology' },
    { label: 'Equipo', anchor: '#team' },
  ];

  // Detectar scroll
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 40;
  }

  // Cerrar menú si la pantalla se hace grande
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768 && this.menuOpen) {
      this.menuOpen = false;
    }
  }

  toggle(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}