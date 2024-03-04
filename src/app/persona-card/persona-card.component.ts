import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output('postChange')
  postEmitter = new EventEmitter<any>();

  saveChange(title: any) {
   this.postEmitter.emit({...this.persona, title})
  }
}
