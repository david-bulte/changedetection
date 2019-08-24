import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>1</h3>
    count = {{count?.value}}
    <button (click)="add()">add</button>

    <hr>
    <app-child [count]="count"></app-child>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  count = {value: 1};

  constructor() { }

  ngOnInit() {
  }

  add() {
    // this.count.value = this.count.value + 1;
    // this.count = {value: this.count.value + 1};

    // changedetection is only run after dom event from inside this component or child component
    setTimeout(() => {
      // this.count.value = this.count.value + 1;
      this.count = {value: this.count.value + 1};
    });
  }

}

export interface Count {
  value: number;
}
