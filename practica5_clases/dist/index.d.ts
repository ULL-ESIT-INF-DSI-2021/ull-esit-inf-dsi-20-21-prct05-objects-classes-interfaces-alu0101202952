export declare class Vehicles {
    private marca;
    private modelo;
    private antiguedad;
    private color;
    constructor(marca: string, modelo: string, antiguedad: number, color: string);
}
export declare class VehiclesPrivate extends Vehicles {
    constructor(marca: string, modelo: string, antiguedad: number, color: string, tipo: string);
}
export declare class VehiclesPublic extends Vehicles {
    constructor(marca: string, modelo: string, antiguedad: number, color: string, tipo: string, capacidadPasajeros: number);
}
