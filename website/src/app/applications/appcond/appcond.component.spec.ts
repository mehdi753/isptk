import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcondComponent } from './appcond.component';

describe('AppcondComponent', () => {
  let component: AppcondComponent;
  let fixture: ComponentFixture<AppcondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
