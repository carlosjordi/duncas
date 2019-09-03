import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Gargoyle extends Monsters{

    type = 'Gargola'
    strength = 5;
    dexterity = 5;
    perception = 5;
    hp = 100;
    minimunDamage = 6;
    maximunDamage = 12;
    experience = 380;
    gold = 140;
    item = new BigPotion
}