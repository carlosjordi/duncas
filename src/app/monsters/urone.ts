import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Urone extends Monsters{

    type = 'Lord Urone'
    strength = 7;
    dexterity = 8;
    perception = 8;
    hp = 150;
    minimunDamage = 10;
    maximunDamage = 20;
    experience = 1000;
    gold = 250;
    item = new BigPotion
}