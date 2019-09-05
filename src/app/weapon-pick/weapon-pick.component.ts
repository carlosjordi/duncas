import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Weapon } from '../weapon';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-weapon-pick',
  templateUrl: './weapon-pick.component.html',
  styleUrls: ['./weapon-pick.component.css']
})
export class WeaponPickComponent implements OnInit {

  @Input() hero:Hero
  sword: Weapon
  bow: Weapon
  spear: Weapon
  dagger: Weapon
  weapons: Weapon[] = []
  selectedWeapon: Weapon
  weaponPicked: boolean = false

  constructor(
    private weaponService: WeaponService
  ) { }

  ngOnInit() {
    this.putSword()
    this.putBow()
    this.putSpear()
    this.putDagger()
  }

  private putSword(){
    this.sword = this.weaponService.getSword()
    this.weapons.push(this.sword)
  }

  private putBow(){
    this.bow = this.weaponService.getBow()
    this.weapons.push(this.bow)
  }

  private putSpear(){
    this.spear = this.weaponService.getSpear()
    this.weapons.push(this.spear)
  }

  private putDagger(){
    this.dagger= this.weaponService.getDagger()
    this.weapons.push(this.dagger)
  }

  selectWeapon(weapon: Weapon){
    this.hero.weapon = weapon
    this.selectedWeapon = weapon
    this.weaponPicked = true
  }

}
