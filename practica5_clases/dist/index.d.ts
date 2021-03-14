export declare class Pokedex {
    private name;
    private weight;
    private height;
    private type;
    stats: (attack: number[], defense: number[], speed: number[], hp: number[]) => number[];
    static pokemon: any;
    constructor(name: string, weight: number, height: number, type: string, stats: (attack: number[], defense: number[], speed: number[], hp: number[]) => number[]);
    getWeight(): number;
    getHeight(): number;
    getType(): string;
}
export declare class Combat {
    namePokemon1: string;
    namePokemon2: string;
    constructor(namePokemon1: string, namePokemon2: string);
    combat(namePokemon1: string, namePokemon2: string): void;
}
