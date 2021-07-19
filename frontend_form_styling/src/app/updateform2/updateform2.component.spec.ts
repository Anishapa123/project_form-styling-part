import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateform2Component } from './updateform2.component';

describe('Updateform2Component', () => {
  let component: Updateform2Component;
  let fixture: ComponentFixture<Updateform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Updateform2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Updateform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
