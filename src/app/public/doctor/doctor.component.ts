import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/core/services/doctors.service';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent implements OnInit {
  links = ['Lokacija', 'O lekaru', 'Recenzije'];
  activeLink = this.links[0];

  loggedUser

  doctor: Observable<Doctor>

  constructor(private service: DoctorsService) { }

  ngOnInit(): void {
    this.doctor = this.service.getDoctorsListener() as Observable<Doctor>
    this.service.getDoctor()
  }

  openDialog() {

  }

  setDistance(distance: { i: number, value: number }) {
    this.service.setDistance(distance)
  }

  scroll(link: string) {
    document.getElementById('tabs').classList.remove('shadow', 'slideInDown')
    switch (link) {
      case this.links[0]: {
        document.getElementById('loc').scrollIntoView()
        break
      }
      case this.links[1]: {
        document.getElementById('doc').scrollIntoView()
        break;
      }
      case this.links[2]: {
        document.getElementById('rec').scrollIntoView()
        break;
      }
    }
    document.getElementById('tabs').classList.add('shadow', 'slideInDown')
  }
}
