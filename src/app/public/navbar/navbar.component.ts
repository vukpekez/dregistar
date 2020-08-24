import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userData/* = {
    fullname: 'Vuk Pekez',
    isDoctor: true
  }*/

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {

  }
}
