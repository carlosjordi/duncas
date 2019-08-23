import { Weapon } from './weapon';

export class Sword extends Weapon{

    type = 'Espada'
    damage = '2-7'
    skill: string = 'Desangre'
    description: string = 'Chance de herir gravemente y causar daño continuo'
}