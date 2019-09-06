import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Monsters } from './monsters/monsters';
import { Weapon } from './weapon';
import { Item } from './items/item';
import { HERO_LEVELS } from './levels/hero-levels';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero: Hero = new Hero
  levels = HERO_LEVELS

  constructor() { }

  createHero(): Hero {
    return this.hero
  }

  strengthUp(): void {
    if (this.checkPoints()) {
      this.hero.strength += 1
      this.decreasePoints()
    }
  }

  strengthDown(minimumStat: number): void{
    if (this.hero.strength > minimumStat){
      this.hero.strength -= 1
      this.increasePoints()
    }
  }

  dexterityUp(): void {
    if (this.checkPoints()) {
      this.hero.dexterity += 1
      this.decreasePoints()
    }
  }

  dexterityDown(minimumStat: number): void{
    if (this.hero.dexterity > minimumStat){
      this.hero.dexterity -= 1
      this.increasePoints()
    }
  }

  perceptionUp(): void {
    if (this.checkPoints()) {
      this.hero.perception += 1
      this.decreasePoints()
    }
  }

  perceptionDown(minimumStat: number): void{
    if (this.hero.perception > minimumStat){
      this.hero.perception -= 1
      this.increasePoints()
    }
  }

  hpUp(): void {
    if (this.checkPoints()) {
      this.hero.hp += 1
      this.decreasePoints()
    }
  }

  hpDown(minimumStat: number): void{
    if (this.hero.hp > minimumStat){
      this.hero.hp -= 1
      this.increasePoints()
    }
  }

  hitpoints(): void {
    this.hero.hitpoints = this.hero.hp * 5 + this.hero.strength * 2 + 3
  }

  maxHp(): number{
    return this.hero.maxHp = this.hero.hp * 5 + this.hero.strength * 2 + 3;
  }

  decreasePoints(): void {
    this.hero.points -= 1
  }

  increasePoints(): void{
    this.hero.points += 1
  }

  checkPoints() {
    if (this.hero.points > 0)
      return true
  }

  // checka si el heroe realiza el ataque o falla
  heroAttack(hero: Hero, monster: Monsters): boolean{

    let dexterity = hero.dexterity;
    let perception = monster.perception;
    let result = dexterity - perception

    let attackChance = this.attackChance(result)

    return this.calculateIfAttacked(attackChance);
  }

  private attackChance(difference: number): number{
    return 50 + (difference * 7.5)
  }

  private calculateIfAttacked(attackChance: number): boolean{

    if (Math.random() * 100 <= attackChance)
      return true;
    return false;
  }

  attackCounterIncrease(){
    this.hero.attackCounter += 1
  }

  maximumDamage(dmg: number){
    this.hero.maximumDamage = dmg >= this.hero.maximumDamage ? dmg : this.hero.maximumDamage
  }

  totalDamageSum(dmg: number){
    this.hero.totalDamage += dmg
  }

  // daño del heroe
  heroDamage(hero: Hero, weapon: Weapon): number{

    let min = weapon.minimumDamage
    let max = weapon.maximumDamage

    return this.calculateDamage(min, max, hero.strength);
  }

  private calculateDamage(min: number, max: number, strength: number): number{
    return Math.floor(Math.random() * ((max+1) - min)) + min + (strength * 1.5);
  }

  receiveDamage(damageTaken: number): void{
    this.hero.hitpoints -= damageTaken
  }

  // rewards

  rewardExperience(monster: Monsters){
    this.hero.experience += monster.experience
  }

  rewardGold(monster: Monsters){
    this.hero.gold += monster.gold
  }

  // buying items

  buyItem(item: Item)
  {
    if(!this.enoughGold(item)) return;
    this.reduceGold(item)
    if (this.noItems(item)) return;
    this.oneOrMoreItems(item)
  }

  private enoughGold(item: Item){
    if (this.hero.gold < item.price)
      return false;
    return true;
  }

  private reduceGold(item: Item){
    this.hero.gold -= item.price
  }

  private noItems(item: Item){
    if (this.hero.items.length == 0)
    {
      this.hero.items.push(item)
      return true;
    }
  }

  private oneOrMoreItems(item: Item){
    for (let i = 0; i < this.hero.items.length; i++)
    {
      if (item.name == this.hero.items[i].name){
        this.hero.items[i].amount += 1
        return;
      }
    }
    this.hero.items.push(item)
  }

  // acquire item

  addItem(item: Item){
    if (this.noItems(item)) return;
    this.oneOrMoreItems(item)
  }

  // using items

  useItem(item: Item)
  {
    this.consumeItem(item)
    this.applyEffect(item)
  }

  private consumeItem(item: Item){
    item.amount -= 1
    item.name === 'poción pequeña' ? this.hero.smallPotionCounter+=1 : this.hero.bigPotionCounter+=1
  }

  private applyEffect(item: Item){
    this.hero.hitpoints += (item.effect * this.maxHp())
    if(this.hero.hitpoints > this.maxHp())
      this.hero.hitpoints = this.maxHp()
  }

  // dying

  checkIfHeroDied(){
    return this.hero.hitpoints <= 0
  }

  // leveling up

  increaseHeroLevel()
  {
    this.givePointsForLevelUp()
    this.levelUp()
  }

  checkIfLevelUp(): boolean{
    for (let i = 0; i < this.levels.length; i++){
      if (this.hero.level == this.levels[i].level)
        if (this.hero.experience >= this.levels[i+1].experience)
          return true;
    }
  }

  private givePointsForLevelUp(){
    this.hero.points += 2
  }

  private levelUp(){
    this.hero.level += 1
  }

}
