import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { TripFormComponent } from './trip-form/trip-form';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: TripFormComponent },
  { path: 'login', component: LoginComponent }
];