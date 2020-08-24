import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/auth/login/login.component';
import { SignupComponent } from './public/auth/signup/signup.component';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { DoctorFormComponent } from './shared/doctor-form/doctor-form.component';
import { DoctorsComponent } from './public/doctors/doctors.component';
import { HospitalsComponent } from './public/hospitals/hospitals.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
