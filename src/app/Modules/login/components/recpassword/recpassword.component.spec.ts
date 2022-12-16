import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpasswordComponent } from './recpassword.component';

describe('RecpasswordComponent', () => {
  let component: RecpasswordComponent;
  let fixture: ComponentFixture<RecpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
