import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { TeamComponent } from './components/team/team.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    FeaturesComponent,
    ObjectivesComponent,
    MethodologyComponent,
    TeamComponent,
    CtaComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-features></app-features>
      <app-objectives></app-objectives>
      <app-methodology></app-methodology>
      <app-team></app-team>
      <app-cta></app-cta>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main { overflow-x: hidden; }
  `]
})
export class AppComponent {}
