"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combat = exports.Pokedex = void 0;
var Pokedex = /** @class */ (function () {
    function Pokedex(name, weight, height, type, stats) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type = type;
        this.stats = stats;
    }
    Pokedex.prototype.getName = function () {
        return this.name;
    };
    Pokedex.prototype.getWeight = function () {
        return this.weight;
    };
    Pokedex.prototype.getHeight = function () {
        return this.height;
    };
    Pokedex.prototype.getType = function () {
        return this.type;
    };
    return Pokedex;
}()); //class pokedex ends
exports.Pokedex = Pokedex;
var Combat = /** @class */ (function () {
    function Combat(type1, type2) {
        this.type1 = type1;
        this.type2 = type2;
    }
    Combat.prototype.combat = function (type1, type2) {
        var type1 = pok1.getType();
        var type2 = pok2.getType();
        var attack1 = 75;
        var attack2 = 100;
        // Modificación método "efectividad() ejercicio 9 de la Práctica 3"
        var efectividad1 = 1;
        var efectividad2 = 1;
        var dañoPoke1;
        var dañoPoke2;
        if (type1 == "fire") {
            switch (type2) {
                case "water":
                    efectividad1 = efectividad1 * 0.5;
                    efectividad2 = efectividad2 * 2;
                    break;
                case "grass":
                    efectividad1 = efectividad1 * 2;
                    efectividad2 = efectividad2 * 0.5;
                    break;
                case "electric":
                    efectividad1 = efectividad1 * 1;
                    efectividad2 = efectividad2 * 1;
                    break;
                default:
                    efectividad1 = efectividad1 * 0.5;
                    break;
            }
        }
        else if (type1 == "water") {
            switch (type2) {
                case "fire":
                    efectividad1 = efectividad1 * 2;
                    efectividad2 = efectividad2 * 0.5;
                    break;
                case "grass":
                    efectividad1 = efectividad1 * 0.5;
                    efectividad2 = efectividad2 * 2;
                    break;
                case "electric":
                    efectividad1 = efectividad1 * 0.5;
                    efectividad2 = efectividad2 * 2;
                    break;
                default:
                    efectividad1 = efectividad1 * 0.5;
                    break;
            }
        }
        else if (type1 == "grass") {
            switch (type2) {
                case "fire":
                    efectividad1 = efectividad1 * 0.5;
                    efectividad2 = efectividad2 * 2;
                    break;
                case "water":
                    efectividad1 = efectividad1 * 2;
                    efectividad2 = efectividad2 * 0.5;
                    break;
                case "electric":
                    efectividad1 = efectividad1 * 1;
                    efectividad2 = efectividad2 * 1;
                    break;
                default:
                    efectividad1 = efectividad1 * 0.5;
                    break;
            }
        }
        else if (type1 == "electric") {
            switch (type2) {
                case "fire":
                    efectividad1 = efectividad1 * 1;
                    efectividad2 = efectividad2 * 1;
                    break;
                case "water":
                    efectividad1 = efectividad1 * 2;
                    efectividad2 = efectividad2 * 0.5;
                    break;
                case "grass":
                    efectividad1 = efectividad1 * 1;
                    efectividad2 = efectividad2 * 1;
                    break;
                default:
                    efectividad1 = efectividad1 * 0.5;
                    break;
            }
        }
        else {
            console.log("Tipos no reconocidos");
        }
        dañoPoke1 = 50 * (attack1 / 95) * efectividad1;
        dañoPoke1 = Math.round(dañoPoke1);
        dañoPoke2 = 50 * (attack2 / 85) * efectividad2;
        dañoPoke2 = Math.round(dañoPoke2);
        console.log("Da\u00F1o que causa tu equipo Pokemon: " + dañoPoke1);
        console.log("Da\u00F1o que realiza el equipo rival: " + dañoPoke2);
    };
    Combat.prototype.start = function (type1, type2, hp1, hp2 /*, dañoPoke1:number, dañoPoke2:number*/) {
        var i;
        var j;
        var result1;
        var result2;
        var dañoPoke1 = 79;
        var dañoPoke2 = 29;
        // Se realizarán ataques entre los contrincantes hasta que el daño sufrido por uno de ellos sea igual o superior a su HP.
        if (dañoPoke1 >= hp1 || dañoPoke2 >= hp2) {
            for (i = hp1; i = 0; i--) {
                for (j = hp2; j = 0; j--) {
                    result1 = hp1 - dañoPoke2; //Escribe el valor de la vida de mi pokemon tras el daño recibido por parte del rival
                    result2 = hp2 - dañoPoke1; //Escribe el valor de la vida del rival tras recibir el daño que le hizo mi pokemon
                    console.log(result1);
                }
            }
        }
    };
    return Combat;
}());
exports.Combat = Combat;
var pok1 = new Pokedex("serperior", 63.0, 3.3, "grass", function (attack, defense, speed, hp) { return [75, 95, 113, 75]; });
var pok2 = new Pokedex("samurott", 94.6, 1.5, "water", function (attack, defense, speed, hp) { return [100, 85, 70, 95]; });
var typePokemon = [pok1, pok2];
console.log("\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2218\u00B0\u2749\u00B0\u2218 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n");
console.log("\t  Presentation of the opponents\n");
console.log("\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u00B0\u2218\u2749\u2218\u00B0 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n");
console.log("My name is Andrea, I come from the Unova region");
typePokemon.forEach(function (pokemon) {
    console.log("My pokemon is " + pokemon.getName() + ", is a " + pokemon.getType() + " type " +
        ("and its stats are " + pokemon.stats));
    console.log("********************************************************************\n");
});
console.log("\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2218\u00B0\u2749\u00B0\u2218 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n");
console.log("\t\t       FIGHT\n");
console.log("\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u00B0\u2218\u2749\u2218\u00B0 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n");
var pokemon_ = new Combat(pok1.getType(), pok2.getType());
console.log(pokemon_.combat(pok1.getType(), pok2.getType()));
console.log("\n********************************************************************");
console.log("\t\t      START THE BATTLE!!!");
console.log("********************************************************************\n");
console.log(pokemon_.start(pok1.getType(), pok2.getType(), 75, 95));
