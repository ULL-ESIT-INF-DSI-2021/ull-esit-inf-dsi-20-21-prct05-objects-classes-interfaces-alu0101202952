/**
 * ### EJERCICIOs 3:
 * Class Vehicle**
 * #### ¿En qué consiste?
 * Queremos guardar los datos de los vehículos en general
 * @param modelo del vehículo
 * @param antiguedad en años del vehiculo
 * @param color del mismo
 * @param marca 
 * @param tipo si es turismo, sub, todoterreno, guagua
 */
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
  
  /**
 * ### EJERCICIOs 3:
 * Interfaz Movable**
 * #### ¿En qué consiste?
 * Queremos guardar los coches que circulan y las propiedades por las cuales circulan
 * @param numRuedas con el numero de ruedas
 * @param motor tipo de motor gasolina, eléctruco, diesel o híbrido
 * @param cv con la potencia en caballos
 */
  export interface Movable{
    numRuedas: number;
    motor: string;
    cv: number;
  }
  
  /**
 * ### EJERCICIOs 3:
 * Class VehiclesPrivate que hereda de Vehicles**
 * #### ¿En qué consiste?
 * Queremos guardar los datos de los vehículos privados
 * PARÁMETROS HEREDADOS
 * @param modelo del vehículo
 * @param antiguedad en años del vehiculo
 * @param color del mismo
 * @param marca 
 * @param tipo si es turismo, sub, moto, todoterreno...
 * @param numRuedas con el numero de ruedas
 * @param motor tipo de motor gasolina, eléctruco, diesel o híbrido
 * @param cv con la potencia en caballos
 */
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
  

/**
 * ### EJERCICIOs 3:
 * Class VehiclesPublic que hereda de Vehicles**
 * #### ¿En qué consiste?
 * Queremos guardar los datos de los vehículos publicos
 * PARÁMETROS HEREDADOS
 * @param modelo del vehículo
 * @param antiguedad en años del vehiculo
 * @param color del mismo
 * @param marca 
 * @param tipo si es turismo, sub, moto, todoterreno...+
 * @param capacidadPasajeros con el numero de pasajeros en caso de guagua, tren...
 * @param numRuedas con el numero de ruedas
 * @param motor tipo de motor gasolina, eléctruco, diesel o híbrido
 * @param cv con la potencia en caballos
 */
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
  
/**
 * ### EJERCICIOs 3:
 * Class Street que hereda de Vehicles**
 * #### ¿En qué consiste?
 * Queremos guardar los datos de los vehículos privados y públcos que circulan por la calle
 * PARÁMETROS HEREDADOS
 * @param calle 
 * @param localidad 
 * @param modelo del vehículo
 * @param antiguedad en años del vehiculo
 * @param color del mismo
 * @param marca 
 * @param tipo si es turismo, sub, moto, todoterreno...
 * @param cantidadCoche el numero de coches que circulan
 * @param velocidad que circulan
 */
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
  