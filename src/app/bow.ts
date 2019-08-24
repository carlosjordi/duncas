import { Weapon } from './weapon';

export class Bow extends Weapon{

    type = 'Arco'
    damage = '4-9'
    minimumDamage: number = 4
    maximumDamage: number = 9
    skill: string = 'En la mira!'
    description: string = 'Mínima chance de dar en la cabeza y causar doble daño'
}