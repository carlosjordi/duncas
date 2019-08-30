import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Weapon } from '../weapon';
import { Monsters } from '../monsters/monsters';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-dungeon-three',
  templateUrl: './dungeon-three.component.html',
  styleUrls: ['./dungeon-three.component.css']
})
export class DungeonThreeComponent implements OnInit {

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

  constructor(
    private monsterService: MonsterService
  ) { }

  ngOnInit() {
    this.getDarknight()
  }

  getDarknight(){
    this.monster = this.monsterService.generateDarknight()
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

}
