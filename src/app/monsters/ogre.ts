import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Ogre extends Monsters{

    type = 'Ogro'
    strength = 5;
    dexterity = 4;
    perception = 3;
    hp = 70;
    minimunDamage = 5;
    maximunDamage = 10;
    experience = 250;
    gold = 120;
    item = new BigPotion
}