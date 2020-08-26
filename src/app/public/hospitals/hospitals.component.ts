import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {

  hospitals: any
  constructor() { }

  ngOnInit(): void {
  }

  sort(value: string) {
    this.hospitals.sort((a, b) => {
      if (value === 'best')
        return +b.rating[0] - +a.rating[0]
      else
        return +a.distance - +b.distance
    })
  }
}
