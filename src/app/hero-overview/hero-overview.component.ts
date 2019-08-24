import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { Weapon } from '../weapon';
import { HeroService } from '../hero.service';
import { Monsters } from '../monsters/monsters';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-hero-overview',
  templateUrl: './hero-overview.component.html',
  styleUrls: ['./hero-overview.component.css']
})
export class HeroOverviewComponent implements OnInit {

  @Input() hero: Hero
  @Input() monster: Monsters
  @Input() weapon: Weapon
  damage: number
  message: string = ''
  @Output() heroMessageEmmiter = new EventEmitter<string>()
  @Output() monsterMessageEmmiter = new EventEmitter<string>()
  //para el resultado del combate
  @Output() heroWonEmitter = new EventEmitter<boolean>()
  @Output() monsterWonEmitter = new EventEmitter<boolean>()

  constructor(
    private heroService: HeroService,
    private monsterService: MonsterService
  ) { }

  ngOnInit() {
  }

  heroAttack(hero: Hero, weapon: Weapon): void{

    // hero part
    if (this.heroService.heroAttack(hero, this.monster)){
      this.damage = this.heroService.heroDamage(hero, weapon)
      this.message = `${hero.name} acierta y realiza ${this.damage} de daño`
      this.monsterService.receiveDamage(this.monster, this.damage)
      // here we check if combat finishes cuz of monster dying
      if( this.monsterService.checkIfMonsterDied(this.monster))
      {
        this.heroWonEmitter.emit(true) //check later if dmg of monster still applied even tho i 'killed it'
        return;
      }
    } else{
      this.message = `${hero.name} ha fallado el ataque`
    }
    this.emmitHeroMessage(this.message) // envio el mensaje al papi para el battle overview
    
    // monster part
    if (this.monsterService.monsterAttack(this.monster, this.hero)){
      this.damage = this.monsterService.monsterDamage(this.monster)
      this.message = `${this.monster.type} acierta y realiza ${this.damage} de daño`
      this.heroService.receiveDamage(this.damage)
    }else{
      this.message = `${this.monster.type} ha fallado el ataque`
    }
    this.emmitMonsterMessage(this.message)
  }

  private emmitHeroMessage(message: string){
    this.heroMessageEmmiter.emit(message)
  }

  private emmitMonsterMessage(message: string){
    this.monsterMessageEmmiter.emit(message)
  }

}
