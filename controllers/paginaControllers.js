import { Viaje } from '../models/Viaje.js';
import {Testimonial} from "../models/Testimoniales.js";

const paginaInicio = (req, res) => { // req - lo que enviamos --- res - lo que responde
    res.render('inicio', {
        pagina: 'Inicio',
        clase: 'home'
    });
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar DB
    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
       console.error(error); 
    }

    
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({where: { slug }});

        res.render('viaje-destino', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.error(error);
    }

    /*
    res.render('testimoniales',{
        pagina: 'Testimoniales'
    });*/
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}

