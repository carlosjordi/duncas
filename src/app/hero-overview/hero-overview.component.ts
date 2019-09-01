import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { Weapon } from '../weapon';
import { HeroService } from '../hero.service';
import { Monsters } from '../monsters/monsters';
import { MonsterService } from '../monster.service';
import { WeaponService } from '../weapon.service';

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
  pocketText: string = 'Bolsa'
  pocketState: boolean = false
  @Output() pocketStateEmitter = new EventEmitter<boolean>()

  constructor(
    private heroService: HeroService,
    private monsterService: MonsterService,
    private weaponService: WeaponService
  ) { }

  ngOnInit() {
  }

  heroAttack(hero: Hero, weapon: Weapon): void {

    if (this.pocketState)
      this.closePocket()

    // hero part
    if (this.heroService.heroAttack(hero, this.monster)) {
      this.damage = this.heroService.heroDamage(hero, weapon)
      this.message = `${hero.name} acierta y realiza ${this.damage} de daño`
      //weapon skill
      if (this.weaponService.skillActivated(weapon)) {
        if (this.skillEffect() === true) // spear
        {
          this.message = `${hero.name} pierde el equilibrio al agitar la lanza y falla el ataque`
        }
        else if (this.skillEffect()) // sword | bow
        {
          if (weapon.type == 'Arco') {
            this.message = `${hero.name} logra apuntar a la cabeza logrando un crítico de ${this.damage * 2}!`
            this.monsterService.receiveDamage(this.monster, this.damage * 2)
          }
          else {
            this.message = `${hero.name} realiza un corte letal causando daño extra ${this.damage + +this.skillEffect()}!!`
            this.monsterService.receiveDamage(this.monster, this.damage + +this.skillEffect())
          }
        }
      } else { // skill not activated
        this.monsterService.receiveDamage(this.monster, this.damage)
      }
      this.emmitHeroMessage(this.message) // envio el mensaje al papi para el battle overview

      // here we check if combat finishes cuz of monster dying
      if (this.monsterService.checkIfMonsterDied(this.monster)) {
        this.heroWonEmitter.emit(true) //check later if dmg of monster still applied even tho i 'killed it'
        return;
      }
    } else {
      this.message = `${hero.name} ha fallado el ataque`
      this.emmitHeroMessage(this.message) // envio el mensaje al papi para el battle overview
    }

    // monster part
    this.monsterAttack()
  }

  monsterAttack(){
    if (this.monsterService.monsterAttack(this.monster, this.hero)) {
      this.damage = this.monsterService.monsterDamage(this.monster)
      this.message = `${this.monster.type} acierta y realiza ${this.damage} de daño`
      this.heroService.receiveDamage(this.damage)
      this.emmitMonsterMessage(this.message)

      // here we check if hero dies
      if (this.heroService.checkIfHeroDied()){
        this.monsterWonEmitter.emit(true)
        return;
      }
    } else {
      this.message = `${this.monster.type} ha fallado el ataque`
      this.emmitMonsterMessage(this.message)
    }
  }

  private emmitHeroMessage(message: string) {
    this.heroMessageEmmiter.emit(message)
  }

  private emmitMonsterMessage(message: string) {
    this.monsterMessageEmmiter.emit(message)
  }

  private skillEffect() {
    return this.weaponService.skillEffect(this.weapon, this.hero, this.damage)
  }

  changePocketState() {
    this.changePocketText()
    this.sendPocketState()
  }

  private changePocketText() {
    if (this.pocketText == 'Bolsa')
      this.pocketText = 'Cerrar'
    else if (this.pocketText == 'Cerrar')
      this.pocketText = 'Bolsa'
  }

  private sendPocketState(){
    this.pocketState = !this.pocketState
    this.pocketStateEmitter.emit(this.pocketState)
  }

  private closePocket(){
    this.pocketText = 'Bolsa'
    this.pocketStateEmitter.emit(false)
    this.pocketState = !this.pocketState
  }

}
