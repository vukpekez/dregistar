import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  doctors = [
    {
      _id: 'dasdsadas',
      fullname: 'Ime i prezime',
      specialty: 'Hirurgija',
      reviews: { reviews: 4, rating: 4.6 },
      distance: 3.5,
      workPlace: {
        name: "Sveti Jovan",
        address: 'Ive Lole Ribara, Zrenjanin'
      }
    },
    {
      _id: 'dasdsadas',
      fullname: 'Ime i prezime',
      specialty: 'Hirurgija',
      reviews: { reviews: 4, rating: 4.6 },
      distance: 3.5,
      workPlace: {
        name: "Sveti Jovan",
        address: 'Ive Lole Ribara, Zrenjanin'
      }
    },
    {
      _id: 'dasdsadas',
      fullname: 'Ime i prezime',
      specialty: 'Hirurgija',
      reviews: { reviews: 4, rating: 4.6 },
      distance: 3.5,
      workPlace: {
        name: "Sveti Jovan",
        address: 'Ive Lole Ribara, Zrenjanin'
      }
    },
    {
      _id: 'dasdsadas',
      fullname: 'Ime i prezime',
      specialty: 'Hirurgija',
      reviews: { reviews: 4, rating: 4.6 },
      distance: 3.5,
      workPlace: {
        name: "Sveti Jovan",
        address: 'Ive Lole Ribara, Zrenjanin'
      }
    }, {
      _id: 'dasdsadas',
      fullname: 'Ime i prezime',
      specialty: 'Hirurgija',
      reviews: { reviews: 4, rating: 4.6 },
      distance: 3.5,
      workPlace: {
        name: "Sveti Jovan",
        address: 'Ive Lole Ribara, Zrenjanin'
      }
    },
    {
      _id: 'dasdsadas',
      fullname: 'Ime i prezime',
      specialty: 'Hirurgija',
      reviews: { reviews: 4, rating: 4.6 },
      distance: 3.5,
      workPlace: {
        name: "Sveti Jovan",
        address: 'Ive Lole Ribara, Zrenjanin'
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
