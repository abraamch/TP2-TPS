import Servicio from "../sevicio/libros.js"
class Controlador {
constructor() {
    this.servicio = new Servicio ()
}

obtenerLibros = async (req, res) => {
    const {id} = req.params
    const libro = await this.servicio.obtenerLibros(id)
    res.json(libro) 
}

agregarLibro = async (req, res) => {
    const libro = req.body
    const libroAgregado = await this.servicio.agregarLibro(libro)
    res.json(libroAgregado)
}
borrarLibro = async (req, res) => {
    const {id} = req.params
    const libro = await this.servicio.borrarLibro(id)
    if (libro != null ) {
        res.json(libro) 
    }
   else {
    res.status(404).json({ error: "libro no encontrado" })
   }

}
modificarLibro = async (req, res) => {
  const id = req.params
  const nuevoLibro = req.body
  const libro = await this.servicio.modificarLibro(id, nuevoLibro)

  if (libro != null) {
      res.json(libro)
  }
  else {
    res.status(404).json({ error: "libro no encontrado" })
  }
}
} export default Controlador