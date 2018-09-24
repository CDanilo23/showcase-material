import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'showcase-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: []
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  showAutocomplete = false;
  showCheckbox = false;
  showInput = false;
  showRadio = false;
  showSelect = false;
  showDatepicker = false;

  constructor() { }

  ngOnInit() {
  }

  componentSelected(selection: string) {
    this.showAutocomplete = false;
    this.showCheckbox = false;
    this.showInput = false;
    this.showRadio = false;
    this.showSelect = false;
    this.showDatepicker = false;

    if ( selection === 'autocomplete') {
      console.log(selection);
      this.showAutocomplete = true;
    } else if (selection === 'checkbox') {
      this.showCheckbox = true;
      console.log(selection);
  } else if (selection === 'input') {
    this.showInput = true;
    console.log(selection);
  } else if (selection === 'radio') {
    this.showRadio = true;
    console.log(selection);
  } else if (selection === 'select') {
    this.showSelect = true;
    console.log(selection);
  } else if (selection === 'datepicker') {
    this.showDatepicker = true;
    console.log(selection);
  }

    this.sidenav.close();
  }

}
