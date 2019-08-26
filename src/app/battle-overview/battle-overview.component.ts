import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-battle-overview',
  templateUrl: './battle-overview.component.html',
  styleUrls: ['./battle-overview.component.css']
})
export class BattleOverviewComponent implements OnInit, OnChanges {

  @Input() heroMessage: string
  @Input() monsterMessage: string
  @Input() heroWon: boolean
  @Input() monsterWon: boolean

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.monsterKilled()
  }

  monsterKilled(){
    if(this.heroWon)
      this.monsterMessage = ''
  }

}
