import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkDragDrop,moveItemInArray } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { ItemBox } from './item-box/item-box';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,DragDropModule,CommonModule,ItemBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10'
];

  showItems = true;

  drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.items, event.previousIndex, event.currentIndex);
}

  toggleItems() {
  this.showItems = !this.showItems;
}


}
