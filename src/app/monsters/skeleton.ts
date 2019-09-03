import { Monsters } from './monsters';

export class Skeleton extends Monsters{

    type = 'Esqueleto'
    strength = 2;
    dexterity = 3;
    perception = 2;
    hp = 30;
    minimunDamage = 3;
    maximunDamage = 4;
    experience = 160;
    gold = 70;
    item = null
}