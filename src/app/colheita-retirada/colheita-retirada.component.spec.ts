import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColheitaRetiradaComponent } from './colheita-retirada.component';

describe('ColheitaRetiradaComponent', () => {
  let component: ColheitaRetiradaComponent;
  let fixture: ComponentFixture<ColheitaRetiradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColheitaRetiradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColheitaRetiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
