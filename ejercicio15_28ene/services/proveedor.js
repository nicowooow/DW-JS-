import {proveedores} from './../BBDD_provicional/bbdd.js'
class Proveedor{

    getProveedor(dni){
        return proveedores.get(Number(dni))
    }
}
export default new Proveedor;
