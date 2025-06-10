import { TestBed } from '@angular/core/testing';

import { FoodPickupService } from './food-pickup.service';

describe('FoodPickupService', () => {
  let service: FoodPickupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodPickupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
