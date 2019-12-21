import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() count: number
  @Output() onChange = new EventEmitter<number>()

  public change() {
    this.onChange.emit(--this.count)
  }

}
