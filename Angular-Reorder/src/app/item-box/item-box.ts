import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-box',
  imports: [],
  templateUrl: './item-box.html',
  styleUrl: './item-box.css'
})
export class ItemBox implements OnDestroy,OnInit {
    @Input() name:string = '';
    ngOnInit(): void {
      console.log(this.name,'ComponentInitialized ')
    }
    ngOnDestroy(): void {
      console.log(this.name,"component destroyed!")
    }
}
