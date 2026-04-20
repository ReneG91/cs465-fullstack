import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripDataService } from '../services/trip-data';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TripCardComponent],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripListComponent implements OnInit {

  trips: any[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe(data => {
      this.trips = data;
    });
  }
}