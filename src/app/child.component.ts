import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>child</h3>
    count = {{count?.value}}
    <button (click)="addByMutate()">add by mutate</button>
    <button (click)="addByNewRef()">add by new ref</button>
    <button (click)="addByMutateInTimeout()">add by mutate in timeout</button>
    <button (click)="addByNewRefInTimeout()">add by new ref in timeout</button>
    <div>{{log}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() count;

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
