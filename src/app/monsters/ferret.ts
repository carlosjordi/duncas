import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Ferret extends Monsters{

    type = 'Caballero Ferret'
    strength = 6;
    dexterity = 7;
    perception = 6;
    hp = 110;
    minimunDamage = 9;
    maximunDamage = 14;
    experience = 800;
    gold = 200;
    item = new BigPotion
}