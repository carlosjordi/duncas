import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Squire extends Monsters{

    type = 'Escudero'
    strength = 3;
    dexterity = 3;
    perception = 4;
    hp = 45;
    minimunDamage = 4;
    maximunDamage = 6;
    experience = 200;
    gold = 100;
    item = new BigPotion
}