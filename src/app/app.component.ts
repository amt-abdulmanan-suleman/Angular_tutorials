import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { info } from '../data';
import { PersonaCardComponent } from "./persona-card/persona-card.component";
import { HighlightedDirective } from './directives/highlighted.directive';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, PersonaCardComponent, HighlightedDirective]
})
export class AppComponent {
  personas = info
}
