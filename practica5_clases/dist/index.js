"use strict";
// EJERCICIO 1
/*
export class Pokedex{
    private name: string;
    private weight: number;
    private height: number;
    private type: string;
    public stats: (attack: number[], defense: number[], speed: number[], hp: number[]) => number[];
    
    static pokemon: any;
    
      constructor(name: string, weight: number, height: number, type: string, stats: (attack: number[], defense: number[], speed: number[], hp: number[]) => number[]) {
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

  } //class pokedex ends
  
  
  export class Combat{
    public type1: string;
    public type2: string;
  
    constructor(type1:string, type2:string) {
      this.type1 = type1;
      this.type2 = type2;

    }
    
    public combat(type1: string, type2: string) {
      var type1 = pok1.getType();
      var type2 = pok2.getType();
      var attack1 = 75;
      var attack2 = 100;

      // Modificación método "efectividad() ejercicio 9 de la Práctica 3"
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


    public start(type1: string, type2: string, hp1: number, hp2: number) {
      var i;
      var j;
      var result1;
      var result2;
      var dañoPoke1 = 79;
      var dañoPoke2 = 29;
      // Se realizarán ataques entre los contrincantes hasta que el daño sufrido por uno de ellos sea igual o superior a su HP.
      if(dañoPoke1 >= hp1 || dañoPoke2 >= hp2){
        for(i = hp1 ; i = 0; i--){
          for(j = hp2; j =0; j--){
            result1 = hp1 - dañoPoke2; //Escribe el valor de la vida de mi pokemon tras el daño recibido por parte del rival
            result2 = hp2 - dañoPoke1; //Escribe el valor de la vida del rival tras recibir el daño que le hizo mi pokemon
            console.log(result1);
          }
        }
      }
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
 
 let pokemon_ = new Combat(pok1.getType(), pok2.getType());
 console.log(pokemon_.combat(pok1.getType(), pok2.getType()));


 
 console.log(`\n********************************************************************`);
 console.log(`\t\t      START THE BATTLE!!!`);
 console.log(`********************************************************************\n`);
 console.log(pokemon_.start(pok1.getType(), pok2.getType(), 75, 95));
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BM = void 0;
//********************************************************************************* */
// EJERCICIO 2
var BM = /** @class */ (function () {
    function BM(title, author, emailAuthor, keywords, abstract, publicationDate, editorial, countCitations) {
        if (author === void 0) { author = new Array(); }
        if (emailAuthor === void 0) { emailAuthor = new Array(); }
        if (keywords === void 0) { keywords = new Array(); }
        if (publicationDate === void 0) { publicationDate = new Array(3); }
        this.author = new Array();
        this.emailAuthor = new Array();
        this.keywords = new Array();
        this.publicationDate = new Array(3);
        this.title = title;
        this.author = author;
        this.emailAuthor = emailAuthor;
        this.keywords = keywords;
        this.abstract = abstract;
        this.publicationDate = publicationDate;
        this.editorial = editorial;
        this.countCitations = countCitations;
    }
    BM.prototype.getTitle = function () {
        return this.title;
    };
    /*
        getAuthor(){
          var aux: string = '';
          for (var i = 0; i < this.author.length; i++) {
            aux += this.author[i] + ', ';
          } console.log(`Authors: ${aux}`);
        }*/
    BM.prototype.getAbstract = function () {
        return this.abstract;
    };
    BM.prototype.getEditorial = function () {
        return this.editorial;
    };
    BM.prototype.getCitations = function () {
        return this.countCitations;
    };
    BM.prototype.referenceAPAWDOI = function () {
        /**
         * formato APA sin DOI:
         * Apellido [coma] inicial (es) del nombre del autor [punto] año entre paréntesis [punto] título del articulo [punto] título de
         * la Revista en cursivas [coma] volumen (número entre paréntesis) [coma] la referencia a las páginas [punto]. Recuperado DE
         * [insertar http: y el link]
         */
        console.log("Dahmani, I., Hifi, M., " + article1.getTitle + ", Ann Oper Res 298, 125\u2013147 (2021). https://doi.org/10.1007/s10479-019-03290-3");
    };
    return BM;
}()); //class BM ends
exports.BM = BM;
var article1 = new BM("A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs", ["Isma Dahmani", "Mhand Hifi"], ["Isma Dahmani", "Mhand Hifi"], ["Descent", "Heuristic", "Knapsack", "Optimization"], "The knapsack problem arises in a variety of real world applications, including flexible manufacturing systems, railway stations, hydrological studies and others. In this paper, we propose a descent method-based heuristic for tackling a special knapsack problem: the binary quadratic knapsack with conflict graphs. The proposed method combines (i) an intensification search with a descent method for enhancing the accuracy of the solutions and (ii) a diversification strategy which is used for enlarging the search space. The method uses degrading and re-optimization strategies in order to reach a series of diversified solutions. The performance of the proposed method is evaluated on benchmark instances taken from the literature, where its achieved results are compared to those reached by both GLPK solver and the best method available in the literature. The method seems very competitive, where it is able to achieve 37 new lower bounds.", [17, 7, 2019], "Springer Nature", 2);
var databaseArticles = [article1];
console.log("********************************************************************\n");
databaseArticles.forEach(function (article) {
    console.log("Title: \"" + article.getTitle() + "\"\n");
    console.log("Abstract: " + article.getAbstract() + "\n");
    console.log("Editorial: " + article.getEditorial() + "\n");
    //console.log(`${article.getAuthor()}\n`);
    console.log("Citations: " + article.getCitations() + "\n");
    console.log("\nReference APA formar without DOI: " + article.referenceAPAWDOI() + "\n");
});
