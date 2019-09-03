import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Darknight extends Monsters{

    type = 'Caballero Oscuro'
    strength = 6;
    dexterity = 6;
    perception = 6;
    hp = 100;
    minimunDamage = 8;
    maximunDamage = 12;
    experience = 650;
    gold = 210;
    item = new BigPotion
}