import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctors: any

  constructor() { }

  ngOnInit(): void {
  }

  sort(value: string) {
    this.doctors.sort((a, b) => {
      if (value === 'best')
        return +b.rating[0] - +a.rating[0]
      else
        return +a.distance - +b.distance
    })
  }
}
