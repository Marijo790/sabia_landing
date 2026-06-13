import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  members = [
    { name: 'Adriana Cruz', role: 'Scrum Master / Lider de proyecto', initials: 'AC', color: 'teal' },
    { name: 'Yonathan', role: 'Desarrollador', initials: 'YO', color: 'navy' },
    { name: 'Karol Yazmin', role: 'Desarrolladora', initials: 'KY', color: 'purple' },
    { name: 'Marijose', role: 'Desarrolladora', initials: 'MJ', color: 'crimson' },
    { name: 'Erik Gerardo Galindo Martínez', role: 'Accesor Técnico', initials: 'AT', color: 'green' }
  ];
}
