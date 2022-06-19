import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingsService } from 'src/app/bookings.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  plan: any
  bookingForm: FormGroup;

  constructor(private route: ActivatedRoute, private bookingService: BookingsService) {
    
   }

  ngOnInit(): void {
    this.plan = this.route.snapshot.paramMap.get('plan');

    this.bookingForm = new FormGroup({
      plan: new FormControl(this.plan, Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      message: new FormControl(''),
    });
  }

  onSubmit() {
    if(this.bookingForm.status === 'INVALID') return

    const data = {
      id: Math.random().toString(36).slice(2, 30),
      ...this.bookingForm.value
    }

    const res = this.bookingService.postBooking(data)

    if(res.status == 201) {
      alert("Booking Added.")
      this.bookingForm.reset()
    }
  }

}
