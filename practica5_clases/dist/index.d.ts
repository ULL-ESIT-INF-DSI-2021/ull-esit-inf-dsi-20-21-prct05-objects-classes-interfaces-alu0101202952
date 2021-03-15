export declare class Rational {
    private numerador;
    private denominador;
    constructor(numerador: number, denominador: number);
    getNumerador(): number;
    getDenominador(): number | undefined;
    setNumerador(numerador: number): void;
    setDenominador(denominador: number): void;
    simplificacion(numerador: number, denominador: number): void;
    inverso(): Rational;
    suma(num1: number, den1: number, num2: number, den2: number): void;
    resta(num1: number, den1: number, num2: number, den2: number): void;
    multiplicacion(num1: number, den1: number, num2: number, den2: number): void;
}
