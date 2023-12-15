import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGrillaComponent} from './grilla.component';

describe('GrillaComponent', () => {
  let component: AppGrillaComponent;
  let fixture: ComponentFixture<AppGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppGrillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
