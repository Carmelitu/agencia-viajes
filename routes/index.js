import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales } from '../controllers/paginaControllers.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/testimoniales', paginaTestimoniales);

export default router;
