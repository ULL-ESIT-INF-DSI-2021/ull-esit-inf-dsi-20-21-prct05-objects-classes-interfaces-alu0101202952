// EJERCICIO 1
/*
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
*/



 //********************************************************************************* */
 // EJERCICIO 2
 /*
 export class BM{
  private title: String;
  private author = new Array();
  private emailAuthor = new Array();
  private keywords = new Array();
  private abstract: String;
  private publicationDate = new Array(3);
  private editorial: String;
  private countCitations: number;

    constructor(title: String, author =new Array(), emailAuthor = new Array(), keywords = new Array(), abstract: String, publicationDate= new Array(3), editorial: String, countCitations: number) {
      this.title = title;
      this.author = author;
      this.emailAuthor = emailAuthor;
      this.keywords = keywords;
      this.abstract = abstract;
      this.publicationDate = publicationDate;
      this.editorial = editorial;
      this.countCitations = countCitations;
    }

    getTitle(){
      return this.title;
    }

    getAuthor(){
      var aux: string = '';
      for (var i = 0; i < this.author.length; i++) {
        aux += this.author[i] + ', ';
      } console.log(`Authors: ${aux}`);
    }

    getEmailAuthor(){
      var aux: string = '';
      for (var i = 0; i < this.emailAuthor.length; i++) {
        aux += this.emailAuthor[i] + ', ';
      } console.log(`Contact (email): ${aux}`);
    }

    getKeywords(){
      var aux: string = '';
      for (var i = 0; i < this.keywords.length; i++) {
        aux += this.keywords[i] + ', ';
      } console.log(`Keywords: ${aux}`);
    }

    getAbstract(){
      return this.abstract;
    }

    getPublicationDate(){
      var aux: string = '';
      for (var i = 0; i < this.publicationDate.length; i++) {
        aux += this.publicationDate[i] + ', ';
      } console.log(`Publication Date of article: ${aux}`);
    }

    getEditorial(){
      return this.editorial;
    }

    getCitations(){
      return this.countCitations;
    }
    
    public referenceAPAWDOI() {
      console.log(`Dahmani, I., Hifi, M., ${article1.getTitle()}, Ann Oper Res 298, 125–147 (2021). https://doi.org/10.1007/s10479-019-03290-3`);
    }

    // Mostrar por la consola la información incluida en la base de datos en formato tabla
    public articleTable(title: String, author =new Array(), emailAuthor = new Array(), keywords = new Array(), abstract: String, publicationDate= new Array(3), editorial: String, countCitations: number){
      this.title = title;
      this.author = author;
      this.emailAuthor = emailAuthor;
      this.keywords = keywords;
      this.abstract = abstract;
      this.publicationDate = publicationDate;
      this.editorial = editorial;
      this.countCitations = countCitations;
    }

  } //class BM ends


  let article1 = new BM("A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs", ["Isma Dahmani", "Mhand Hifi"], ["IsmaDahmani@gmail.com", "MhandHifi@gmail.com"], ["Descent", "Heuristic", "Knapsack", "Optimization"], "The knapsack problem arises in a variety of real world applications, including flexible manufacturing systems, railway stations, hydrological studies and others. In this paper, we propose a descent method-based heuristic for tackling a special knapsack problem: the binary quadratic knapsack with conflict graphs. The proposed method combines (i) an intensification search with a descent method for enhancing the accuracy of the solutions and (ii) a diversification strategy which is used for enlarging the search space. The method uses degrading and re-optimization strategies in order to reach a series of diversified solutions. The performance of the proposed method is evaluated on benchmark instances taken from the literature, where its achieved results are compared to those reached by both GLPK solver and the best method available in the literature. The method seems very competitive, where it is able to achieve 37 new lower bounds.", [17, 7, 2019], "Springer Nature" , 2);

  let article2 = new BM("On exact solution approaches for bilevel quadratic 0–1 knapsack problem", ["Gabriel Lopez Zenarosa", "Oleg A. Prokopyev", "Eduardo L. Pasiliao "], ["GabrielLopezZenarosa@gmail.com", "OlegAProkopyev@gmail.com", "EduardoLPasiliao@gmail.com"], ["Bilevel programming", "Bilevel knapsack problem","Quadratic knapsack problem", "Dynamic programming"], "We consider the bilevel quadratic knapsack problem (BQKP) that model settings where a leader appropriates a budget for a follower, who solves a quadratic 0–1 knapsack problem. BQKP generalizes the bilevel knapsack problem introduced by Dempe and Richter (Cent Eur J Oper Res 8(2):93–107, 2000), where the follower solves a linear 0–1 knapsack problem. We present an exact-solution approach for BQKP based on extensions of dynamic programs for QKP bounds and the branch-and-backtrack algorithm. We compare our approach against a two-phase method computed using an optimization solver in both phases: it first computes the follower’s value function for all feasible leader’s decisions, and then solves a single-level, value-function reformulation of BQKP as a mixed-integer quadratically constrained program. Our computational experiments show that our approach for solving BQKP outperforms the two-phase method computed by a commercial state-of-the-art optimization software package.",[4, 8, 2018], "Springer Nature" , 1);


  let databaseArticles = [article1, article2];

  console.log(`********************************************************************\n`);
  databaseArticles.forEach((article) => {
    console.log(`Title: "${article.getTitle()}"\n`);
    console.log(`${article.getAuthor()}\n`);
    console.log(`${article.getEmailAuthor()}\n`);
    console.log(`${article.getKeywords()}\n`);
    console.log(`Abstract: ${article.getAbstract()}\n`);
    console.log(`${article.getPublicationDate()}\n`);
    console.log(`Editorial: ${article.getEditorial()}\n`);
    console.log(`Citations: ${article.getCitations()}\n`);
    console.log(`\nReference APA formar without DOI: ${article.referenceAPAWDOI()}\n`);

    console.log(`********************************************************************\n`);
    console.log(`${article.articleTable(article.getTitle(), [article.getAuthor()], [article.getEmailAuthor()], [article.getKeywords()], article.getAbstract(), [article.getPublicationDate()], article.getEditorial() , article.getCitations())}\n`);

    console.table(article1);

    console.log(`\n********************************************************************\n`);
    
 });   
 
*/


 //********************************************************************************* */
 //EJERCICIO 3
 /*
export class Vehicles {
  static modelo: string;
  static antiguedad: number;
  static color: string;
  static marca: string;
  static tipo: string;
  constructor(marca: string, modelo: string, antiguedad: number, color: string, tipo:string){
    Vehicles.marca = marca;
    Vehicles.modelo = modelo;
    Vehicles.antiguedad = antiguedad;
    Vehicles.color = color;
    Vehicles.tipo = tipo;
  }
} //end class Vehicles

export interface Movable{
  numRuedas: number;
  motor: string;
  cv: number;
}

export class VehiclesPrivate extends Vehicles implements Movable {
  static tipo: string;
  static numRuedas: number;
  static motor: string;
  static cv: number;
  constructor(marca: string, modelo: string, antiguedad: number, color: string, tipo:string, public readonly numRuedas: number, public readonly motor: string, public readonly cv: number){
    super(marca, modelo,antiguedad,color, tipo);
    VehiclesPrivate.marca = marca;
    VehiclesPrivate.modelo = modelo;
    VehiclesPrivate.antiguedad = antiguedad;
    VehiclesPrivate.color = color;
    VehiclesPrivate.tipo = tipo;
    VehiclesPrivate.numRuedas = numRuedas;
    VehiclesPrivate.motor = motor;
    VehiclesPrivate.cv = cv;
  }
  getMarca(){
    return VehiclesPrivate.marca;
  }
  getModelo(){
    return VehiclesPrivate.modelo;
  }
  getAntiguedad(){
    return VehiclesPrivate.antiguedad;
  }
  getColor(){
    return VehiclesPrivate.color;
  }
  getTipo(){
    return VehiclesPrivate.tipo;
  }
  getNumRuedas(){
    return VehiclesPrivate.numRuedas;
  }
  getMotor(){
    return VehiclesPrivate.motor;
  }
  getCV(){
    return VehiclesPrivate.cv;
  }
} //end class VehiclesPrivate

export class VehiclesPublic extends Vehicles implements Movable {
  static tipo: string;
  static capacidadPasajeros : number;
  static numRuedas: number;
  static motor: string;
  static cv: number;
  constructor(marca: string, modelo: string, antiguedad: number, color: string, tipo:string, capacidadPasajeros : number, public readonly numRuedas: number, public readonly motor: string, public readonly cv: number){
    super(marca, modelo,antiguedad,color, tipo);
    VehiclesPublic.marca = marca;
    VehiclesPublic.modelo = modelo;
    VehiclesPublic.antiguedad = antiguedad;
    VehiclesPublic.color = color;
    VehiclesPublic.tipo = tipo;
    VehiclesPublic.capacidadPasajeros = capacidadPasajeros;
    VehiclesPublic.numRuedas = numRuedas;
    VehiclesPublic.motor = motor;
    VehiclesPublic.cv = cv;
  }
  getMarca(){
    return VehiclesPublic.marca;
  }
  getModelo(){
    return VehiclesPublic.modelo;
  }
  getAntiguedad(){
    return VehiclesPublic.antiguedad;
  }
  getColor(){
    return VehiclesPublic.color;
  }
  getTipo(){
    return VehiclesPublic.tipo;
  }
  getCapacidad(){
    return VehiclesPublic.capacidadPasajeros;
  }
  getNumRuedas(){
    return VehiclesPublic.numRuedas;
  }
  getMotor(){
    return VehiclesPublic.motor;
  }
  getCV(){
    return VehiclesPublic.cv;
  }
}

export class Street extends Vehicles{
  static calle: string;
  static localidad: string;
  static velocidad: number;
  static cantidadCoche: number;
  constructor(calle: string, localidad: string, marca: string, modelo: string, antiguedad: number, color: string, tipo:string, cantidadCoche: number, velocidad: number){
    super(marca, modelo,antiguedad,color, tipo);
    Street.calle = calle;
    Street.localidad = localidad;
    Street.velocidad=velocidad;
    Street.cantidadCoche = cantidadCoche;
  }
  getVelocidad(){
    return Street.velocidad;
  }
  
}


let vehicle1 = new VehiclesPrivate("Seat", "Ibiza", 5, "azul", "turismo", 4, "motor gasolina", 45);
let titsa = new VehiclesPublic("Scania", "K380", 8, "verde", "guagua", 55, 4, "motor diesel", 115);
let coche1 = new Street("Benito Pérez Armas", "Santa Cruz de Tenerife", "Mazda", "CX5", 7, "rojo", "todoterreno", 2, 45);

let databaseVehiclesPrivate = [vehicle1];
let databaseVehiclesPublic = [titsa];
let databaseVehiclesStreet = [coche1];

console.log(`***********************************************************************************`);
console.log(`VEHÍCULOS PRIVADOS`);
console.log(`***********************************************************************************`);

databaseVehiclesPrivate.forEach((vehiclepr) => {
  console.log(`+ El vehículo privado es un ${vehiclepr.getMarca()} ${vehiclepr.getModelo()} con ${vehiclepr.getAntiguedad()} años, color ${vehiclepr.getColor() }, clase ${vehiclepr.getTipo()}, con ${vehiclepr.getNumRuedas()}, tipo ${vehiclepr.getMotor()} con una potencia en caballos de vapor de ${vehiclepr.getCV()}`);
});

console.log(`\n\n***********************************************************************************`);
console.log(`VEHÍCULOS PÚBLICOS`);
console.log(`***********************************************************************************`);

databaseVehiclesPublic.forEach((vehiclepu) => {
  console.log(`+ El vehículo público es un ${vehiclepu.getMarca()} ${vehiclepu.getModelo()} con ${vehiclepu.getAntiguedad()} años, color ${vehiclepu.getColor()}, clase ${vehiclepu.getTipo()}, con capacidad de ${vehiclepu.getCapacidad()} pasajeros, con ${vehiclepu.getNumRuedas()}, tipo ${vehiclepu.getMotor()} con una potencia en caballos de vapor de ${vehiclepu.getCV()}`);
});

console.log(`\n\n***********************************************************************************`);
console.log(`VEHÍCULOS CIRCULAN POR CALLE`);
console.log(`***********************************************************************************`);

databaseVehiclesStreet.forEach((vehiclestr) => {
  console.log(`+ El vehículo ${coche1} circula a ${vehiclestr.getVelocidad()} KM/h`);
});
*/



//EJERCICIO PE-102
export class Rational{
  private numerador: number;
  private denominador: number;
  constructor(numerador: number, denominador: number){
    this.numerador = numerador;
    this.denominador = denominador;    
  }

  getNumerador(){
    return this.numerador;
  }

  getDenominador(){
    return this.denominador;
  }

  setNumerador(numerador: number){
    this.numerador = numerador;
  }
  setDenominador(denominador: number){
    this.denominador = denominador;
  }

}