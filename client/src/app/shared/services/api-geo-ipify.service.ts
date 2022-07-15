import { IpifyResponse } from './../interfaces/ipify-response';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class APIGeoIpifyService {

  ResponseData$: ReplaySubject<IpifyResponse> = new ReplaySubject(1);
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
    res.subscribe(resp => this.ResponseData$.next(resp));
    return res;

  }
}
