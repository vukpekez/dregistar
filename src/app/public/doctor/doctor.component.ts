import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  links = ['Lokacija', 'O lekaru', 'Recenzije'];
  activeLink = this.links[0];
  loggedUser
  doctor = {
    _id: 'dasdsadas',
    fullname: 'Vuk Pekez',
    specialty: ['Hirurgija'],
    education: ['Medicinski Fakultet, Beograd'],
    reviews: { reviews: 4, rating: 4.6 },
    distance: 3.5,
    workPlace: {
      _id: '12345',
      name: "Sveti Jovan",
      address: 'Ive Lole Ribara, Zrenjanin',
      phone: '021/528-845'
    },
    rating: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {

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
