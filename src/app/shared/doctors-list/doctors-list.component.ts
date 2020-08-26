import { Component, OnInit, Input } from '@angular/core';
import { DoctorsService } from 'src/app/core/services/doctors.service';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  isObservable = false
  @Input() doctors: Observable<Doctor[]> | Doctor[]

  constructor(private service: DoctorsService) {
  }

  ngOnInit(): void {
    if (!this.doctors) {
      this.isObservable = true
      this.doctors = this.service.getDoctorsListener() as Observable<Doctor[]>
      this.service.getDoctors()
    }
  }

  setDistance(distance: { i: number, value: number }) {
    this.service.setDistance(distance)
  }
}
