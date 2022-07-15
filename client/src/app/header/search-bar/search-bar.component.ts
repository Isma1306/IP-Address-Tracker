import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { APIGeoIpifyService } from 'src/app/shared/services/api-geo-ipify.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search = new FormControl('', Validators.required);

  constructor(private api: APIGeoIpifyService) { }

  ngOnInit(): void {
  }

  submitHandler($event: SubmitEvent) {
    $event.preventDefault();
    if (!this.search.errors?.['required']) {
      this.api.getLocation(this.search.value);
    }
  }
}
