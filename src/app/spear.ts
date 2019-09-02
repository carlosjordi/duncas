import { Weapon } from './weapon';

export class Spear extends Weapon{

    type = 'Lanza'
    damage = '1-17'
    minimumDamage: number = 1
    maximumDamage: number = 17
    skill: string = 'Muy pesada'
    description: string = '15% chande de fallar el ataque'
}