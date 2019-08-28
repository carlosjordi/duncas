import { Item } from './items/item';

export class Hero{
    name: string = ''
    hp: number = 2
    strength: number = 1
    dexterity: number = 1
    perception: number = 1
    level: number = 1
    experience: number = 0.0
    points: number = 5
    hitpoints: number // la vida que sale del hp, fuerza y una constante
    gold: number = 0
    items: Array<Item> = []
    maxHp: number
}