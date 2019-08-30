export class Item{
    type: string
    name: string
    effectDescription: string
    effect: number
    amount: number
    price: number

    constructor(type: string, name: string, effectDescription: string, 
        effect: number, amount: number, price: number){
        this.type = type
        this.name = name
        this.effectDescription = effectDescription
        this.effect = effect
        this.amount = amount
        this.price = price
    }
}