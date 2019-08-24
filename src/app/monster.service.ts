import { Injectable } from '@angular/core';
import { Monsters } from './monsters/monsters';
import { Skeleton } from './monsters/skeleton';
import { Ogre } from './monsters/ogre';
import { Darknight } from './monsters/darknight';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monster: Monsters

  constructor() { }

  generateSkeleton(): Skeleton{
    return new Skeleton
  }

  generateOgre(): Ogre{
    return new Ogre
  }

  generateDarknight(): Darknight{
    return new Darknight
  }

  // checka si el monstruo realiza el ataque o falla
  monsterAttack(monster: Monsters, hero: Hero): boolean{

    let dexterity = monster.dexterity;
    let perception = hero.perception;
    let result = dexterity - perception

    let attackChance = this.attackChance(result)

    return this.calculateIfAttacked(attackChance);
  }

  private attackChance(difference: number): number{
    return 50 + (difference * 7.5)
  }

  private calculateIfAttacked(attackChance: number): boolean{

    if (Math.random() * 100 <= attackChance)
      return true;
    return false;
  }

  // daño del monstruo
  monsterDamage(monster: Monsters): number{

    let min = monster.minimunDamage
    let max = monster.maximunDamage

    return this.calculateDamage(min, max);
  }

  private calculateDamage(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min)) + min;
  }

  receiveDamage(monster: Monsters, damageTaken: number): void{
    monster.hp -= damageTaken
  }

  checkIfMonsterDied(monster: Monsters): boolean{
    return monster.hp <= 0
  }
}
