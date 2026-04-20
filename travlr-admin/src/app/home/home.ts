import { Component } from '@angular/core';
import { TripFormComponent } from '../trip-form/trip-form';
import { TripListComponent } from '../trip-list/trip-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TripFormComponent, TripListComponent],
  templateUrl: './home.html'
})
export class HomeComponent {}