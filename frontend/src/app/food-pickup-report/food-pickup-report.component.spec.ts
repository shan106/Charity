import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPickupReportComponent } from './food-pickup-report.component';

describe('FoodPickupReportComponent', () => {
  let component: FoodPickupReportComponent;
  let fixture: ComponentFixture<FoodPickupReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodPickupReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodPickupReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
