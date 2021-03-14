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
    /*
        getName(){
          return this.name;
        }
    */
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
    //public opponents:(namePokemon1: string, namePokemon2:string) => any;
    function Combat(namePokemon1, namePokemon2) {
        this.namePokemon1 = namePokemon1;
        this.namePokemon2 = namePokemon2;
    }
    Combat.prototype.combat = function (namePokemon1, namePokemon2) {
        namePokemon1 = pok1.getName();
        namePokemon2 = pok2.getName();
        var type1 = pok1.getType();
        var type2 = pok2.getType();
        //var type1 = prompt("Introduzca el tipo de tu pokemon:", "");
        //var type2 = prompt("Introduce el tipo del pokemon rival:", "");
        //var type1 = Pokedex.getType();
        //console.log("Start the battle!!");
        /*efectividadPokemon(tipo1: string, tipo2: string, ataque1: number, ataque2: number){
          var efectividad1: number = 1;
          var efectividad2: number = 1;
          if(tipo1 == "fuego"){
            switch(tipo2){
              case "agua":
                efectividad1 = efectividad1*0.5;
                efectividad2 = efectividad2*2;
                break;
              case "hierba":
                efectividad1 = efectividad1*2;
                efectividad2 = efectividad2*0.5;
                break;
               case "eléctrico":
                efectividad1 = efectividad1*1;
                efectividad2 = efectividad2*1;
                break;
              default:
                efectividad1 = efectividad1*0.5;
                break;
            }
           } else if(tipo1 == "agua"){
              switch(tipo2){
                case "fuego":
                  efectividad1 = efectividad1*2;
                  efectividad2 = efectividad2*0.5;
                  break;
                case "hierba":
                  efectividad1 = efectividad1*0.5;
                  efectividad2 = efectividad2*2;
                  break;
                 case "eléctrico":
                  efectividad1 = efectividad1*0.5;
                  efectividad2 = efectividad2*2;
                  break;
                default:
                  efectividad1 = efectividad1*0.5;
                  break;
              }
            } else if(tipo1 == "hierba"){
              switch(tipo2){
                case "fuego":
                  efectividad1 = efectividad1*0.5;
                  efectividad2 = efectividad2*2;
                  break;
                case "agua":
                  efectividad1 = efectividad1*2;
                  efectividad2 = efectividad2*0.5;
                  break;
                 case "eléctrico":
                  efectividad1 = efectividad1*1;
                  efectividad2 = efectividad2*1;
                  break;
                default:
                  efectividad1 = efectividad1*0.5;
                  break;
              }
            } else if(tipo1 == "eléctrico"){
              switch(tipo2){
                case "fuego":
                  efectividad1 = efectividad1*1;
                  efectividad2 = efectividad2*1;
                  break;
                case "agua":
                  efectividad1 = efectividad1*2;
                  efectividad2 = efectividad2*0.5;
                  break;
                 case "hierba":
                  efectividad1 = efectividad1*1;
                  efectividad2 = efectividad2*1;
                  break;
                default:
                  efectividad1 = efectividad1*0.5;
                  break;
              }
            } else {
            console.log(`Tipos no reconocidos`)
          }
          var dañoPoke1= calcularDaño(ataque1, efectividad1);
          dañoPoke1 = Math.round(dañoPoke1);
          console.log(`Daño que causa tu equipo Pokemon: ${dañoPoke1}`);
        
          var dañoPoke2= calcularDaño(ataque2, efectividad2);
          dañoPoke2 = Math.round(dañoPoke2);
          console.log(`Daño que realiza el equipo rival: ${dañoPoke2}`);
          
        }*/
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
var pokemon_ = new Combat("serperior", "tepig");
console.log(pokemon_.combat("serperior", "tepig"));
