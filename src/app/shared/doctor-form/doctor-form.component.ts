import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  specs = []
  hospitals = []
  days = ['Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota', 'Nedelja']
  time = Array.from({ length: 12 }, (x, i) => i * 5)

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ]),
    specialty: new FormControl(null, [
      Validators.required,
      Validators.minLength(5)
    ]),
    workPlace: new FormControl(null, [
      Validators.required
    ])
  })

  constructor() { }

  ngOnInit(): void {
  }

  openDialog(ev) {

  }

}
