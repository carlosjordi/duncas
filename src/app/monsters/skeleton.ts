import { Monsters } from './monsters';

export class Skeleton extends Monsters{

    type = 'Esqueleto'
    strength = 2;
    dexterity = 2;
    perception = 2;
    hp = 20;
    minimunDamage = 2;
    maximunDamage = 3;
    experience = 100;
    gold = 50;
}