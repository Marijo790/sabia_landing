import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.css']
})
export class MethodologyComponent {
  pillars = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Metodologia Freire',
      desc: 'El aprendizaje se construye desde la experiencia del usuario, su entorno y su contexto cultural, haciendo el proceso significativo.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
      title: 'Metodologia Scrum',
      desc: 'Desarrollo agil iterativo con sprints definidos, roles claros y entregas continuas para asegurar calidad y adaptabilidad.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
      title: 'Enfoque mixto',
      desc: 'Combinacion de investigacion cualitativa (entrevistas) y cuantitativa (estadisticas) para un desarrollo fundamentado en evidencia.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
      title: 'Integracion IVEA',
      desc: 'SABIA complementa los programas del Instituto Veracruzano de Educacion para Adultos, potenciando la educacion existente con tecnologia.'
    }
  ];

  sprints = [
    { num: '01', title: 'Investigacion y estado del arte', detail: '4 semanas — Antecedentes, proyectos similares y entrevistas a 50 personas adultas.' },
    { num: '02', title: 'Diseno de interfaces y arquitectura', detail: 'Prototipado accesible, paleta de accesibilidad y flujo de usuario.' },
    { num: '03', title: 'Desarrollo del motor de IA', detail: 'Implementacion de RNA, sistema adaptativo y modulos de seguimiento.' },
    { num: '04', title: 'Integracion multimedia y pruebas', detail: 'Audio, imagenes, ejercicios interactivos y pruebas piloto con usuarios reales.' }
  ];
}
