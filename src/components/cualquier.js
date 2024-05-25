import http from 'http'

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Verificar si la solicitud es POST
  if (req.method === 'POST') {
    let data = '';

    // Escuchar eventos de datos en la solicitud
    req.on('data', (chunk) => {
      // Concatenar los datos recibidos
      data += chunk;
    });

    // Escuchar el evento 'end', que se dispara cuando se completa la recepción de datos
    req.on('end', () => {
      // Procesar los datos recibidos (en este ejemplo, simplemente los enviamos de vuelta como respuesta)
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(data);
      console.log("hola");
    });
  } else {
    // Si la solicitud no es POST, responder con un código de estado 405 (Método no permitido)
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.end('Solo se permiten solicitudes POST');
  }
});

// Escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
