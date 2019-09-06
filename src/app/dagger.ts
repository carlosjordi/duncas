import { Weapon } from './weapon';

export class Dagger extends Weapon{

    type = 'Daga'
    damage = '4-7'
    minimumDamage: number = 4
    maximumDamage: number = 7
    skill: string = 'Ligero'
    description: string = 'Percepción aumentada en 25%'
    icon = '🗡️'
}