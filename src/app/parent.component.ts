import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>parent</h3>
    count = {{count?.value}}
    <button (click)="addByMutate()">add by mutate</button>
    <button (click)="addByNewRef()">add by new ref</button>
    <button (click)="addByMutateInTimeout()">add by mutate in timeout</button>
    <button (click)="addByNewRefInTimeout()">add by new ref in timeout</button>
    <div>{{log}}</div>

    <hr>
    <app-child [count]="count"></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  count = {value: 1};

  constructor() { }

  ngOnInit() {
  }

  get log() {
    return 'checking : ' + new Date();
  }

  addByMutate() {
    this.count.value = this.count.value + 1;
  }

  addByNewRef() {
    this.count = {value: this.count.value + 1};
  }

  addByMutateInTimeout() {
    setTimeout(() => {
      this.count.value = this.count.value + 1;
    });
  }

  addByNewRefInTimeout() {
    setTimeout(() => {
      this.count = {value: this.count.value + 1};
    });
  }

}

export interface Count {
  value: number;
}
