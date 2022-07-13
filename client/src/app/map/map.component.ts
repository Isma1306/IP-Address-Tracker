import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as leaflet from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = leaflet.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    const tiles = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
