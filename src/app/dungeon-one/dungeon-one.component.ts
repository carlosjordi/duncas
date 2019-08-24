import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../weapon';
import { Hero } from '../hero';
import { MonsterService } from '../monster.service';
import { Monsters } from '../monsters/monsters';

@Component({
  selector: 'app-dungeon-one',
  templateUrl: './dungeon-one.component.html',
  styleUrls: ['./dungeon-one.component.css']
})
export class DungeonOneComponent implements OnInit {

  @Input() hero: Hero
  @Input() weapon: Weapon
  monster: Monsters
  heroMessage: string //mensaje que viene del heroe overview para mandarlo al battle overview
  monsterMessage: string //mensaje de la acción del mounstruo
  // para mostrar el resultado del combate
  heroWon: boolean
  monsterWon: boolean

  constructor(
    private monsterService: MonsterService
  ) { }

  ngOnInit() {
    this.getSkeleton()
  }

  getSkeleton(){
    this.monster = this.monsterService.generateSkeleton()
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

}
