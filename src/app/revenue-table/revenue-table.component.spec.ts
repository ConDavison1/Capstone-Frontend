import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueTableComponent } from './revenue-table.component';

describe('RevenueTableComponent', () => {
  let component: RevenueTableComponent;
  let fixture: ComponentFixture<RevenueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
