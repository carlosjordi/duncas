import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Ogre extends Monsters{

    type = 'Ogro'
    strength = 5;
    dexterity = 3;
    perception = 2;
    hp = 35;
    minimunDamage = 5;
    maximunDamage = 10;
    experience = 180;
    gold = 100;
    item = new BigPotion
}