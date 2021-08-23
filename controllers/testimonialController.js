
const guardarTestimonial = (req, res) => {

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
        // Mostrar la vista
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        });
    }

}

export {guardarTestimonial};