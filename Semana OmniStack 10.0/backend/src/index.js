const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://guilherme:09876gui@cluster0-3jnr5.mongodb.net/week?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET , POST , PUT , DELETE 

// Tipos de parâmetros:

// Query Params : req.query (Filtros, ordenação, paginação,...)
// Route Params: requst.params (Identificar um recurso na alteração ou na remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)


// porta que o servidor está rodando 
app.listen(3333);