import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../src/index';
import {Combat} from '../src/index';

let pok1 = new Pokedex("serperior", 63.0, 3.3, "grass",(attack, defense, speed, hp) => [75, 95, 113, 75]);
let pok2 = new Pokedex("samurott", 94.6, 1.5, "water",(attack, defense, speed, hp) => [100, 85, 70, 95]);

let pokemon_ = new Combat(pok1.getType(), pok2.getType(), 75, 95);

describe('pokedex', () => {
  it('pok1.getName() returns name', () => {
    return expect(pok1.getName()).to.be.equal("serperior");
  })
  it('pok2.getName() returns name', () => {
    return expect(pok2.getName()).to.be.equal("samurott");
  })

  it('pok1.getWeight() returns weight', () => {
    return expect(pok1.getWeight()).to.be.equal(63.0);
  })
  it('pok2.getWeight() returns weight', () => {
    return expect(pok2.getWeight()).to.be.equal(94.6);
  })

  it('pok1.getHeight() returns height', () => {
    return expect(pok1.getHeight()).to.be.equal(3.3);
  })
  it('pok2.getHeight() returns height', () => {
    return expect(pok2.getHeight()).to.be.equal(1.5);
  })

  it('pok1.getType() returns type', () => {
    return expect(pok1.getType()).to.be.equal("grass");
  })
  it('pok2.getType() returns type', () => {
    return expect(pok2.getType()).to.be.equal("water");
  })
});

describe('combat', () => {
  it('pokemon_.combat(pok1.getType(), pok2.getType()) returns damage', () => {
    return expect(pokemon_.combat(pok1.getType(), pok2.getType())).to.be.equal("serperior");
  })
});
