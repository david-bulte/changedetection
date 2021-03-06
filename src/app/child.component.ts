import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>child w/ChangeDetection.Default</h3>
    count = {{count?.value}}
    <button (click)="addByMutate()">add by mutate</button>
    <button (click)="addByMutateInTimeout()">add by mutate in timeout</button>
    <button (click)="addByNewRef()">add by new ref</button>
    <button (click)="addByNewRefInTimeout()">add by new ref in timeout</button>
    <button (click)="triggerChangeDetection()">just trigger change detection</button>
    <div>{{log}}</div>
  `
})
export class ChildComponent implements OnInit {

  @Input() count;

  constructor() { }

  ngOnInit() {
  }

  get log() {
    const log = 'checking : ' + new Date();
    console.log('child log', log);
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
