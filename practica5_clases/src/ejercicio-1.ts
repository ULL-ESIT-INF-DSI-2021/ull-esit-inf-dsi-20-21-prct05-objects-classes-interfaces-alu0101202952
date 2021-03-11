export class pokedex{
  name!: String;
  weight!: number;
  height!: number;
  type!: string;
  stats: (attack: number[], defense: number[], speed: number[], hp: number[]) => number[];

    constructor(name: string, weight: number, height: number, type: string, stats: (attack: number[], defense: number[],   speed: number[], hp: number[]) => number[]) {
      this.name = name;
      this.weight = weight;
      this.height = height;
      this.type = type;
      this.stats = stats;
}


pokemon = new pokedex("serperior", 63.0, 3.3, "grass",(attack, defense, speed, hp) => [75, 95, 113, 75])};