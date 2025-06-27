import { Customer } from './../models/customer';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { CustomerService } from '../_services/customer-service';
@Component({
  selector: 'app-customer-add',
  imports: [],
  templateUrl: './customer-add.html',
  styleUrl: './customer-add.css'
})
export class CustomerAdd implements OnInit {
  // customers:Customer[]=[];
  @Output() CustomerAdded = new EventEmitter<Customer[]>;
  constructor(private customerService:CustomerService){

  }
  ngOnInit(): void {
    
  }
  addCustomer(customerName:string){
        // let customer:Customer = {name:customerName}
        // this.customers.push(customer);
        // console.log(this.customers)
        // this.CustomerAdded.emit(this.customers)
        this.customerService.add(customerName)
        }
}
