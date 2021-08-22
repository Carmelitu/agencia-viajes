
const paginaInicio = (req, res) => { // req - lo que enviamos --- res - lo que responde
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = (req, res) => {
    res.render('viajes',{
        pagina: 'Viajes'
    });
}

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales',{
        pagina: 'Testimoniales'
    });
}



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}

