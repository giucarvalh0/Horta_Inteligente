import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDaHortaComponent } from './log-da-horta.component';

describe('LogDaHortaComponent', () => {
  let component: LogDaHortaComponent;
  let fixture: ComponentFixture<LogDaHortaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogDaHortaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDaHortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
