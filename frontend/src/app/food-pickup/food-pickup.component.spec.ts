import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPickupComponent } from './food-pickup.component';

describe('FoodPickupComponent', () => {
  let component: FoodPickupComponent;
  let fixture: ComponentFixture<FoodPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodPickupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
