import { Item } from './item';

export class SmallPotion extends Item{

    public constructor(){
        super('pociones', 'poción pequeña', 'cura la mitad de la salud máxima', 0.5, 1, 40)
    }
}