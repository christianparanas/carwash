import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { BookingsService } from 'src/app/bookings.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  bookings: any

  constructor(private bookingService: BookingsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getBookings()
  }

  getBookings() {
    this.bookings = this.bookingService.getBookings()
  }

  logout() {
    this.authService.logout()
  }

}
