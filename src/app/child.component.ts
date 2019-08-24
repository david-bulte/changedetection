import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>child</h3>
    count = {{count?.value}}
    <button (click)="add()">add</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() count;

  constructor() { }

  ngOnInit() {
  }

  add() {
    // this.count.value = this.count.value + 1;
    // this.count = {value: this.count.value + 1};

    // setTimeout(() => {
    //   this.count.value = this.count.value + 1;
    // });
  }
}
