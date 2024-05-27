// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa cors
const app = express();
const PORT = 3000;

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Configura bodyParser para manejar datos JSON en el cuerpo de las solicitudes
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { name, fileName } = req.body;
  console.log('Nombre ingresado:', name);
  console.log('Nombre del archivo:', fileName);
  res.json({ message: 'Datos recibidos con éxito' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
