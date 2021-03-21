/**
 * ### EJERCICIO 1:
 * Class Pokedex**
 * #### ¿En qué consiste?
 * Queremos guardar los parámetros de un pokemon
 * @param name del pokemon
 * @param weight del pokemon
 * @param height del pokemon
 * @param type del pokemon
 * @param stats del pokemon(attack, defense, speed, hp)
 * @return carcaterísticas de un pokemon
 */
export class Pokedex{
  private name: string;
  private weight: number;
  private height: number;
  private type: string;
  private stats = new Array(4);
  static pokemon: any;
  
    constructor(name: string, weight: number, height: number, type: string, stats = new Array(4)) {
      this.name = name;
      this.weight = weight;
      this.height = height;
      this.type = type;
      this.stats = stats;
    }
    getName(){
      return this.name;
    }
    getWeight(){
      return this.weight;
    }
    getHeight(){
      return this.height;
    }
    getType(){
      return this.type;
    }
    getStats(){
      var aux: string = '';
      for (var i = 0; i < this.stats.length; i++) {
        aux = this.stats[i] + ', ';
        console.log(`: ${aux}`);
      }  
    }

} //class pokedex ends

/**
 * ### EJERCICIO 1:
 * Class Combat**
 * #### ¿En qué consiste?
 * Queremos simular un combate pokemon para ello dos funciones, combat() y start()
 * @param type1 de mi pokemon
 * @param type2 del pokemon rival
 * @return simulador del combate
 */
export class Combat{
public type1: string;
public type2: string;

constructor(type1:string, type2:string) {
  this.type1 = type1;
  this.type2 = type2;

}
 
/**
 * Método público combat()**
 * #### ¿En qué consiste?
 * Queremos guardar las efectividades y las debilidades además del daño que causa cada pokemon
 * @param type1 de mi pokemon
 * @param type2 del pokemon rival
 * @return daño que cada pokemon hace
 */
public combat(type1: string, type2: string) {
  var type1 = pok1.getType();
  var type2 = pok2.getType();
  var attack1 = 75;
  var attack2 = 100;

  /**
   *  Modificación método "efectividad() ejercicio 9 de la Práctica 3"
   */ 
  var efectividad1: number = 1;
  var efectividad2: number = 1;
  var dañoPoke1;
  var dañoPoke2;

  if(type1 == "fire"){
    switch(type2){
      case "water":
        efectividad1 = efectividad1*0.5;
        efectividad2 = efectividad2*2;
        break;
      case "grass":
        efectividad1 = efectividad1*2;
        efectividad2 = efectividad2*0.5;
        break;
      case "electric":
        efectividad1 = efectividad1*1;
        efectividad2 = efectividad2*1; 
        break;
      default:
        efectividad1 = efectividad1*0.5;
        break;
    }
  } else if(type1 == "water"){
    switch(type2){
      case "fire":
        efectividad1 = efectividad1*2;
        efectividad2 = efectividad2*0.5;
        break;
      case "grass":
        efectividad1 = efectividad1*0.5;
        efectividad2 = efectividad2*2;
        break;
      case "electric":
        efectividad1 = efectividad1*0.5;
        efectividad2 = efectividad2*2; 
        break;
      default:
        efectividad1 = efectividad1*0.5;
        break;
      }
  } else if(type1 == "grass"){
    switch(type2){
      case "fire":
        efectividad1 = efectividad1*0.5;
        efectividad2 = efectividad2*2;
        break;
      case "water":
        efectividad1 = efectividad1*2;
        efectividad2 = efectividad2*0.5;
        break;
      case "electric":
        efectividad1 = efectividad1*1;
        efectividad2 = efectividad2*1; 
        break;
      default:
        efectividad1 = efectividad1*0.5;
        break;
    }
  } else if(type1 == "electric"){
    switch(type2){
      case "fire":
        efectividad1 = efectividad1*1;
        efectividad2 = efectividad2*1;
        break;
      case "water":
        efectividad1 = efectividad1*2;
        efectividad2 = efectividad2*0.5;
        break;
      case "grass":
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

  dañoPoke1 = 50 * (attack1/95)*efectividad1;
  dañoPoke1 = Math.round(dañoPoke1);
  dañoPoke2 = 50 * (attack2/85)*efectividad2;
  dañoPoke2 = Math.round(dañoPoke2);

  console.log(`Daño que causa tu equipo Pokemon: ${dañoPoke1}`);
  console.log(`Daño que realiza el equipo rival: ${dañoPoke2}`); 
}

/**
 * Método público start()**
 * #### ¿En qué consiste?
 * Simula el combate
 * @param type1 de mi pokemon
 * @param type2 del pokemon rival
 * @param hp1 de mi pokemon
 * @param hp2 del pokemon rival
 * @return el combate y como se queda la vida de los pokemon
 */
public start(type1: string, type2: string, hp1: number, hp2: number) {
  var result1 = hp1;
  var result2 = hp2;
  var dañoPoke1 = 79;
  var dañoPoke2 = 29;
  if((result1 < dañoPoke1 || result2 < dañoPoke2) || (result1 ==0 || result2 ==0)){
    for(var i = result1; i>0; i--){
      // Se realizarán ataques entre los contrincantes hasta que el daño sufrido por uno de ellos sea igual o superior a su HP.
      result2 = result2 - dañoPoke1;
      result1 = result1 - dañoPoke2; //Escribe el valor de la vida del rival tras recibir el daño que le hizo mi pokemon
      console.log(result1);
      console.log(result2);
    }  
  }
  console.log(`\n********************\ END OF COMBAT /********************`);
}
}


let pok1 = new Pokedex("serperior", 63.0, 3.3, "grass",[75, 95, 113, 75]);
let pok2 = new Pokedex("samurott", 94.6, 1.5, "water",[100, 85, 70, 95]);
let typePokemon = [pok1, pok2];

console.log(`┌───────────────────── ∘°❉°∘ ─────────────────────┐\n`);
console.log(`\t  Presentation of the opponents\n`);
console.log(`└───────────────────── °∘❉∘° ─────────────────────┘\n`);
console.log(`My name is Andrea, I come from the Unova region`);
typePokemon.forEach((pokemon) => {
console.log(`My pokemon is ${pokemon.getName()}, is a ${pokemon.getType()} type and its stats are ${pokemon.getStats()}`);
console.log(`********************************************************************\n`);
});      

console.log(`┌───────────────────── ∘°❉°∘ ─────────────────────┐\n`);
console.log(`\t\t       FIGHT\n`);
console.log(`└───────────────────── °∘❉∘° ─────────────────────┘\n`);

let pokemon_ = new Combat(pok1.getType(), pok2.getType()); 
console.log(pokemon_.combat(pok1.getType(), pok2.getType()));



console.log(`\n********************************************************************`);
console.log(`\t\t      START THE BATTLE!!!`);
console.log(`********************************************************************\n`);
console.log(pokemon_.start(pok1.getType(), pok2.getType(), 75, 95));
