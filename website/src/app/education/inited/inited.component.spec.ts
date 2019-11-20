import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitedComponent } from './inited.component';

describe('InitedComponent', () => {
  let component: InitedComponent;
  let fixture: ComponentFixture<InitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
