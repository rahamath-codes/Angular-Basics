import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css'
})
export class ReactiveForms {
          contactForm = new FormGroup({
            firstName:new FormControl("Jameela",[Validators.required,Validators.minLength(8)]),//Default value
            lastName : new FormControl({
              value:"Janu",
              disabled:true //Default value + enable and disable validation in js object
            }),
            email : new FormControl(),
            gender: new FormControl(),
            isMarried: new FormControl(),
            country : new FormControl([Validators.required]),
            address : new FormGroup({
              city:new FormControl(),
              street:new FormControl(),
              pincode: new FormControl()
            })
          })
      onSubmit(){
        console.log(this.contactForm.value)
      } 
}

// Import ReactiveFormsModule in app.module.ts

// Create a FormGroup and FormControl in component.ts

// Bind the form using [formGroup] and inputs using formControlName

// Use validators like:

// Validators.required

// Validators.minLength(3)

// Validators.email

// Use *ngIf and .errors to show validation messages


