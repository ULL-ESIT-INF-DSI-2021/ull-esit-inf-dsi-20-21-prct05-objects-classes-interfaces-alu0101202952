import 'mocha';
import {expect} from 'chai';
import {Vehicles} from '../src/index';
import {VehiclesPrivate} from '../src/index';
import {VehiclesPublic} from '../src/index';

let vehicle1 = new VehiclesPrivate("Seat", "Ibiza", 5, "azul", "turismo");

describe('VehiclePrivate', () => {
  it('vehicle1.getMarca() returns marca of vehicle1', () => {
    return expect(vehicle1.getMarca()).to.be.equal("Seat");
  })

  it('vehicle1.getModelo() returns modelo of vehicle1', () => {
    return expect(vehicle1.getModelo()).to.be.equal("Ibiza");
  })

  it('vehicle1.getAntigüdad() returns antigüedad of vehicle1', () => {
    return expect(vehicle1.getAntiguedad()).to.be.equal(5);
  })
});