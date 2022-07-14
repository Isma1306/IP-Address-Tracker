import { TestBed } from '@angular/core/testing';

import { APIGeoIpifyService } from './api-geo-ipify.service';

describe('APIGeoIpifyService', () => {
  let service: APIGeoIpifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIGeoIpifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
