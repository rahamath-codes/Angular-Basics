import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ElementRef-Renderer2';
    @ViewChild('box') box!: ElementRef;

    // constructor(private el: ElementRef) {}
    constructor(private renderer: Renderer2) {}
  
  changeColor(){
//! ElementRef - ElementRef gives direct access to a DOM element (like a div, input, etc.). 
//*  It's like: "Get me this HTML element in code."
    // this.box.nativeElement.style.backgroundColor = 'green';
    // this.box.nativeElement.style.color = 'white';


//!Renderer2 is a safe, platform-independent way to manipulate the DOM.
//* It works even in server-side rendering (like Angular Universal), and avoids direct document.querySelector() or nativeElement.style.
        // this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red'); //without ElementRef

//? Combination of ElementRef and Renderer2
    this.renderer.setStyle(this.box.nativeElement, 'background-color', 'grey');
    this.renderer.setStyle(this.box.nativeElement, 'color', 'yellow');

// #box	HTML-la element-ku oru name
// @ViewChild()	Adha TS-la catch panna
// ElementRef	Direct DOM element access
// Renderer2	Safe-a DOM edit panna Angular way
// setStyle()	Style apply panna

//?Why Renderer2 is better?
// Works on all platforms (browser, server)
// Avoids direct DOM access (safe)
// Angular-recommended        
  }
}
