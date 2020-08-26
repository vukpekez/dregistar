import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/core/services/hospital.service';
import { Observable } from 'rxjs';
import { Hospital } from 'src/app/models/hospital';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  filter
  hospital: Observable<Hospital>

  constructor(private service: HospitalService) { }

  ngOnInit(): void {
    this.hospital = this.service.getHospitalsListener() as Observable<Hospital>
    this.service.getHospital()
  }

  setDistance(distance: { i: number, value: number }) {
    this.service.setDistance(distance)
  }

  sort(value: string) {

  }
}
