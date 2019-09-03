import { Monsters } from './monsters';
import { BigPotion } from '../items/bigPotion';

export class Griffin extends Monsters{

    type = 'Grifo'
    strength = 4;
    dexterity = 4;
    perception = 4;
    hp = 65;
    minimunDamage = 4;
    maximunDamage = 8;
    experience = 300;
    gold = 130;
    item = new BigPotion
}