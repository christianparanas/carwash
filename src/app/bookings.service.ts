import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  bookings: any = []

  constructor() { }

  postBooking(data: any) {
    if (localStorage.getItem('bookings') === null) {
      this.bookings.push(data);

      localStorage.setItem('bookings', JSON.stringify(this.bookings));
    } else {
      const res: any = localStorage.getItem('bookings');
      let bookings = JSON.parse(res);
      localStorage.removeItem('bookings');

      bookings.push(data);
      localStorage.setItem('bookings', JSON.stringify(bookings));
    }

    return {
      status: 201,
      msg: "Booking Added!"
    }
  }

  getBookings() {
    if (localStorage.getItem('bookings') === null) {
      return false;
    }

    const res: any = localStorage.getItem('bookings');
    let bookings = JSON.parse(res);

    return bookings;
  }
}

