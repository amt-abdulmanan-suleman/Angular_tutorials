import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaCardComponent } from './persona-card.component';

describe('PersonaCardComponent', () => {
  let component: PersonaCardComponent;
  let fixture: ComponentFixture<PersonaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
