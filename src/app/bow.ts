import { Weapon } from './weapon';

export class Bow extends Weapon{

    type = 'Arco'
    damage = '3-10'
    minimumDamage: number = 3
    maximumDamage: number = 10
    skill: string = 'En la mira!'
    description: string = '15% chance de causar doble daño';
    icon = '🏹';
    skillBonusDescription = 'Cada punto en destreza incrementa 3.5% la chance de EN LA MIRA'

}