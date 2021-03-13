export declare class Pokedex {
    private name;
    private weight;
    private height;
    private type;
    stats: (attack: number[], defense: number[], speed: number[], hp: number[]) => number[];
    static pokemon: any;
    constructor(name: string, weight: number, height: number, type: string, stats: (attack: number[], defense: number[], speed: number[], hp: number[]) => number[]);
    getName(): string;
    getWeight(): number;
    getHeight(): number;
    getType(): string;
    getStats(): (attack: number[], defense: number[], speed: number[], hp: number[]) => number[];
    getAttack(): number[] | undefined;
}
export declare class Combat {
    type1: string;
    type2: string;
    dañoPoke1: number;
    dañoPoke2: number;
    constructor(type1: string, type2: string, dañoPoke1: number, dañoPoke2: number);
    getDaño1(): number;
    getDaño2(): number;
    combat(type1: string, type2: string): void;
    start(namePokemon1: string, namePokemon2: string, hp1: number, hp2: number, dañoPoke1: number, dañoPoke2: number): void;
}
