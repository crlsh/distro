import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasapComponent } from './wasap.component';

describe('WasapComponent', () => {
  let component: WasapComponent;
  let fixture: ComponentFixture<WasapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WasapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
