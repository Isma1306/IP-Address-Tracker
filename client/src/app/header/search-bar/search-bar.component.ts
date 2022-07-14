import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  submitHandler($event: SubmitEvent) {
    $event.preventDefault();
    console.log(this.search.value);

  }
}
