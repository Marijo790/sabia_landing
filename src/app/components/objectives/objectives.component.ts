import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {
  specifics = [
    'Investigar los fundamentos de la educación actual y los desafíos del rezago educativo.',
    'Diseñar interfaces accesibles e intuitivas con apoyo auditivo y visual.',
    'Implementar redes neuronales artificiales para ofrecer tutoría personalizada.',
    'Diseñar ejercicios interactivos con sonidos e imágenes que faciliten la comprensión.',
    'Desarrollar un sistema de seguimiento adaptativo que ajuste el contenido según el progreso.'
  ];
}