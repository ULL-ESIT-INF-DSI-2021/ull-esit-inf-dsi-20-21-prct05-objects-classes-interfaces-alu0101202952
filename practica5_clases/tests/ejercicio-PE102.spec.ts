import 'mocha';
import {expect} from 'chai';
import {Rational} from '../src/index';


let rational1 = new Rational(4,8);
let rational2 = new Rational(3,5);
let rational3 = new Rational(1,2);
let rational4;

describe('Rational', () => {
    it('rartional1.getNumerador() returns numerador del racional', () => {
      return expect(rational1.getNumerador()).to.be.equal(4);
    })

    it('rartional1.getDenominador() returns denominador del racional', () => {
        return expect(rational1.getDenominador()).to.be.equal(8);
    })
    it('rartional1.setNumerador() asigna el numerador a la propiedad numerador de racional', () => {
        return expect(rational1.setNumerador(1)).to.be.equal(undefined);
    })

    it('rartional1.setDenominador() asigna el Denominador a la propiedad numerador de racional', () => {
        return expect(rational1.setDenominador(2)).to.be.equal(undefined);
    })

    it('rartional1.simplificacion(4,8) simplifica el racional', () => {
        return expect(rational1.simplificacion(4,8)).to.be.equal(undefined);
    })

    it('rartional2.inverso(3,5) muestra el inverso del racional', () => {
        return expect(rational2.inverso(3,5)).to.be.equal(undefined);
    })

    it('rartional23.suma(3,5,1,2) muestra la suma de racionales', () => {
        return expect(rational2.suma(3,5,1,2)).to.be.equal(undefined);
    })

    it('rartional23.resta(3,5,1,2) muestra la resta de racionales', () => {
        return expect(rational2.resta(3,5,1,2)).to.be.equal(undefined);
    })

    it('rartional23.multiplicacion(3,5,1,2) muestra la multiplicación de racionales', () => {
        return expect(rational2.multiplicacion(3,5,1,2)).to.be.equal(undefined);
    })
});