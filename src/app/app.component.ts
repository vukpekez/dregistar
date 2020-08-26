import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dregistar';

  shadow = 'mat-elevation-z10'

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const scroll = document.getElementById('scrollable-container')
        const content = document.getElementById('content') ? document.getElementById('content') : document.getElementById('center-content')

        if (event.url == '/' || event.url == '/uloguj-se' || event.url.includes('/registruj-se')) {
          content.id = 'center-content'
          scroll.classList.add('center-content')
        } else {
          content.id = 'content'
          scroll.classList.remove('center-content')
        }
      }
    })
  }

  ngOnInit(): void {
    if (document.defaultView.screen.width < 1000) {
      this.shadow = ''
    }
  }

  scroll(scroll: HTMLElement): void {
    if (scroll.scrollTop > 0) {
      scroll.style.top = '57px'
      document.getElementById('navbar').style.padding = '5px 0'
    } else {
      scroll.style.top = '87px'
      document.getElementById('navbar').style.padding = '20px 0'
    }
  }
}
