import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonaCardComponent } from "./persona-card/persona-card.component";
import { HighlightedDirective } from './directives/highlighted.directive';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonasService } from './services/personas.service';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CommonModule, PersonaCardComponent, HighlightedDirective, HttpClientModule],
  providers: [PersonasService]
})
export class AppComponent implements OnInit {
  personas$: Observable<any> | undefined;
  constructor(private personaServices: PersonasService) {

  }

  ngOnInit(): void {
    this.personas$ = this.personaServices.getUser()
  }
  postChangeEmit(event: any) {
    this.personaServices.postChange(event).subscribe(()=> console.log('saved!!!'))
  }
}
