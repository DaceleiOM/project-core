const compression = require('compression');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./src/routes/index');

// Configura Firebase y otras dependencias aquí

const app = express();
const port = process.env.PORT || 3000;

// Carga configuración solo en local
if (process.env.ENV === 'local') {
  require('dotenv').config(); // Solo carga .env en local
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}

require('./src/database/config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

// Rutas
app.use('/api', apiRouter);

// Ruta principal
app.get('/', (req, res) => (
  res.status(200).json({ message: 'core en línea!' })
));

// Exporta la aplicación para que Vercel pueda usarla como una función
module.exports = app;
