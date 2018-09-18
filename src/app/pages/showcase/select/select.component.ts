import { Component, OnInit } from '@angular/core';
import { DB } from './dbs';

@Component({
  selector: 'showcase-select',
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent implements OnInit {

  dbs: DB[];

  constructor() { }

  ngOnInit() {
    this.dbs = [
      {value: 'oracle11g', viewValue: 'Oracle'},
      {value: 'mysql5', viewValue: 'MySql'},
      {value: 'mongo4', viewValue: 'MongoDB'}
    ];
  }

}
