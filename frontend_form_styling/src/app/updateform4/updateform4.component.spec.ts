import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateform4Component } from './updateform4.component';

describe('Updateform4Component', () => {
  let component: Updateform4Component;
  let fixture: ComponentFixture<Updateform4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Updateform4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Updateform4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
