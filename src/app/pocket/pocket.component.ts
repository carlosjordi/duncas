import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Item } from '../items/item';

@Component({
  selector: 'app-pocket',
  templateUrl: './pocket.component.html',
  styleUrls: ['./pocket.component.css']
})
export class PocketComponent implements OnInit {

  @Input() hero: Hero
  @Output() potionUsedEmitter = new EventEmitter<boolean>()
  @Output() itemUsedEmitter = new EventEmitter<Item>()

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
  }

  useItem(item: Item){
    this.heroService.useItem(item)
    this.potionUsedEmitter.emit(true)
    this.itemUsedEmitter.emit(item)
  }

}
