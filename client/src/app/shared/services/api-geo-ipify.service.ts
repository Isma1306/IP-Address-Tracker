import { IpifyResponse } from './../interfaces/ipify-response';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class APIGeoIpifyService {

  ResponseData$: BehaviorSubject<IpifyResponse> = new BehaviorSubject({
    "ip": "1.1.1.1",
    "location": {
      "country": "US",
      "region": "California",
      "city": "Mountain View",
      "lat": 37.40599,
      "lng": -102.078514,
      "timezone": "-03:00",
    },
    "isp": "CloudFlare"
  });
  constructor() { }


  getLocation(address: string): Observable<IpifyResponse> {
    const response = {
      "ip": "8.8.8.8",
      "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.40599,
        "lng": -122.078514,
        "timezone": "-07:00",
      },
      "isp": "Google LLC"
    };

    const res = of(response);
    return res;

  }
}
