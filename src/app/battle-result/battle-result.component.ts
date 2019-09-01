import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { Monsters } from '../monsters/monsters';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-battle-result',
  templateUrl: './battle-result.component.html',
  styleUrls: ['./battle-result.component.css']
})
export class BattleResultComponent implements OnInit {

  @Input() hero: Hero
  @Input() monster: Monsters
  @Input() heroWon: boolean
  @Input() monsterWon: boolean
  @Output() nextDungeonEmitter = new EventEmitter<boolean>()

  levelUp: boolean = false
  HP_HP = 5
  HP_STRENGHT = 2

  // minimun stats
  MIN_HP: number
  MIN_STRENGTH: number
  MIN_DEXTERITY: number
  MIN_PERCEPTION: number

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.rewardExperience()
    this.rewardGold()
    this.initMinimumStats()
    this.checkIfHeroLevelsUp()
  }

  initMinimumStats() {
    this.MIN_HP = this.hero.hp
    this.MIN_STRENGTH = this.hero.strength
    this.MIN_DEXTERITY = this.hero.dexterity
    this.MIN_PERCEPTION = this.hero.perception
  }

  continueToNextDungeon() {
    this.nextDungeonEmitter.emit(true)
  }

  rewardExperience() {
    this.heroService.rewardExperience(this.monster)
  }

  rewardGold() {
    this.heroService.rewardGold(this.monster)
  }

  // for leveling up

  checkIfHeroLevelsUp() {
    if (this.levelUp = this.heroService.checkIfLevelUp())
      this.heroService.increaseHeroLevel()
  }

  strengthUp() {
    if (this.hero.points > 0) {
      this.heroService.strengthUp()
      this.hero.hitpoints += this.HP_STRENGHT
    }
  }

  strengthDown() {
    if (this.hero.strength > this.MIN_STRENGTH){
      this.heroService.strengthDown(this.MIN_STRENGTH)
      this.hero.hitpoints -= this.HP_STRENGHT
    }
  }

  dexterityUp() {
    this.heroService.dexterityUp()
  }

  dexterityDown() {
    this.heroService.dexterityDown(this.MIN_DEXTERITY)
  }

  perceptionUp() {
    this.heroService.perceptionUp()
  }

  perceptionDown() {
    this.heroService.perceptionDown(this.MIN_PERCEPTION)
  }

  hpUp() {
    if (this.hero.points > 0) {
      this.heroService.hpUp()
      this.hero.hitpoints += this.HP_HP
    }
  }

  hpDown() {
    if (this.hero.hp > this.MIN_HP){
      this.heroService.hpDown(this.MIN_HP)
      this.hero.hitpoints -= this.HP_HP
    }
  }

}
