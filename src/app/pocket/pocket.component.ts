import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Item } from '../items/item';
import { Monsters } from '../monsters/monsters';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-pocket',
  templateUrl: './pocket.component.html',
  styleUrls: ['./pocket.component.css']
})
export class PocketComponent implements OnInit {

  @Input() hero: Hero
  @Input() monster: Monsters
  @Output() potionUsedEmitter = new EventEmitter<boolean>()
  @Output() itemUsedEmitter = new EventEmitter<Item>()
  @Output() monsterMessageEmmiter = new EventEmitter<string>()
  @Output() heroMessageEmmiter = new EventEmitter<string>()
  @Output() monsterWonEmitter = new EventEmitter<boolean>()
  @Output() actionTakenEmitter = new EventEmitter<boolean>()

  damage: number
  message: string

  constructor(
    private heroService: HeroService,
    private monsterService: MonsterService
  ) { }

  ngOnInit() {
  }

  useItem(item: Item){
    this.heroService.useItem(item)
    this.potionUsedEmitter.emit(true)
    this.itemUsedEmitter.emit(item)
    this.actionTaken()
    this.emmitHeroMessage(`${this.hero.name} usa una ${item.name} y se cura ${item.effect * this.heroService.maxHp()} de salud`)
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

  private emmitMonsterMessage(message: string) {
    this.monsterMessageEmmiter.emit(message)
  }

  private emmitHeroMessage(message: string) {
    this.heroMessageEmmiter.emit(message)
  }

  private actionTaken(){
    this.actionTakenEmitter.emit(true)
  }

}
