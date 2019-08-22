import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero: Hero = new Hero

  constructor() { }

  createHero(): Hero {
    return this.hero
  }

  strengthUp(): void {
    if (this.checkPoints()) {
      this.hero.strength += 1
      this.decreasePoints()
    }
  }

  strengthDown(): void{
    if (this.hero.strength > 1){
      this.hero.strength -= 1
      this.increasePoints()
    }
  }

  dexterityUp(): void {
    if (this.checkPoints()) {
      this.hero.dexterity += 1
      this.decreasePoints()
    }
  }

  dexterityDown(): void{
    if (this.hero.dexterity > 1){
      this.hero.dexterity -= 1
      this.increasePoints()
    }
  }

  perceptionUp(): void {
    if (this.checkPoints()) {
      this.hero.perception += 1
      this.decreasePoints()
    }
  }

  perceptionDown(): void{
    if (this.hero.perception > 1){
      this.hero.perception -= 1
      this.increasePoints()
    }
  }

  hpUp(): void {
    if (this.checkPoints()) {
      this.hero.hp += 1
      this.decreasePoints()
    }
  }

  hpDown(): void{
    if (this.hero.hp > 2){
      this.hero.hp -= 1
      this.increasePoints()
    }
  }

  hitpoints(): void {
    this.hero.hitpoints = this.hero.hp * 4 + this.hero.strength * 2 + 10
  }

  decreasePoints(): void {
    this.hero.points -= 1
  }

  increasePoints(): void{
    this.hero.points += 1
  }

  checkPoints() {
    if (this.hero.points > 0)
      return true
  }

}
