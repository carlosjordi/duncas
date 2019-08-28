import { Item } from './item';

export class BigPotion extends Item{

    public constructor(){
        super('pociones', 'poción grande', 'recupera toda la salud', 1, 1, 100)
    }
}