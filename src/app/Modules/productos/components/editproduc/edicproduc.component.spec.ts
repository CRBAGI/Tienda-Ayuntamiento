import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicproducComponent } from './edicproduc.component';

describe('EdicproducComponent', () => {
  let component: EdicproducComponent;
  let fixture: ComponentFixture<EdicproducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicproducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicproducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
