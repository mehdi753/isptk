import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartabrComponent } from './partabr.component';

describe('PartabrComponent', () => {
  let component: PartabrComponent;
  let fixture: ComponentFixture<PartabrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartabrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartabrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
