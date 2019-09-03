import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Wizard extends Monsters{

    type = 'Hechicero'
    strength = 3;
    dexterity = 10;
    perception = 3;
    hp = 50;
    minimunDamage = 8;
    maximunDamage = 15;
    experience = 450;
    gold = 200;
    item = new BigPotion
}