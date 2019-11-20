import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnairesComponent } from './partnaires.component';

describe('PartnairesComponent', () => {
  let component: PartnairesComponent;
  let fixture: ComponentFixture<PartnairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
