import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() onChange = new EventEmitter<boolean>()
  
  public change(state: any) {
    this.onChange.emit(state)
  }

}
