export class pokedex{
  private name: String;
  private weight: number;
  private height: number;
  private type: string;
  public stats: (attack: number[], defense: number[], speed: number[], hp: number[]) => number[];

    constructor(name: string, weight: number, height: number, type: string, stats: (attack: number[], defense: number[],   speed: number[], hp: number[]) => number[]) {
      this.name = name;
      this.weight = weight;
      this.height = height;
      this.type = type;
      this.stats = stats;
    }

    getName(){
      return this.name;
    }

    getWeight(){
      return this.weight;
    }

    getHeight(){
      return this.height;
    }

    getType(){
      return this.type;
    }
} //class pokedex ends


let pokemon = new pokedex("serperior", 63.0, 3.3, "grass",(attack, defense, speed, hp) => [75, 95, 113, 75]);