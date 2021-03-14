export declare class Vehicles {
    static modelo: string;
    static antiguedad: number;
    static color: string;
    static marca: string;
    constructor(marca: string, modelo: string, antiguedad: number, color: string);
}
export declare class VehiclesPrivate extends Vehicles {
    constructor(marca: string, modelo: string, antiguedad: number, color: string, tipo: string);
    getMarca(): string;
    getModelo(): string;
    getAntiguedad(): number;
    getColor(): string;
}
export declare class VehiclesPublic extends Vehicles {
    constructor(marca: string, modelo: string, antiguedad: number, color: string, tipo: string, capacidadPasajeros: number);
}
