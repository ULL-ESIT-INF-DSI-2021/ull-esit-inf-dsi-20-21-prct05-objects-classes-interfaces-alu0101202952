export declare class Pokedex {
    private name;
    private weight;
    private height;
    private type;
    private stats;
    static pokemon: any;
    constructor(name: string, weight: number, height: number, type: string, stats?: any[]);
    getName(): string;
    getWeight(): number;
    getHeight(): number;
    getType(): string;
    getStats(): void;
}
export declare class Combat {
    type1: string;
    type2: string;
    constructor(type1: string, type2: string);
    combat(type1: string, type2: string): void;
    start(type1: string, type2: string, hp1: number, hp2: number): void;
}
