import 'mocha';
import {expect} from 'chai';
import {Rational} from '../src/index';


let rational1 = new Rational(4,8);
describe('Rational', () => {
    it('rartional1.getNumerador() returns numerador del racional', () => {
      return expect(rational1.getNumerador()).to.be.equal(1);
    })
    it('rartional1.getDenominador() returns denominador del racional', () => {
        return expect(rational1.getDenominador()).to.be.equal(2);
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
});