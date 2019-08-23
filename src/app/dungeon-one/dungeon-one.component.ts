import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../weapon';
import { Hero } from '../hero';

@Component({
  selector: 'app-dungeon-one',
  templateUrl: './dungeon-one.component.html',
  styleUrls: ['./dungeon-one.component.css']
})
export class DungeonOneComponent implements OnInit {

  @Input() hero: Hero
  @Input() weapon: Weapon

  constructor() { }

  ngOnInit() {
    console.log(this.hero)
    console.log(this.weapon)
  }

}
