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
    type1: string;
    type2: string;
    constructor(type1: string, type2: string);
    combat(type1: string, type2: string): void;
    start(type1: string, type2: string, hp1: number, hp2: number): void;
}
