import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incricoes } from './incricoes';

describe('Incricoes', () => {
  let component: Incricoes;
  let fixture: ComponentFixture<Incricoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Incricoes],
    }).compileComponents();

    fixture = TestBed.createComponent(Incricoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
