import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HelloWorld } from './hello-world/hello-world';
import { FormsModule } from '@angular/forms';
// import { Form } from './form/form';
import { Heading } from './heading/heading';
import { CommonModule } from '@angular/common';
import { List } from './list/list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,Heading,List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Life Cycle Hooks';
  titles:string[]=[]
  destroyed = false;




  addTitle(){
    this.titles.push(this.title);
    console.log(this.titles);
  }
}
