import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Car } from '../car';
@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  //!Using Decorator
      // @Output() caradded:EventEmitter<string[]> = new EventEmitter;
      carList:string[]=[];
      carName="";
      constructor(private car:Car){

      }
      addCars(element:any){
          // this.carList.push(element)
          // this.carName=""
          // console.log(this.carList)
          // this.caradded.emit(this.carList)
      //?Sending data via service class
        this.car.addCarName(this.carName)
       this.carName=""
      
      }
}
