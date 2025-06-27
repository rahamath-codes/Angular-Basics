import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
  // ChangeDetectorRef.markForCheck()- for mannual component check
})
export class Child implements OnChanges{  
  @Input() count!: number;
  // ngOnInit(): void {
  //   console.log("Child component Initialized")
  // }
  ngOnChanges() {
    console.log('Child Re-rendered! Count =', this.count);
  }
// | Condition                   | Angular Default (No OnPush) | OnPush Strategy             |
// | --------------------------- | --------------------------- | --------------------------- |
// | New primitive value         | Component re-render         | Component re-render         |
// | Same primitive value        | Component re-render skipped | Component re-render skipped |
// | New object/array reference  | Component re-render         | Component re-render         |
// | Same object/array reference | Component re-render         | Component re-render skipped |

//! Angular Default vs OnPush ChangeDetection strategy
// | Feature                                        | Default Change Detection                  | OnPush Change Detection                                              |
// | ---------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
// | When change detection runs                     | Runs on **every** app event               | Runs only when **input reference changes** or internal events happen |
// | Performance                                    | Slower (checks all components frequently) | Faster (checks limited components only)                              |
// | Frequency of component re-render               | Frequent                                  | Limited, only when necessary                                         |
// | Detects changes inside component               | Yes                                       | Yes                                                                  |
// | Detects changes from parent/sibling components | Yes                                       | No, unless input reference changes                                   |
// | Best use case                                  | Small/simple apps                         | Large apps, apps with immutable data                                 |
}
