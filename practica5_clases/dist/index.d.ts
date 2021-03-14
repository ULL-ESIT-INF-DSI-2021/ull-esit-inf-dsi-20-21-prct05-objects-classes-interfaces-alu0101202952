export declare class Vehicles {
    static modelo: string;
    static antiguedad: number;
    static color: string;
    static marca: string;
    constructor(marca: string, modelo: string, antiguedad: number, color: string);
}
export interface Movable {
    numRuedas: number;
    motor: string;
    cv: number;
}
export declare class VehiclesPrivate extends Vehicles implements Movable {
    readonly numRuedas: number;
    readonly motor: string;
    readonly cv: number;
    static tipo: string;
    static numRuedas: number;
    static motor: string;
    static cv: number;
    constructor(marca: string, modelo: string, antiguedad: number, color: string, tipo: string, numRuedas: number, motor: string, cv: number);
    getMarca(): string;
    getModelo(): string;
    getAntiguedad(): number;
    getColor(): string;
    getTipo(): string;
    getNumRuedas(): number;
    getMotor(): string;
    getCV(): number;
}
export declare class VehiclesPublic extends Vehicles implements Movable {
    readonly numRuedas: number;
    readonly motor: string;
    readonly cv: number;
    static tipo: string;
    static capacidadPasajeros: number;
    static numRuedas: number;
    static motor: string;
    static cv: number;
    constructor(marca: string, modelo: string, antiguedad: number, color: string, tipo: string, capacidadPasajeros: number, numRuedas: number, motor: string, cv: number);
    getMarca(): string;
    getModelo(): string;
    getAntiguedad(): number;
    getColor(): string;
    getTipo(): string;
    getCapacidad(): number;
    getNumRuedas(): number;
    getMotor(): string;
    getCV(): number;
}
