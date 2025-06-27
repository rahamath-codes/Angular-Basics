import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hostcomponent } from './host/host';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Hostcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'CFR';
}
