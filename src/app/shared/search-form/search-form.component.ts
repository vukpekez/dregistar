import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  names: { all: string[], filtered: string[] } = { all: [], filtered: [] }
  locations: { all: string[], filtered: string[] } = { all: [], filtered: [] }
  specialties: { all: string[], filtered: string[] } = { all: [], filtered: [] }

  name: string
  specialty: string
  locatinon: string

  searchDoctors: boolean

  constructor(route: ActivatedRoute, private router: Router) {

    this.searchDoctors = router.url.includes('lekari') ? true : false

    route.queryParamMap.subscribe((query) => {
      this.name = query.get('name')
      this.specialty = query.get('specialty')
      this.locatinon = query.get('location')
    })
  }

  ngOnInit(): void {
  }

  search(): void {
    this.router.navigate(['/pretraga/lekari'], {
      queryParams: {
        name: this.name ? this.name : null,
        specialty: this.specialty ? this.specialty : null,
        location: this.locatinon ? this.locatinon : null
      }, queryParamsHandling: 'merge'
    })
  }

}
