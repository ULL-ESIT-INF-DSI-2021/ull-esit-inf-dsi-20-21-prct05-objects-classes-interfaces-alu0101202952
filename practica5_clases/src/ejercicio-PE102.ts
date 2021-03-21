//EJERCICIO PE-102
/**
 * **Class RATIONAL{}**
 * Crea racionales con propiedades de numerador y denominador. Tiene métodos con operaciones de racionales, suma
 * inversa, simplificar, restar, multiplicar, dividir, además de los getters y setters de los numeradores y denominadores
 */
 export class Rational{
    private numerador: number;
    private denominador: number;
    constructor(numerador: number, denominador: number){
      this.numerador = numerador;
      this.denominador = denominador;  
    }
  
    getNumerador(){
      return this.numerador;
    }
  
    getDenominador(){
      if(this.denominador != 0){
        return this.denominador;
      } else {
        console.log(`Denominador no válido`);
      }
    }
  
    setNumerador(numerador: number){
      this.numerador = numerador;
    }
    setDenominador(denominador: number){
      if(denominador != 0){
        this.denominador = denominador;
      } else{
        console.log(`El denominador no puede ser cero`);
      }
    }
  
    /**
     * **Funcion simplificación()**
     * > ¿Qué hace?
     * > Simplifica el racional por el máximo común divisor
     * @param numerador del racional
     * @param denominador del denominador
     */
    public simplificacion(numerador: number, denominador: number) {
      do {
        var i=2;
        var multiplo=0;
        var auxmultiplo = i;
        while (i <= numerador && multiplo == 0){
          if (numerador % i == 0 && denominador % i == 0){
            multiplo = 1;
          }
          i++;
        }
        if (multiplo == 1){
          numerador=numerador/auxmultiplo;
          denominador=denominador/auxmultiplo;
          
        }
      }while (multiplo==1);  
      console.log(`Racional simplificado: ${numerador}/${denominador}`);
    }
  
    /**
     * **Función inverso()**
     * > ¿Qué hace?
     * > Retorna un nuevo objeto racional con el numerador y denominador inverido
     * @returns new Rational(this.denominador, this.numerador)
     */
    public inverso() {
      return new Rational(this.denominador, this.numerador);
    }
  
    /**
     * **Función suma()**
     * > ¿Qué hace?
     * > Recibe un objeto rational y lo suma con el objeto invocante
     * @param num1  
     * @param den1 
     * @param num2 
     * @param den2 
     */
    public suma(num1: number, den1: number, num2: number, den2: number) {
      var newDenominador;
      var newNumerador;
      if(den1 == den2){
        newDenominador = den1 = den2;
        newNumerador = num1 + num2;
        console.log(`Suma: ${newNumerador}/${newDenominador}`);
        console.log(`###################`);
        this.simplificacion(newNumerador,newDenominador);
      } else if(den1 != den2){
        newDenominador = den1 * den2;
        newNumerador = ((newDenominador/den1)*num1) + ((newDenominador/den2)*num2);
        console.log(`Suma: ${newNumerador}/${newDenominador}`);
        console.log(`###################`);
        this.simplificacion(newNumerador,newDenominador);
      } else{
        console.log(`No encontrada la suma`);
      }
    }
  
    /**
     * **Función suma()**
     * > ¿Qué hace?
     * > Recibe un objeto rational y lo sresta con el objeto invocante
     * @param num1 
     * @param den1 
     * @param num2 
     * @param den2 
     */
    public resta(num1: number, den1: number, num2: number, den2: number) {
      var newDenominador;
      var newNumerador;
      if(den1 == den2){
        newDenominador = den1 = den2;
        newNumerador = num1 - num2;
        console.log(`Resta: ${newNumerador}/${newDenominador}`);
        console.log(`###################`);
        this.simplificacion(newNumerador,newDenominador);
      } else if(den1 != den2){
        newDenominador = den1 * den2;
        newNumerador = ((newDenominador/den1)*num1) - ((newDenominador/den2)*num2);
        console.log(`Resta: ${newNumerador}/${newDenominador}`);
        console.log(`###################`);
        this.simplificacion(newNumerador,newDenominador);
      } else{
        console.log(`No encontrada la suma`);
      }
    }
  
    /**
     * **Función suma()**
     * > ¿Qué hace?
     * > Recibe un objeto rational y lo multiplica con el objeto invocante
     * @param num1 
     * @param den1 
     * @param num2 
     * @param den2 
     */
    public multiplicacion(num1: number, den1: number, num2: number, den2: number) {
      var newDenominador;
      var newNumerador;
      if(den1 == den2){
        newDenominador = den1 = den2;
        newNumerador = num1 - num2;
        console.log(`Resta: ${newNumerador}/${newDenominador}`);
        console.log(`###################`);
        this.simplificacion(newNumerador,newDenominador);
      } else if(den1 != den2){
        newDenominador = den1 * den2;
        newNumerador = ((newDenominador/den1)*num1) - ((newDenominador/den2)*num2);
        console.log(`Resta: ${newNumerador}/${newDenominador}`);
        console.log(`###################`);
        this.simplificacion(newNumerador,newDenominador);
      } else{
        console.log(`No encontrada la suma`);
      }
    }
  
  }// end class Rational
  
  let rational1 = new Rational(4,8);
  let rational2 = new Rational(3,5);
  let rational3 = new Rational(1,2);
  let rational4;
  
  console.log(`Racional sin simplificar: ${rational1.getNumerador()}/${rational1.getDenominador()}`);
  console.log(`${rational1.simplificacion(4,8)}`);
  
  console.log(`\n****************************************\n`);
  console.log(`INVERSO DEL RACIONAL: ${rational2.getNumerador()}/${rational2.getDenominador()}`);
  rational4 = rational2.inverso();
  
  console.log(`\n****************************************\n`);
  console.log(`Racional 2: ${rational2.getNumerador()}/${rational2.getDenominador()}`);
  console.log(`Racional 3: ${rational3.getNumerador()}/${rational3.getDenominador()}`);
  console.log(`\nSUMA DEL racional 2 y del racional 3 \n`);
  console.log(`${rational3.suma(3,5,1,2)}`);
  
  console.log(`\n****************************************\n`);
  console.log(`Racional 2: ${rational2.getNumerador()}/${rational2.getDenominador()}`);
  console.log(`Racional 3: ${rational3.getNumerador()}/${rational3.getDenominador()}`);
  console.log(`\nRESTA DEL racional 2 y del racional 3 \n`);
  console.log(`${rational3.resta(3,5,1,2)}`);
  
  
  console.log(`\n****************************************\n`);
  console.log(`Racional 2: ${rational2.getNumerador()}/${rational2.getDenominador()}`);
  console.log(`Racional 3: ${rational3.getNumerador()}/${rational3.getDenominador()}`);
  console.log(`\nMULTIPLICACION DEL racional 2 y del racional 3 \n`);
  console.log(`${rational3.multiplicacion(3,5,1,2)}`);