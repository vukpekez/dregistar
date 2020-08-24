import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavbarComponent } from './public/navbar/navbar.component';
import { LoginComponent } from './public/auth/login/login.component';
import { SignupComponent } from './public/auth/signup/signup.component';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { DoctorFormComponent } from './shared/doctor-form/doctor-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DoctorsListComponent } from './shared/doctors-list/doctors-list.component';
import { HospitalsListComponent } from './shared/hospitals-list/hospitals-list.component';
import { DoctorsComponent } from './public/doctors/doctors.component';
import { HospitalsComponent } from './public/hospitals/hospitals.component';
import { SearchFormComponent } from './shared/search-form/search-form.component';
import { MapComponent } from './shared/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UserFormComponent,
    DoctorFormComponent,
    DoctorsListComponent,
    HospitalsListComponent,
    DoctorsComponent,
    HospitalsComponent,
    SearchFormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatButtonModule, MatDividerModule, MatTabsModule,
    MatButtonToggleModule, MatDialogModule, HttpClientModule, MatAutocompleteModule, MatProgressSpinnerModule, MatCheckboxModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
