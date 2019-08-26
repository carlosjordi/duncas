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

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.rewardExperience()
    this.rewardGold()
  }

  continueToNextDungeon(){
    this.nextDungeonEmitter.emit(true)
  }

  rewardExperience(){
    this.heroService.rewardExperience(this.monster)
  }

  rewardGold(){
    this.heroService.rewardGold(this.monster)
  }

}
