export class Pokedex{
    private name: string;
    private weight: number;
    private height: number;
    private type: string;
    public stats: (attack: number[], defense: number[], speed: number[], hp: number[]) => number[];
    static pokemon: any;
    
      constructor(name: string, weight: number, height: number, type: string, stats: (attack: number[], defense: number[],   speed: number[], hp: number[]) => number[]) {
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
/*
      getType(){
        return this.type;
      }*/
  } //class pokedex ends
  
  
  export class Combat{
    public namePokemon1!: string;
    public namePokemon2!: string;
    //public opponents:(namePokemon1: string, namePokemon2:string) => any;
  
    constructor(namePokemon1:string, namePokemon2:string) {
      this.namePokemon1 = namePokemon1;
      this.namePokemon2 = namePokemon2;
    }
  
    public combat(namePokemon1: string, namePokemon2: string) {
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
    }
  }
  
 let pok1 = new Pokedex("serperior", 63.0, 3.3, "grass",(attack, defense, speed, hp) => [75, 95, 113, 75]);
 let pok2 = new Pokedex("samurott", 94.6, 1.5, "water",(attack, defense, speed, hp) => [100, 85, 70, 95]);
 let typePokemon = [pok1, pok2];

 console.log(`┌───────────────────── ∘°❉°∘ ─────────────────────┐\n`);
 console.log(`\t  Presentation of the opponents\n`);
 console.log(`└───────────────────── °∘❉∘° ─────────────────────┘\n`);
 console.log(`My name is Andrea, I come from the Unova region`);
 typePokemon.forEach((pokemon) => {
    console.log(`My pokemon is ${pokemon.getName()}, is a ${pokemon.getType()} type ` +
                `and its stats are ${pokemon.stats}`);
    console.log(`********************************************************************\n`);
 });      

 console.log(`┌───────────────────── ∘°❉°∘ ─────────────────────┐\n`);
 console.log(`\t\t       FIGHT\n`);
 console.log(`└───────────────────── °∘❉∘° ─────────────────────┘\n`);
 let pokemon_ = new Combat("serperior", "tepig"); 
 console.log(pokemon_.combat("serperior", "tepig"));