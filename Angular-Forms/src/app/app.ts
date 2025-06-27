import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveForms,ReactiveFormsModule,FormsModule,TemplateDrivenForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular-Forms';
}

