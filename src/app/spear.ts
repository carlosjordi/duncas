import { Weapon } from './weapon';

export class Spear extends Weapon{

    type = 'Lanza'
    damage = '4-19'
    minimumDamage: number = 4
    maximumDamage: number = 19
    skill: string = 'Muy pesada'
    description: string = 'Chance extra de fallar el ataque'
}