import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  CustomerName: string = "Krishna";
  MovieName: string = "Jawan";
  seats: number | null = 2;
  Bookingdate: string = "24/09/2023"; // Ensure it's a string
  today: string = new Date().toISOString().split('T')[0];

  submitForm() {
    // Handle form submission logic here
    // You can access the form data using this.CustomerName, this.MovieName, etc.
  }

  resetForm() {
    this.CustomerName = "";
    this.MovieName = "";
    this.seats = null;
    this.Bookingdate = "";
  }
  verifyCustomerName(obj: any) {
    if (obj.target.value === "") {
      window.alert("First name is Mandatory..");
    }
  }
}
