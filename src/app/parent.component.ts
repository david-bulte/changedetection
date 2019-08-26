import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>parent w/ChangeDetection.Default</h3>
    count = {{count?.value}}
    <button (click)="addByMutate()">add by mutate</button>
    <button (click)="addByMutateInTimeout()">add by mutate in timeout</button>
    <button (click)="addByNewRef()">add by new ref</button>
    <button (click)="addByNewRefInTimeout()">add by new ref in timeout</button>
    <button (click)="triggerChangeDetection()">just trigger change detection</button>
    <div>{{log}}</div>

    <hr>
    <app-child [count]="count"></app-child>
  `
})
export class ParentComponent implements OnInit {

  count = {value: 1};

  constructor() { }

  ngOnInit() {
  }

  get log() {
    const log = 'checking : ' + new Date();
    console.log('parent log', log);
    return log;
  }

  addByMutate() {
    this.count.value = this.count.value + 1;
  }

  addByNewRef() {
    this.count = {value: this.count.value + 1};
  }

  addByMutateInTimeout() {
    console.log('clicked');
    setTimeout(() => {
      console.log('executing callback');
      this.addByMutate();
    }, 1000);
  }

  addByNewRefInTimeout() {
    console.log('clicked');
    setTimeout(() => {
      console.log('executing callback');
      this.addByNewRef();
    }, 1000);
  }

  triggerChangeDetection() {
    return true;
  }

}

export interface Count {
  value: number;
}
