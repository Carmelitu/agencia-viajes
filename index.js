const express = require('express');

const app = express();

// Definir Puerto

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor Funcionando en el puerto ${port}`);
});