import {clientes} from './../BBDD_provicional/bbdd.js'

class Cliente{


    getCliente(dni){
        // console.log("cliente DNI==> ",dni);
        
        return clientes.get(Number(dni))
    }

}

export default new Cliente;