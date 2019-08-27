import { Weapon } from './weapon';

export class Sword extends Weapon{

    type = 'Espada'
    damage = '2-7'
    minimumDamage: number = 2
    maximumDamage: number = 7
    skill: string = 'Corte'
    description: string = 'Causa daño adicional al herir gravemente al enemigo'
}