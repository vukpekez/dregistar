import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  user = {
    name: 'Vuk',
    surname: 'Pekez',
    email: 'vukpekez@gmail.com',
    phone: undefined
  }
  links = ['Zakazni pregledi', 'Recenzije', 'Nalog'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }
}
