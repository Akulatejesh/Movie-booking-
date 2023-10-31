import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  CustomerName: string = "Krishna";
  Address: any = "Sholinganallur, Chennai";
  phone: number | null = 8735375227 ; // Set phone to null
  emailid: any = "krishna@gmail.com";
  

  verifyCustomerName(obj: any) {
    if (obj.target.value === "") {
      window.alert("First name is Mandatory..");
    }
  }
}
