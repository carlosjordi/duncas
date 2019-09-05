import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../items/item';
import { MonsterService } from '../monster.service';
import { Monsters } from '../monsters/monsters';
import { Hero } from '../hero';
import { Weapon } from '../weapon';

@Component({
  selector: 'app-dungeon-nine',
  templateUrl: './dungeon-nine.component.html',
  styleUrls: ['./dungeon-nine.component.css']
})
export class DungeonNineComponent implements OnInit {

  @Input() hero: Hero
  @Input() weapon: Weapon

  monster: Monsters

  heroMessage: string //mensaje que viene del heroe overview para mandarlo al battle overview
  monsterMessage: string //mensaje de la acción del mounstruo
  // para mostrar el resultado del combate
  heroWon: boolean
  monsterWon: boolean

  nextStore: boolean
  openStore: boolean = true
  // pocket
  pocketState: boolean
  nextDungeon: boolean
  //potions
  potionUsed: boolean
  potionConsumed: Item

  actionTaken: boolean = false

  constructor(
    private monsterService: MonsterService
  ) { }

  ngOnInit() {
    this.getMonster()
  }

  getMonster(){
    this.monster = this.monsterService.generateFerret()
  }

  receiveMessage(message: string){
    this.heroMessage = message
  }

  receiveMonsterMessage(message: string){
    this.monsterMessage = message
  }

  heroWonShowResult(won: boolean){
    this.heroWon = won
  }

  monsterWonShowResult(won: boolean){
    this.monsterWon = won
  }

  continueToNextStore(advance: boolean){
    this.nextStore = advance
  }

  changePocketState(change: boolean){
    this.pocketState = change
  }

  continueToNextDungeon(advance: boolean){
    this.nextDungeon = advance
    this.openStore = false
  }

  potionHasBeenUsed(used: boolean){
    this.potionUsed = used
  }

  exactPotionUsed(itemUsed: Item){
    this.potionConsumed = itemUsed
  }

  actionTakenEvent(action: boolean){
    this.actionTaken = action
  }

}
