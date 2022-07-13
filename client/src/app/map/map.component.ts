import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  @Input() coords!: L.LatLngTuple;

  private map!: L.Map;

  private myIcon = L.icon({
    iconUrl: 'assets/images/icon-location.svg',
    iconSize: [50, 60],
    iconAnchor: [25, 60],
  });

  private initMap(): void {
    this.map = L.map('map', {
      center: this.coords,
      zoom: 15,
      zoomControl: false
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.addMarker(this.coords);
  }

  private addMarker(coords: L.LatLngTuple) {
    L.marker(coords, { icon: this.myIcon }).addTo(this.map);
    this.map.panTo(coords);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
