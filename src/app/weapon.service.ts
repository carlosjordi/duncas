import { Injectable } from '@angular/core';
import { Weapon } from './weapon';
import { Sword } from './sword';
import { Bow } from './bow';
import { Spear } from './spear';
import { Hero } from './hero';
import { Dagger } from './dagger';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  private CUT_CHANCE = 30 // sword
  private CUT_DAMAGE = 50
  private HEADSHOT_CHANCE = 15 // bow
  private MISSING_CHANCE = 15 // spear

  constructor(
    private heroService: HeroService
  ) { }

  getSword(){
    return new Sword
  }

  getBow(){
    return new Bow
  }

  getSpear(){
    return new Spear
  }

  getDagger(){
    return new Dagger
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
    return this.skillChance(this.CUT_CHANCE, this.heroService.createHero())
  }

  private bowSkill(): boolean{
    return this.skillChance(this.HEADSHOT_CHANCE, this.heroService.createHero())
  }

  private spearSkill(): boolean{
    return this.skillChance(this.MISSING_CHANCE, this.heroService.createHero())
  }

  // adding new capability for bow 05 - 09 - 19
  private skillChance(chance: number, hero: Hero): boolean{

    if (hero.weapon.type === 'Arco'){
      chance += 3.5 * hero.dexterity
    } else if (hero.weapon.type === 'Lanza'){
      chance -= 1.5 * hero.strength
    }

    return Math.random() * 100 <= chance
  }

  // effects

  skillEffect(weapon: Weapon, dmg: number)
  {
    switch (weapon.type)
    {
      case "Espada":
        return this.swordSkillEffect(dmg, this.heroService.createHero())
      case "Arco":
        return this.bowSkillEffect(dmg)
      case "Lanza":
        return true;
    }
  }

  private swordSkillEffect(dmg: number, hero: Hero){
    return dmg * (this.CUT_DAMAGE + hero.strength * 4) / 100
  }

  private bowSkillEffect(dmg: number){
    return dmg * 2
  }

}
