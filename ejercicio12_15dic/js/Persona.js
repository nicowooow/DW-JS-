class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(){
        return this.nombre
    }

    getEdad(){
        return this.edad
    }

    saluda(){
        return `hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`;
    }

    saludarA(persona){
        return `hola ${persona.getNombre()} , soy ${this.nombre}`;
    }

    cumplirAnios(){
        this.edad+=1;
        return null;
    }
}


