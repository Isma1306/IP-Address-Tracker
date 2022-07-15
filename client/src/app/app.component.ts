
import { Component } from '@angular/core';
import { APIGeoIpifyService } from './shared/services/api-geo-ipify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private api: APIGeoIpifyService) { }

  ngOnInit(): void {
    this.api.getClient();
  }

}