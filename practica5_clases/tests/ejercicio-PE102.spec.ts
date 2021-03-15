import 'mocha';
import {expect} from 'chai';
import {Rational} from '../src/index';


let rational1 = new Rational(1,2);
describe('Rational', () => {
    it('rartional1.getNumerador() returns numerador del racional', () => {
      return expect(rational1.getNumerador()).to.be.equal(1/2);
    })
});