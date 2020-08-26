import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/auth/login/login.component';
import { SignupComponent } from './public/auth/signup/signup.component';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { DoctorFormComponent } from './shared/doctor-form/doctor-form.component';
import { DoctorsComponent } from './public/doctors/doctors.component';
import { HospitalsComponent } from './public/hospitals/hospitals.component';
import { DoctorComponent } from './public/doctor/doctor.component';
import { HospitalComponent } from './public/hospital/hospital.component';
import { DoctorAccountComponent } from './private/doctor-account/doctor-account.component';
import { ReviewsComponent } from './shared/reviews/reviews.component';
import { UserAccountComponent } from './private/user-account/user-account.component';
import { ExaminationsComponent } from './shared/examinations/examinations.component';


const routes: Routes = [
  { path: 'uloguj-se', component: LoginComponent },
  {
    path: 'registruj-se', component: SignupComponent, children: [
      { path: 'korisnik', component: UserFormComponent },
      { path: 'lekar', component: DoctorFormComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'korisnik' },
    ]
  },
  {
    path: 'pretraga', children: [
      { path: 'lekari', component: DoctorsComponent },
      { path: 'zdravstvene-ustanove', component: HospitalsComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'lekari' },
    ]
  },
  { path: 'lekari/:id', component: DoctorComponent },
  { path: 'zdravstvene-ustanove/:id', component: HospitalComponent },
  {
    path: 'lekar', component: DoctorAccountComponent, children: [
      { path: 'pregledi', component: ExaminationsComponent },
      { path: 'recenzije', component: ReviewsComponent },
      { path: 'nalog', component: DoctorFormComponent }
    ]
  },
  {
    path: 'korisnik', component: UserAccountComponent, children: [
      { path: 'pregledi', component: ExaminationsComponent },
      { path: 'recenzije', component: ReviewsComponent },
      { path: 'nalog', component: UserFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
