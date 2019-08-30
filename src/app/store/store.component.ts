import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Item } from '../items/item';
import { SmallPotion } from '../items/smallPotion';
import { BigPotion } from '../items/bigPotion';
import { Hero } from '../hero';
import { Weapon } from '../weapon';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() hero: Hero
  @Input() weapon: Weapon

  smallPotion: Item = new SmallPotion
  bigPotion: Item = new BigPotion

  itemsInStore: Item[] = []
  message: string = ''
  @Output() nextDungeonEmitter = new EventEmitter<boolean>()

  nextDungeon: boolean

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.putItemsInStore()
  }

  putItemsInStore() {
    this.itemsInStore.push(this.smallPotion)
    this.itemsInStore.push(this.bigPotion)
  }

  buyItem(item: Item) {
    this.messageNotEnoughGold(item)
    this.heroService.buyItem(item)
  }

  private messageNotEnoughGold(item: Item) {
    if (this.hero.gold < item.price)
      this.message = 'No cuentas con suficiente oro'
    else
      this.message = ''
  }

  continueToNextDungeon(){
    this.nextDungeonEmitter.emit(true)
  }

}
