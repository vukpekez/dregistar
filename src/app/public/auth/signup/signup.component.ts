import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isDoctor = false
  constructor(router: Router) {
    if (router.url.includes('lekar')) {
      this.isDoctor = true
    }
  }

  ngOnInit(): void {
  }

  signUp(): void {

  }
}
