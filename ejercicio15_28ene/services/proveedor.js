import {proveedores} from './../BBDD_provicional/bbdd.js'
class Proveedor{
    dni

    constructor(dni){
        this.dni = dni
    }

    getProveedor(){
        return proveedores.get(Number(this.dni))
    }
}
export default Proveedor;
