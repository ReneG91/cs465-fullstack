import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './trip-form.html'
})
export class TripFormComponent implements OnInit {

  trip: any = {
    name: '',
    length: '',
    price: '',
    description: ''
  };

  isEdit = false;

  constructor(
    private tripService: TripDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdit = true;
      this.tripService.getTrip(id).subscribe((data: any) => {
        this.trip = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.tripService.updateTrip(this.trip._id, this.trip).subscribe(() => {
        alert('Trip updated');
        window.location.href = '/';
      });
    } else {
      this.tripService.addTrip(this.trip).subscribe(() => {
        alert('Trip added');
        this.trip = {
          name: '',
          length: '',
          price: '',
          description: ''
        };
        window.location.reload();
      });
    }
  }
}