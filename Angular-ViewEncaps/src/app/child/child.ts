import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  // encapsulation: ViewEncapsulation.None //Angular does NOT do any CSS scoping or style encapsulation.So all CSS in that component becomes global styles — it affects whole app! Style leakage possible, clash possible.
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Child {
  @Input() name!:string;
}
