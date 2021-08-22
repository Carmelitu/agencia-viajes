import express from 'express';
import router from './routes/index.js';


const app = express();

// Definir Puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    
    next();
})

// Definir carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);




app.listen(port, () => {
    console.log(`Servidor Funcionando en el puerto ${port}`);
});