import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Urone extends Monsters{

    type = 'Lord Urone'
    strength = 7;
    dexterity = 8;
    perception = 7;
    hp = 140;
    minimunDamage = 10;
    maximunDamage = 18;
    experience = 1000;
    gold = 250;
    item = new BigPotion
}