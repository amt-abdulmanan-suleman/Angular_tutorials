import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightedDirective } from '../directives/highlighted.directive';
import { NgxUnlessDirective } from '../directives/ngx-unless.directive';
import { CustomPipes } from '../custom.pipes';


@Component({
  selector: 'app-persona-card',
  standalone: true,
  imports: [CommonModule, HighlightedDirective, NgxUnlessDirective],
  templateUrl: './persona-card.component.html',
  styleUrl: './persona-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaCardComponent {

  @Input()
  persona: any;

  @Output('postChange')
  postEmitter = new EventEmitter<any>();
  update(arg0: string) {
      this.persona.title = arg0
  }
  saveChange(title: any) {
   this.postEmitter.emit({...this.persona, title})
  }
}
