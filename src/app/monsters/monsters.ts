import { Item } from '../items/item';

export class Monsters{

    id: number
    type: string
    strength: number
    dexterity: number
    perception: number
    hp: number
    minimunDamage: number
    maximunDamage: number
    experience: number
    gold: number
    item: Item
}