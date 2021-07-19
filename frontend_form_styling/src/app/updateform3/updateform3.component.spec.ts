import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateform3Component } from './updateform3.component';

describe('Updateform3Component', () => {
  let component: Updateform3Component;
  let fixture: ComponentFixture<Updateform3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Updateform3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Updateform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
