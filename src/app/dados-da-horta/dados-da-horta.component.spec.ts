import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDaHortaComponent } from './dados-da-horta.component';

describe('DadosDaHortaComponent', () => {
  let component: DadosDaHortaComponent;
  let fixture: ComponentFixture<DadosDaHortaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosDaHortaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosDaHortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
