import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCeldaComponent } from './celda.component';

describe('AppCeldaComponent', () => {
  let component: AppCeldaComponent;
  let fixture: ComponentFixture<AppCeldaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCeldaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
