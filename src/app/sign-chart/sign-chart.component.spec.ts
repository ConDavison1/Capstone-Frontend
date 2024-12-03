import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignChartComponent } from './sign-chart.component';

describe('SignChartComponent', () => {
  let component: SignChartComponent;
  let fixture: ComponentFixture<SignChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
