import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

    public clicks: number = 0

    public change() {
      this.clicks++
    }

    public onChange(state) {
      if(state === false) this.clicks--
    }
}
