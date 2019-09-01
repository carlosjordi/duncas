export class Level {
    level: number
    experience: number

    constructor(level: number, experience: number){
        this.level = level;
        this.experience = experience
    }

    static generateLevels(maxLevel: number): Level [] {
        let levels: Level [] = []
        for (let i = 0; i < maxLevel; i++){
            let lev = new Level(i + 1, i * i * 100)
            levels.push(lev)
        }
        return levels;
    }
}