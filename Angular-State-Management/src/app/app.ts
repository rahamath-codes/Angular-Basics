import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerAdd } from './customer-add/customer-add';
import { CustomerView } from './customer-view/customer-view';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CustomerAdd,CustomerView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular-State-Management';
  customers:Customer[]=[];
  getCustomers(customers:Customer[]){
      this.customers=customers;
  }
//! State Management - State management means handling and sharing app data properly between multiple components in a clean, predictable way.
  //Use a shared service with BehaviorSubject to:
  //Store state
  //Expose as Observable
  //Update state cleanly from anywhere


}
