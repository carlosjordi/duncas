import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Ferret extends Monsters{

    type = 'Caballero Ferret'
    strength = 6;
    dexterity = 8;
    perception = 6;
    hp = 120;
    minimunDamage = 9;
    maximunDamage = 15;
    experience = 800;
    gold = 200;
    item = new BigPotion
}