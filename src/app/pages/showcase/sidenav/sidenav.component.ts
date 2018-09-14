import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

@Component({
  selector: 'showcase-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: []
})
export class SidenavComponent implements OnInit {

  show: boolean;

  constructor() { }

  ngOnInit() {
    this.show = false;
  }

  showAutocomplete(): void {
    this.show = true;
    console.log(this.show);
  }

}
