import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnatComponent } from './partnat.component';

describe('PartnatComponent', () => {
  let component: PartnatComponent;
  let fixture: ComponentFixture<PartnatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
