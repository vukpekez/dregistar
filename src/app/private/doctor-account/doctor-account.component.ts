import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-account',
  templateUrl: './doctor-account.component.html',
  styleUrls: ['./doctor-account.component.scss']
})
export class DoctorAccountComponent implements OnInit {

  doctor = {
    fullname: 'Ime i prezime',
    email: 'email@gmail.com',
    workPlace: {
      _id: 'dsaasdasd',
      name: 'Hospital name',
      address: 'Adresa'
    }
  }
  links = ['Zakazni pregledi', 'Recenzije', 'Nalog'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }
}
