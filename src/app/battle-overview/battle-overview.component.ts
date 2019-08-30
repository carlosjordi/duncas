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

  defeatMessage: string

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.monsterKilled()
    this.heroKilled()
  }

  monsterKilled(){
    if(this.heroWon)
      this.monsterMessage = ''
  }

  heroKilled(){
    if (this.monsterWon)
      this.defeatMessage = 'Caes bruscamente contra el piso'
  }

}
