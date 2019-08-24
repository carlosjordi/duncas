import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-battle-overview',
  templateUrl: './battle-overview.component.html',
  styleUrls: ['./battle-overview.component.css']
})
export class BattleOverviewComponent implements OnInit {

  @Input() heroMessage: string
  @Input() monsterMessage: string

  constructor() { }

  ngOnInit() {
  }

}
