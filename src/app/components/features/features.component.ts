import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
      title: 'Aprendizaje adaptativo',
      desc: 'Las redes neuronales artificiales analizan el progreso del usuario y ajustan el contenido en tiempo real para maximizar la comprension.',
      color: 'teal'
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
      title: 'Apoyo auditivo',
      desc: 'Sonidos integrados que refuerzan el aprendizaje de letras, silabas y palabras, facilitando la comprension sin necesidad de capacitacion previa.',
      color: 'navy'
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
      title: 'Recursos visuales',
      desc: 'Imagenes contextualizadas que conectan el aprendizaje con la vida cotidiana del usuario, siguiendo la metodologia de Paulo Freire.',
      color: 'purple'
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      title: 'Ejercicios interactivos',
      desc: 'Actividades dinamicas progresivas que van desde el reconocimiento de letras hasta la comprension de oraciones completas.',
      color: 'crimson'
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'Seguimiento de progreso',
      desc: 'Panel personalizado que registra avances, identifica areas de mejora y motiva al usuario con logros alcanzados en su proceso.',
      color: 'green'
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Diseno inclusivo',
      desc: 'Interfaz accesible e intuitiva pensada para personas sin experiencia tecnologica previa, con navegacion guiada y lenguaje claro.',
      color: 'teal'
    }
  ];
}
