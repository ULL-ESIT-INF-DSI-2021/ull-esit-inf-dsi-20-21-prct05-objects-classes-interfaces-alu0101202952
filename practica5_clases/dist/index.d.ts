export declare class Rational {
    private numerador;
    private denominador;
    constructor(numerador: number, denominador: number);
    getNumerador(): number;
    getDenominador(): number | undefined;
    setNumerador(numerador: number): void;
    setDenominador(denominador: number): void;
    simplificacion(numerador: number, denominador: number): void;
    inverso(numerador: number, denominador: number): void;
}
