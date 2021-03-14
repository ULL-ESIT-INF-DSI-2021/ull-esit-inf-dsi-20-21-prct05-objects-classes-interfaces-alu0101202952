"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokedex = void 0;
var pokedex = /** @class */ (function () {
    function pokedex(name, weight, height, type, stats) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type = type;
        this.stats = stats;
    }
    pokedex.prototype.getName = function () {
        return this.name;
    };
    pokedex.prototype.getWeight = function () {
        return this.weight;
    };
    pokedex.prototype.getHeight = function () {
        return this.height;
    };
    pokedex.prototype.getType = function () {
        return this.type;
    };
    return pokedex;
}()); //class pokedex ends
exports.pokedex = pokedex;
var pokemon = new pokedex("serperior", 63.0, 3.3, "grass", function (attack, defense, speed, hp) { return [75, 95, 113, 75]; });
