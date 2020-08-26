import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from 'src/app/models/hospital';
import { HospitalService } from 'src/app/core/services/hospital.service';

@Component({
  selector: 'app-hospitals-list',
  templateUrl: './hospitals-list.component.html',
  styleUrls: ['./hospitals-list.component.scss']
})
export class HospitalsListComponent implements OnInit {

  hospitals: Observable<Hospital[]>

  constructor(private service: HospitalService) { }

  ngOnInit(): void {
    this.hospitals = this.service.getHospitalsListener() as Observable<Hospital[]>
    this.service.getHospitals()
  }

  setDistance(distance: { i: number, value: number }) {
    this.service.setDistance(distance)
  }
}
