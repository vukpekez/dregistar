import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews = {
    rating: 3.6,
    count: 13,
    asUser: false,
    reviews: [
      {
        user: {
          name: 'Ime',
          surname: 'Prezime'
        },
        doctor: {
          _id: '2134',
          fullname: 'Doktor',
          specialty: 'Hirurgija',
        },
        date: Date.now(),
        content: 'Recenzija content',
        rating: 3
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  sortReviews(value: string) {
    this.reviews.reviews.sort((a: any, b: any) => {
      if (value === 'new')
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      else if (value === 'best')
        return b.rating - a.rating
      else if (value === 'worst')
        return a.rating - b.rating
    })
  }
}
