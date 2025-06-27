import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormControl } from '@angular/forms';
@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm implements OnInit {
    countryList:Country[] = [new Country("1","South Africa"),new Country("2","Tamil Nadu"),new Country("3","Neyveli")];

    onSubmit(form:NgForm){
      //! To get form values
      console.log(form.value)
    }
    onFormSubmit(formControl:FormControl){
        console.log(formControl
        )
    }
    contact!:Contact;
//* To Set form values - Create a seperates for the form with its input properties and initialize it in the component class using OnInit and in the input fields connect the values by two way binding [(ngModel)].
    ngOnInit(): void {
      this.contact={
        name: '',
      age: 30,
      gender: 'male',
      married: true,
      country: '2',
      address: {
        city: 'Chennai',
        pincode: '600001',
        street: 'MG Road'
        },
        email: 'john.doe@example.com'
        }
   }
}
class Country{
 id:string;
 name:string; 
 constructor(id:string,name:string){
  this.id = id
  this.name = name;
 }
}

class Contact{
     name!: string;
  age!: number;
  gender!: string;
  married!: boolean;
  country!: string;
  address!: {
    city: string;
    pincode: string;
    street: string;
  };
  email!: string;
//!FormValidation - ngNativeValidate (it will disable all angular inbuilt rules for form)

}

// Template-Driven Form

// Import FormsModule in app.module.ts

// Use [(ngModel)] for binding

// Add name attribute on inputs

// Add validation attributes:

// [required] → for required fields

// [minlength]="3" → minimum length

// type="email" → email validation

// Use #field="ngModel" and *ngIf to show errors