import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  public constructor() {
    console.log('HeroComponent constructor');
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 100;
  }

  Reset(): void {
    //this.name = 'Ironman';
    this.age = 45;

    document.querySelectorAll('h1').forEach(element => {
      element.style.color = 'green';
    });
  }

}
