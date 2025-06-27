import { CustomerService } from './../_services/customer-service';
import { FormsModule } from '@angular/forms';
import { Customer } from './../models/customer';
import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-view',
  imports: [FormsModule,CommonModule],
  templateUrl: './customer-view.html',
  styleUrl: './customer-view.css'
})
export class CustomerView implements OnInit{
  // @Input() customers:Customer[]=[]
  customers:Customer[]=[]
  constructor(private customerService:CustomerService){}
  ngOnInit(): void {
  this.customers = this.customerService.get()
  }
}
