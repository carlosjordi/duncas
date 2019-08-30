import { Component, OnInit, Input } from '@angular/core';
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
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
  }

  useItem(item: Item){
    this.heroService.useItem(item)
  }

}
