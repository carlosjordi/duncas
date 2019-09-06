import { Item } from './items/item';
import { Weapon } from './weapon';

export class Hero{
    name: string = ''
    hp: number = 3
    strength: number = 1
    dexterity: number = 1
    perception: number = 1
    level: number = 1
    experience: number = 0.0
    points: number = 5
    hitpoints: number // la vida que sale del hp, fuerza y una constante
    gold: number = 0
    items: Item [] = []
    maxHp: number
    // 05 - 09 - 19 adding weapon for dagger ability
    weapon: Weapon
    // 06 - 09 - 19 counter of used potions
    smallPotionCounter = 0
    bigPotionCounter = 0
    // maximum damage - attacks counter - total damage
    attackCounter = 0
    maximumDamage = 0
    totalDamage = 0
}