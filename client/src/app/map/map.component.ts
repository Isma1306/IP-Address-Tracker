import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { IpifyResponse } from '../shared/interfaces/ipify-response';
import { APIGeoIpifyService } from '../shared/services/api-geo-ipify.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {


  public data$!: ReplaySubject<IpifyResponse>;

  private map!: L.Map;

  private myIcon = L.icon({
    iconUrl: 'assets/images/icon-location.svg',
    iconSize: [50, 60],
    iconAnchor: [25, 60],
  });

  private initMap(coords: L.LatLngTuple): void {
    this.map = L.map('map', {
      center: coords,
      zoom: 0,
      zoomControl: false
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private addMarker(coords: L.LatLngTuple) {
    L.marker(coords, { icon: this.myIcon }).addTo(this.map);
    this.map.setView(coords, 10);

  }

  constructor(private api: APIGeoIpifyService) { }

  ngAfterViewInit(): void {
    this.initMap([0, 0]);
    this.api.ResponseData$.subscribe((response) => this.addMarker([response.location.lat, response.location.lng]));
  }

}
