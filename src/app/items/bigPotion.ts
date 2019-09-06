import { Item } from './item';

export class BigPotion extends Item{

    public constructor(){
        super('pociones', 'poción grande', 'recupera la salud al máximo', 1, 1, 90)
    }
}