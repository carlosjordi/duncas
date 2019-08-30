import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Weapon } from '../weapon';
import { Monsters } from '../monsters/monsters';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-dungeon-two',
  templateUrl: './dungeon-two.component.html',
  styleUrls: ['./dungeon-two.component.css']
})
export class DungeonTwoComponent implements OnInit {

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
    this.getOgre()
  }

  getOgre(){
    this.monster = this.monsterService.generateOgre()
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
