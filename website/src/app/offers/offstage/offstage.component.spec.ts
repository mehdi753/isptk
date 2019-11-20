import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffstageComponent } from './offstage.component';

describe('OffstageComponent', () => {
  let component: OffstageComponent;
  let fixture: ComponentFixture<OffstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
