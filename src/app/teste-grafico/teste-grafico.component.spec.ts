import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteGraficoComponent } from './teste-grafico.component';

describe('TesteGraficoComponent', () => {
  let component: TesteGraficoComponent;
  let fixture: ComponentFixture<TesteGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
