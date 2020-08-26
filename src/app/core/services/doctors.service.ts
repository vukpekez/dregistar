import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from 'src/app/models/doctor';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctors: Doctor[] | Doctor
  doctorsListener = new Subject<Doctor[] | Doctor>()

  constructor(private http: HttpClient, private router: Router) { }

  getDoctors() {
    this.http.get<Doctor[]>('http://localhost:3000/api/doctors')
      .subscribe(doctors => {
        this.doctors = doctors
        this.doctorsListener.next([...this.doctors])
      })
  }

  getDoctor() {
    this.http.get<Doctor>('http://localhost:3000/api/doctors' + this.router.url.replace('/lekari', ''))
      .subscribe(doctor => {
        this.doctors = doctor
        this.doctorsListener.next({ ...doctor })
      })
  }

  getDoctorsListener() {
    return this.doctorsListener.asObservable()
  }

  setDistance({ i, value }) {
    if (this.doctors instanceof Array) {
      this.doctors[i].workPlace.distance = value
      this.doctorsListener.next([...this.doctors])
    } else {
      (this.doctors as Doctor).workPlace.distance = value
      this.doctorsListener.next({ ...this.doctors })
    }
  }
}
