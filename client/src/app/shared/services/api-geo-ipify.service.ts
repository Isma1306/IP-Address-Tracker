import { IpifyResponse } from './../interfaces/ipify-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class APIGeoIpifyService {

  private baseURL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_CDanmaNxlV2sJ6Aw336JxqK2890p2&ipAddress=';
  ResponseData$: ReplaySubject<IpifyResponse> = new ReplaySubject(1);
  constructor(private http: HttpClient) { }

  getClient() {
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


    this.ResponseData$.next(response);
    // this.http.get(this.baseURL)
    //   .subscribe((res) => this.ResponseData$.next(res as IpifyResponse));
  }

  getLocation(address: string) {
    const response = {
      "ip": "1.1.1.1",
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


    this.ResponseData$.next(response);
    // this.http.get(`${this.baseURL}${address}`)
    //   .subscribe((res) => this.ResponseData$.next(res as IpifyResponse));


  }

}
