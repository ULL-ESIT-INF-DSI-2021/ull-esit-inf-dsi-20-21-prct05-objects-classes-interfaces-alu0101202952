import 'mocha';
import {expect} from 'chai';
import {pokedex} from '../src/ejercicio-1';


describe('pokedex', () => {
  it('pokedex("serperior") returns name, weight and height, type, stats', () => {
    expect(new pokedex("serperior", 63.0, 3.3, "grass",(attack, defense, speed, hp) => [75, 95, 113, 75])).to.be.equal(("serperior"));
  })});
