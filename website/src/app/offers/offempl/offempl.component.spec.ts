import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffemplComponent } from './offempl.component';

describe('OffemplComponent', () => {
  let component: OffemplComponent;
  let fixture: ComponentFixture<OffemplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffemplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
