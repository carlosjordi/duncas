import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-creation',
  templateUrl: './hero-creation.component.html',
  styleUrls: ['./hero-creation.component.css']
})
export class HeroCreationComponent implements OnInit {

  hero: Hero = new Hero
  message: string = ''
  created: boolean = false

  // minimun stats
  MIN_HP = this.hero.hp
  MIN_STRENGTH = this.hero.strength
  MIN_DEXTERITY = this.hero.dexterity
  MIN_PERCEPTION = this.hero.perception

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
    this.heroService.strengthDown(this.MIN_STRENGTH)
    this.getHitpoints()
  }

  dexterityUp(){
    this.heroService.dexterityUp()
  }

  dexterityDown(){
    this.heroService.dexterityDown(this.MIN_DEXTERITY)
  }

  perceptionUp(){
    this.heroService.perceptionUp()
  }

  perceptionDown(){
    this.heroService.perceptionDown(this.MIN_PERCEPTION)
  }

  hpUp(){
    this.heroService.hpUp()
    this.getHitpoints()
  }

  hpDown(){
    this.heroService.hpDown(this.MIN_HP)
    this.getHitpoints()
  }

  getHitpoints(){
    this.heroService.hitpoints()
  }

  confirmHero(){

    if (this.hero.name.trim() && this.hero.points == 0){
      this.created = true
    }

    if (!this.hero.name.trim()){
      this.message = 'No te olvides de tu nombre!'
    }
    else if (this.hero.points != 0){
      this.message = 'Utiliza todos tus puntos!'
    }
  }

}
