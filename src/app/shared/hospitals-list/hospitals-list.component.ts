import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitals-list',
  templateUrl: './hospitals-list.component.html',
  styleUrls: ['./hospitals-list.component.scss']
})
export class HospitalsListComponent implements OnInit {

  hospitals = [{
    _id: 'ss',
    name: 'Bolnica',
    address: 'Adresa',
    distance: 3.5
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
