import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public count = 0;

  public change() {
    this.count++;
  }

  public changeData(newItem) {
    this.count = newItem;
  }

  setColor() {
    return this.count % 2 === 0 ? 'black' : 'red';
  }

}
