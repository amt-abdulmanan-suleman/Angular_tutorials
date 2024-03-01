import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightedDirective } from '../directives/highlighted.directive';
import { NgxUnlessDirective } from '../directives/ngx-unless.directive';

@Component({
  selector: 'app-persona-card',
  standalone: true,
  imports: [CommonModule, HighlightedDirective, NgxUnlessDirective],
  templateUrl: './persona-card.component.html',
  styleUrl: './persona-card.component.css'
})
export class PersonaCardComponent {
  @Input()
  persona: any;

}
