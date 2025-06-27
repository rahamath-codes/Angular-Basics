import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  imports: [FormsModule,CommonModule],
  templateUrl: './hello-world.html',
  styleUrls: ['./hello-world.css']
})
export class HelloWorld {
    // protected title = "Hello-World Component"
    // data1 = "This is a property binding"
    // color = "yellow"
    // data2 = "2 way of data binding"
    // getMax(first:number,second:number){
    //   if(first>second) return first
    //   else return second
    // }
    // clickCount = 0;
    // clickMe(){
    //   this.clickCount++;
    // }
    // value = ''
    // value1 = ''
    // handleEvent(event:any){
    //   //this.value = event.target.value // not a good practice
    //   this.value = (event.target as HTMLInputElement).value
    // }
    // movies = ["Inception","Interstellar","Memento","The Dark Knight"]
    movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    genre: "Sci-Fi"
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    genre: "Sci-Fi"
  },
  {
    title: "Memento",
    director: "Christopher Nolan",
    cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    genre: "Thriller"
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    genre: "Action"
  }
];
//ngSwitch

  num = 0;

//ngIf
  showMe = true;  

//Attribute Directive
//ngClass
  enableRed = true;
  enableBig = true;
  enableIlatics = true;
//ngStyle
color = ""  

//PIPES
//1.date pipes
    toDate = new Date();
    message = "Welcome to Angular"

//2.Currency pipes
    price = 16;
        
  }
