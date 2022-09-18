const express = require('express');
const app = express();
const morgan = require('morgan');


// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server in port ${app.get('port')}`);
});

