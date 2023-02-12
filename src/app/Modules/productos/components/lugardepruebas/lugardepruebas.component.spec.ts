import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugardepruebasComponent } from './lugardepruebas.component';

describe('LugardepruebasComponent', () => {
  let component: LugardepruebasComponent;
  let fixture: ComponentFixture<LugardepruebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugardepruebasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugardepruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
