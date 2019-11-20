import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContedComponent } from './conted.component';

describe('ContedComponent', () => {
  let component: ContedComponent;
  let fixture: ComponentFixture<ContedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
