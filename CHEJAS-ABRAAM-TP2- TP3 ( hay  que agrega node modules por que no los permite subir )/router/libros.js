import express from 'express'
import Controlador from '../controlador/libros.js'
class Router{
   constructor() {
    this.router = express.Router()
    this.controlador = new Controlador()
   }

   start = () => {
    this.router.get('/:id?', this.controlador.obtenerLibros)
    this.router.post('/', this.controlador.agregarLibro)
    this.router.put('/:id?', this.controlador.modificarLibro)
    this.router.delete('/:id?', this.controlador.borrarLibro)
    
    
    return this.router
   }
} export default Router