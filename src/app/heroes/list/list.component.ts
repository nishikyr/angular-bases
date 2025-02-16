import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'She hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();

  }
}
