import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // encapsulation: ViewEncapsulation.None
  //?Angular does NOT do any CSS scoping or style encapsulation.So all CSS in that component becomes global styles — it affects whole app! Style leakage possible, clash possible.
  encapsulation: ViewEncapsulation.ShadowDom
  //?Angular uses the real browser Shadow DOM to encapsulate your component's styles and template. 
  //ViewEncapsulation.Emulated - Angular uses emulated as default and it will
  //Default encapsulation - If you don’t specify encapsulation in your component.
  //! How angular fake encapsulate the css :-  
  // 1. Adding unique attributes to each component’s DOM
  // 2. Updating CSS selectors to match only elements with those attributes

})
export class App {
  protected title = 'Angular-ViewEncaps';
//!ViewEncapsulation is a feature in Angular that controls how styles from a component affect the rest of the app — and how global styles affect the component.
//You can protect styles inside component
//? Types of ViewEncapsulation:
//Emulated (default)	Angular style-a auto scope pannum (but no Shadow DOM) - I didn't even set ViewEncapsulation, still child .box style is separate from parent .box, Yes! Because of Emulated.
// None	All styles are global (no protection)
// ShadowDom	Native Shadow DOM, full style isolation

userName = 'Raja';
changeName(){
  this.userName = this.userName === 'Raja' ? 'Kumar' : 'Raja';
}

}
