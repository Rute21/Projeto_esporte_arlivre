import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaComponent } from './atleta-component';

import { ActivatedRoute } from '@angular/router';

describe('AtletaComponent', () => {
  let component: AtletaComponent;
  let fixture: ComponentFixture<AtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaComponent],

      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(AtletaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});