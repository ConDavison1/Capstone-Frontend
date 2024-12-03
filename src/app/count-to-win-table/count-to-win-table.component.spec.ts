import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountToWinTableComponent } from './count-to-win-table.component';

describe('CountToWinTableComponent', () => {
  let component: CountToWinTableComponent;
  let fixture: ComponentFixture<CountToWinTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountToWinTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountToWinTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
