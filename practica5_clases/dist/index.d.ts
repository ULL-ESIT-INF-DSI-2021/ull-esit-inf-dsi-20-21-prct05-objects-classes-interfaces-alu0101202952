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
    suma(num1: number, den1: number, num2: number, den2: number): void;
    resta(num1: number, den1: number, num2: number, den2: number): void;
}
