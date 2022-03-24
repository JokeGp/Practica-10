const express = require("express"); // inyeccion de la dependencia
const app = express(); // creamos y guardamos una app express

const port = process.env.PORT || 3000; // setteamos el puerto 300 para que pueda escuchar al servidor

// creación primera ruta (a nivel de raiz), hekki woorld
app.get("/", function (req, res) {
  res.send("<html><head></head><body><h4>Hola Mundo</h4></body></html>");
});

// segunda ruta /api, regresa un objeto JSON
app.get("/api", (req, res) => {
  res.json({ nombre: "John", apellido: "Doe" });
});

// app.get("/Batman", (req, res) => {
//     res.json({ nombre: "Robert", apellido: "Pattinson" });
//   });

// tercera ruta recibe un parametro
app.get("/person/:id", function (req, res) {
  // con el : le asignamos o le decimos guarde el parametro en id
  res.send(
    // concatenamos un html pero utilizando req accedemos a los parametros guardados en params y le pedimos id
    `<html><head></head><body><h1>Person: ` +
      req.params.id +
      `<h1></body></html>`
  ); // al final lo imprime..
});

app.listen(port); //levantamos el servidor y lo ponemos a que escuche el puerto
