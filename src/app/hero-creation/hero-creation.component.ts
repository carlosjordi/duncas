import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-creation',
  templateUrl: './hero-creation.component.html',
  styleUrls: ['./hero-creation.component.css']
})
export class HeroCreationComponent implements OnInit {

  hero: Hero
  message: string = ''

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.createHero()
    this.getHitpoints()
  }

  createHero(){
    this.hero = this.heroService.createHero()
  }

  /* Cambios de estadisticas */

  strengthUp(){
    this.heroService.strengthUp()
    this.getHitpoints()
  }

  strengthDown(){
    this.heroService.strengthDown()
    this.getHitpoints()
  }

  dexterityUp(){
    this.heroService.dexterityUp()
  }

  dexterityDown(){
    this.heroService.dexterityDown()
  }

  perceptionUp(){
    this.heroService.perceptionUp()
  }

  perceptionDown(){
    this.heroService.perceptionDown()
  }

  hpUp(){
    this.heroService.hpUp()
    this.getHitpoints()
  }

  hpDown(){
    this.heroService.hpDown()
    this.getHitpoints()
  }

  getHitpoints(){
    this.heroService.hitpoints()
  }

  confirmHero(){
    if (!this.hero.name.trim()){
      this.message = 'No te olvides de tu nombre!'
    }
    else if (this.hero.points != 0){
      this.message = 'Utiliza todos tus puntos!'
    }
  }

}
