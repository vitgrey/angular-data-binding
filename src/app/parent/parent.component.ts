import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public count: number = 0

  public change() {
    this.count++
  }

  onChange(newItem) {
    this.count = newItem
  }

}
