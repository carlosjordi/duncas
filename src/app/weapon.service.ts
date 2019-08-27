import { Injectable } from '@angular/core';
import { Weapon } from './weapon';
import { Sword } from './sword';
import { Bow } from './bow';
import { Spear } from './spear';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  private BLEEDING_CHANCE = 20 // sword
  private BLEEDING_DAMAGE = 50
  private HEADSHOT_CHANCE = 5 // bow
  private MISSING_CHANCE = 10 // spear

  constructor() { }

  getSword(){
    return new Sword
  }

  getBow(){
    return new Bow
  }

  getSpear(){
    return new Spear
  }

  skillActivated(weapon: Weapon)
  {
    switch (weapon.type)
    {
      case "Espada":
        return this.swordSkill()
      case "Arco":
        return this.bowSkill()
      case "Lanza":
        return this.spearSkill()
    }
  }

  // chances

  private swordSkill(): boolean{
    return this.skillChance(this.BLEEDING_CHANCE)
  }

  private bowSkill(): boolean{
    return this.skillChance(this.HEADSHOT_CHANCE)
  }

  private spearSkill(): boolean{
    return this.skillChance(this.MISSING_CHANCE)
  }

  private skillChance(chance: number): boolean{
    return Math.random() * 100 <= chance
  }

  // effects

  skillEffect(weapon: Weapon, hero: Hero, dmg: number)
  {
    switch (weapon.type)
    {
      case "Espada":
        return this.swordSkillEffect(hero)
      case "Arco":
        return this.bowSkillEffect(dmg)
      case "Lanza":
        return true;
    }
  }

  private swordSkillEffect(hero: Hero){
    return hero.strength * this.BLEEDING_DAMAGE / 100
  }

  private bowSkillEffect(dmg: number){
    return dmg * 2
  }

}
