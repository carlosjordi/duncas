import { Weapon } from './weapon';

export class Dagger extends Weapon{

    type = 'Daga'
    damage = '1-6'
    minimumDamage: number = 1
    maximumDamage: number = 6
    skill: string = 'Ligero'
    description: string = 'Percepción aumentada en 30%'
    icon = '🗡️'
}