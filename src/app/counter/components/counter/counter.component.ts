import { Component } from "@angular/core";
import {AppComponent} from "../../../app.component";


@Component({
  selector: 'app-counter',
  template: `

  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
  standalone: false,
})
export class CounterComponent {
  public counter: number = 30;

  increaseBy( value:number ): void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 30;
  }


}
