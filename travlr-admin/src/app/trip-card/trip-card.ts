import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCardComponent {
  @Input() trip: any;

  constructor(
    private router: Router,
    private tripService: TripDataService
  ) {}

  editTrip() {
  if (!localStorage.getItem('travlr-token')) {
    alert('You must log in first.');
    window.location.href = '/login';
    return;
  }

  this.router.navigate(['/edit', this.trip._id]);
}

  deleteTrip() {
  if (!localStorage.getItem('travlr-token')) {
    alert('You must log in first.');
    window.location.href = '/login';
    return;
  }

  this.tripService.deleteTrip(this.trip._id).subscribe(() => {
    alert('Deleted');
    window.location.reload();
  });
}
}