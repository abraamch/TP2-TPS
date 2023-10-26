class Modelo {
constructor () {
    this.libros = []
}
obtenerLibros = (id) => {
    
    if (id) {
            const libro = this.libros.find(libro => libro.id == id ) 
               
                   return libro || {}
            } 
            return this.libros 
    
    }
    
    agregarLibro = (libro) => {
        libro.id = (this.libros.length > 0 ? this.libros[this.libros.length - 1].id : 0) + 1
        this.libros.push(libro)
        return libro
    }
    borrarLibro = (id) => {
         const index = this.libros.findIndex(libro => libro.id == id) 
        if (index != -1 ) {
          libro = this.libros.splice(index, 1)[0]
          return libro
        } else { return null } 
    }
    modificarLibro = (id , libro) => {
        libro.id = id;
    
        const index = this.libros.findIndex(libro => libro.id == id);
    
        if (index != -1) {
            const libroAnt = this.libros[index];
            const libroNuevo = { ...libroAnt, ...libroNuevo };
    
            this.libros.splice(index, 1, libroNuevo);
            return libroNuevo
        } else {
           
            return null
        }
    }

} export default Modelo