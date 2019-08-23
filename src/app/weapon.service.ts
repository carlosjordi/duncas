import { Injectable } from '@angular/core';
import { Weapon } from './weapon';
import { Sword } from './sword';
import { Bow } from './bow';
import { Spear } from './spear';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  weapon: Weapon

  constructor() { }

  getSword(){
    return new Sword
  }

  getBow(){
    return new Bow
  }

  getSpear(){
    return new Spear
  }
}
