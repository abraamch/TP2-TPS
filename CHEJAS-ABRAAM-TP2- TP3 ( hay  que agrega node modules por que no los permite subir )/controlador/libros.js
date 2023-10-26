import Servicio from "../sevicio/libros.js"
class Controlador {
constructor() {
    this.servicio = new Servicio ()
}

obtenerLibros = (req, res) => {
    const {id} = req.params
    const libro = this.servicio.obtenerLibros(id)
    res.json(libro) 
}

agregarLibro = (req, res) => {
    const libro = req.body
    const libroAgregado = this.servicio.agregarLibro(libro)
    res.json(libroAgregado)
}
borrarLibro = (req, res) => {
    const {id} = req.params
    const libro = this.servicio.borrarLibro(id)
    if (libro != null ) {
        res.json(libro) 
    }
   else {
    res.status(404).json({ error: "libro no encontrado" })
   }

}
modificarLibro = (req, res) => {
  const id = req.params
  const nuevoLibro = req.body
  const libro = this.servicio.modificarLibro(id, nuevoLibro)

  if (libro != null) {
      res.json(libro)
  }
  else {
    res.status(404).json({ error: "libro no encontrado" })
  }
}
} export default Controlador