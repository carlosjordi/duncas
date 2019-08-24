import { Component, OnInit, Input } from '@angular/core';
import { Monsters } from '../monsters/monsters';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-monster-overview',
  templateUrl: './monster-overview.component.html',
  styleUrls: ['./monster-overview.component.css']
})
export class MonsterOverviewComponent implements OnInit {

  @Input() monster: Monsters

  constructor(
    private monsterService: MonsterService
  ) { }

  ngOnInit() {
  }

}
