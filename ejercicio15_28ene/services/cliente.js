import {clientes} from './../BBDD_provicional/bbdd.js'

class Cliente{
    dni

    constructor(dni){
        this.dni = dni
    }

    getCliente(){
        console.log("cliente DNI==> ",this.dni);
        
        return clientes.get(Number(this.dni))
    }

}

export default Cliente;