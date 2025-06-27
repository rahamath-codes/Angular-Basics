import { Component } from '@angular/core';
import { ShortenPipe } from '../shorten-pipe';
@Component({
  selector: 'app-custom-pipes',
  imports: [ShortenPipe],
  templateUrl: './custom-pipes.html',
  styleUrl: './custom-pipes.css'
})
export class CustomPipes {
      value:string = "HelloWorld"
}
