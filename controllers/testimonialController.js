import {Testimonial} from "../models/Testimoniales.js"

const guardarTestimonial = async (req, res) => {

    // Validar
    const {nombre, correo, mensaje} = req.body;
    const errores = [];

    if (nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'});
    }
    if (correo.trim() === ''){
        errores.push({mensaje: 'El correo está vacío'});
    }
    if (mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje está vacío'});
    }

    if(errores.length > 0){
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // Almacenarlo en la DB
        try {
            await Testimonial.create({
                nombre, correo, mensaje
            })
            res.redirect('/testimoniales');
        } catch (error) {
            console.error(error);
        }

    }

}

export {guardarTestimonial};