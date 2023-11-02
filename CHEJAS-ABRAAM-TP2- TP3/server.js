import express from 'express'
import Router from './router/libros.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.use('/libros', new Router().start()) 

app.get('', (req, res) => 
res.send("<H1 >HOLA </H1>"))



 const port = 8080
 app.listen(port , () => console.log(`el servidor esta escuchando en el port ${port}`)) 