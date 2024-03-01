import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: true
})
export class HighlightedDirective {
  constructor() {
   }
  @HostBinding('class.appHighlighted')
  get cssClasses(){
    return true;
  }
}
