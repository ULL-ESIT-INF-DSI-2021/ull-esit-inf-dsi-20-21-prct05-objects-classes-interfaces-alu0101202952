import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../src/index';

let pok1 = new Pokedex("serperior", 63.0, 3.3, "grass",(attack, defense, speed, hp) => [75, 95, 113, 75]);
let pok2 = new Pokedex("samurott", 94.6, 1.5, "water",(attack, defense, speed, hp) => [100, 85, 70, 95]);

describe('pokedex', () => {
  it('pok1.getName() returns name', () => {
    return expect(pok1.getName()).to.be.equal("serperior");
  })
  it('pok2.getName() returns name', () => {
    return expect(pok2.getName()).to.be.equal("samurott");
  })

});
