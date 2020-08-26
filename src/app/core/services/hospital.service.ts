import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from 'src/app/models/hospital';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  hospitals: Hospital[] | Hospital
  hospitalsListener = new Subject<Hospital[] | Hospital>()

  constructor(private http: HttpClient, private router: Router) { }

  getHospitals() {
    this.http.get<Hospital[]>('http://localhost:3000/api/hospitals')
      .subscribe(hospitals => {
        this.hospitals = hospitals
        this.hospitalsListener.next([...this.hospitals])
      })
  }

  getHospital() {
    this.http.get<Hospital>('http://localhost:3000/api/hospitals' + this.router.url.replace('/zdravstvene-ustanove', ''))
      .subscribe(hospitals => {
        this.hospitals = hospitals
        this.hospitalsListener.next({ ...hospitals })
      })
  }

  getHospitalsListener() {
    return this.hospitalsListener.asObservable()
  }

  setDistance({ i, value }) {
    if (this.hospitals instanceof Array) {
      this.hospitals[i].distance = value
      this.hospitalsListener.next([...this.hospitals])
    } else {
      (this.hospitals as Hospital).distance = value
      this.hospitalsListener.next({ ...this.hospitals })
    }
  }
}
