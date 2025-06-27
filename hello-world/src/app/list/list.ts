import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Form } from '../form/form';
import { Car } from '../car';

@Component({
  selector: 'app-list',
  imports: [FormsModule,CommonModule,Form],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List implements OnInit {
  carList:string[]=[]
  // carAdded(carsData:string[]){
  //     this.carList = carsData
    
  //   }
    constructor(private carService:Car){

    }
    ngOnInit(): void {
      this.carService.carNames$.subscribe((names)=>{
        this.carList=names
      })
    }
}

