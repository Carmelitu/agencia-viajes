import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // req - lo que enviamos --- res - lo que responde
    res.render('inicio');
})

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
})

router.get('/contacto', (req, res) => {
    res.render('Contacto');
})

export default router;
