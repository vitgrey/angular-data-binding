import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() count: number;
  @Output() changeData = new EventEmitter<number>();

  public change() {
    this.changeData.emit(--this.count);
  }

}
