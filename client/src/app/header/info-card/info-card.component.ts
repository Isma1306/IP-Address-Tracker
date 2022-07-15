import { IpifyResponse } from './../../shared/interfaces/ipify-response';
import { Component, OnInit } from '@angular/core';
import { APIGeoIpifyService } from 'src/app/shared/services/api-geo-ipify.service';
import { of, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  public data$!: ReplaySubject<IpifyResponse>;

  constructor(private api: APIGeoIpifyService) { }

  ngOnInit(): void {
    this.data$ = this.api.ResponseData$;
  }

}
