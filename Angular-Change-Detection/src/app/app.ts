import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from "./child/child";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
//? When your component’s data changes, Angular updates the DOM to reflect those changes — and this process is called change detection.
// rahamth-codes
export class App {
  protected title = 'Angular-Change-Detection';
  counter = 0;

  increment() {
    this.counter += 1; // 🔁 new value → child re-renders
  }

  sameValue() {
    this.counter = this.counter; // ❌ same reference → no re-render
  }
}
