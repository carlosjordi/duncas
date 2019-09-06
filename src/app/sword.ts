import { Weapon } from './weapon';

export class Sword extends Weapon{

    type = 'Espada'
    damage = '2-8'
    minimumDamage: number = 2
    maximumDamage: number = 8
    skill: string = 'Corte'
    description: string = '30% chance causar 50% daño extra'
    icon = '⚔'
    skillBonusDescription = 'Cada punto en fuerza incrementa el daño extra de CORTE'
}