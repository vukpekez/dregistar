import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  filter
  hospital = {
    _id: '12346',
    name: 'Sveti Jovan',
    address: 'Zrenjanin',
    phone: '465321645',
    distance: 3.5,
    rating: {
      rating: 3.5,
      count: 13
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
