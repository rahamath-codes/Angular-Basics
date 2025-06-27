import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message {
    @Input() message: string='';
}
