import { Monsters } from './monsters';
import { SmallPotion } from '../items/smallPotion';

export class Rebeld extends Monsters{

    type = 'Ciudadano Rebelde'
    strength = 2;
    dexterity = 2;
    perception = 2;
    hp = 20;
    minimunDamage = 2;
    maximunDamage = 3;
    experience = 100;
    gold = 50;
    item = null
}