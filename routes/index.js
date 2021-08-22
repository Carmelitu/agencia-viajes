import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // req - lo que enviamos --- res - lo que responde
    res.render('inicio', {
        pagina: 'Inicio'
    });
})

router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
})

router.get('/viajes', (req, res) => {
    res.render('viajes',{
        pagina: 'Viajes'
    });
})

router.get('/testimoniales', (req, res) => {
    res.render('testimoniales',{
        pagina: 'Testimoniales'
    });
})

router.get('/contacto', (req, res) => {
    res.render('Contacto',{
        pagina: 'Contacto'
    });
})

export default router;
