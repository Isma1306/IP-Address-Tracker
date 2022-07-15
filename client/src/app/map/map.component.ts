import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { BehaviorSubject } from 'rxjs';
import { IpifyResponse } from '../shared/interfaces/ipify-response';
import { APIGeoIpifyService } from '../shared/services/api-geo-ipify.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {


  public data$!: BehaviorSubject<IpifyResponse>;

  private map!: L.Map;

  private myIcon = L.icon({
    iconUrl: 'assets/images/icon-location.svg',
    iconSize: [50, 60],
    iconAnchor: [25, 60],
  });

  private initMap(coords: L.LatLngTuple): void {
    this.map = L.map('map', {
      center: coords,
      zoom: 15,
      zoomControl: false
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.addMarker(coords);
  }

  private addMarker(coords: L.LatLngTuple) {
    L.marker(coords, { icon: this.myIcon }).addTo(this.map);
    this.map.panTo(coords);
  }

  constructor(private api: APIGeoIpifyService) { }

  ngAfterViewInit(): void {
    this.api.ResponseData$.subscribe((response) => this.initMap([response.location.lat, response.location.lng]));
  }

}
