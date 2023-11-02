import Modelo from '../modelo/libros.js'

class Servicio{
constructor() {
    this.modelo = new Modelo()
}

obtenerLibros = async (id) => {
 return await this.modelo.obtenerLibros(id)
}

agregarLibro = async (libro) => {
    return await this.modelo.agregarLibro(libro)
}
borrarLibro = async (id) => {
    return await this.modelo.borrarLibro(id)
}
modificarLibro = async (id , libro) => {
  return await this.modelo.modificarLibro(id, libro)
}

} export default Servicio