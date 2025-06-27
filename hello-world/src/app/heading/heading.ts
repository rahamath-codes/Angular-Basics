import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input,OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heading',
  imports: [FormsModule],
  templateUrl: './heading.html',
  styleUrl: './heading.css'
})
export class Heading implements OnChanges, OnInit,DoCheck,OnDestroy,AfterViewInit,AfterViewChecked {
    @Input() text = '';
              count = 0;
//!Life Cycle of Hooks 
 //ngOnChanges is a lifecycle hook in Angular used in components or directives to react to changes in @Input() properties.
 //Will not works on array and object [non primitives]
    ngOnChanges(changes: SimpleChanges): void {
      // if(!changes['text'].isFirstChange())
     {
      //  console.log(changes['text'].currentValue)
      console.log("Ng On Changes Called!")
       this.count++;
     }
    }
//! OnInit 
//ngOnInit is one of the Angular lifecycle hooks, used to run initialization logic after Angular first creates the component.
//Called once, after the first @Input() values are set.
//Called after the constructor, but before the view is fully rendered.
  ngOnInit() {
    this.text = 'Component initialized!';
    console.log('ngOnInit called');
   
  }
//! DoCheck
//ngDoCheck() is a powerful but advanced lifecycle hook in Angular that allows you to perform custom change detection logic.
//You need to detect changes to non-primitive objects or arrays passed via @Input().
// You want to implement custom dirty checking beyond Angular’s default mechanism.
// You want to optimize performance by conditionally skipping logic.
  ngDoCheck(): void {
   
    if(this.count>1){
      
      console.log("New Value added")
       console.log("DoChecked Called")
    }
    this.count++;
  }
//! OnDestroy
//ngOnDestroy() is a lifecycle hook in Angular that's used to clean up resources before a component or directive is destroyed.
//The component is navigated away from.
// It is removed by *ngIf or similar logic.
// The entire app is destroyed.
ngOnDestroy(): void {
  console.log("Component Destroyed")
}
//! AfterViewInit
//Runs once after component's view (and its children’s views) is initialized
// Called when, After Angular creates and initializes the component view
  ngAfterViewInit(): void {
    console.log("After View Init Called")
  }
//! AfterViewChecked
//Runs after every check of the component's view (and children’s)	
// Called after every change detection cycle

  ngAfterViewChecked(): void {
 
    console.log("After View Checked called")
  }

//ngDoCheck()	: Custom change detection (input, object, anything)	
//? - Every time Angular does change detection
//ngAfterViewChecked() :	Runs after the component's view is checked	
//? - After every change detection cycle
//
}
