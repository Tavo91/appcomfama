const express = require("express");
const app = express();
const apiRouter = require('./server')
const cors = require("cors");



const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => res.send("Hola Mundo"));


apiRouter(app)






app.listen(port, (req, res) => {
  console.log(`Escuchando en el puerto ${port}`);
});
