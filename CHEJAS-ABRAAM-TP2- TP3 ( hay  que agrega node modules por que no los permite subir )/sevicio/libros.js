import Modelo from '../modelo/libros.js'

class Servicio{
constructor() {
    this.modelo = new Modelo()
}

obtenerLibros = (id) => {
return this.modelo.obtenerLibros(id)
}

agregarLibro = (libro) => {
    return this.modelo.agregarLibro(libro)
}
borrarLibro = (id) => {
    return this.modelo.borrarLibro(id)
}
modificarLibro = (id , libro) => {
  return this.modelo.modificarLibro(id, libro)
}

} export default Servicio