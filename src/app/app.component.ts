import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dregistar';

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const content = document.getElementById('back')
        const scroll = document.getElementById('scroll-container')

        if (event.url == '/' || event.url == '/uloguj-se' || event.url.includes('/registruj-se')) {
          event.url.includes('/registruj-se') ? scroll.classList.add('container') : scroll.classList.remove('container')
          scroll.classList.add('center-content')
        } else {
          scroll.classList.add('container')
          scroll.classList.remove('center-content')
        }

        if (event.url == '/') {
          content.style.backgroundImage = 'url("../assets/home-background.jpg")'
        } else {
          content.style.backgroundImage = 'initial'
        }
      }
    })
  }

  ngOnInit(): void {
  }

  scroll(scroll: HTMLElement): void {
    if (scroll.scrollTop > 0) {
      scroll.style.top = '57px'
      document.getElementById("navbar").style.padding = "0";
    } else {
      scroll.style.top = '87px'
      document.getElementById("navbar").style.padding = "20px 0";
    }
  }
}
