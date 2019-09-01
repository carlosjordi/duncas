import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Darknight extends Monsters{

    type = 'Caballero Oscuro'
    strength = 5;
    dexterity = 5;
    perception = 5;
    hp = 50;
    minimunDamage = 3;
    maximunDamage = 10;
    experience = 220;
    gold = 170;
    item = new BigPotion
}