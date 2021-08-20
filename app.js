const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

const puerto = process.env.PORT || 3000 //Busca el puerto en el entorno o sino usar el 3000

app.listen(puerto, () => {
    console.log("Servidor corriendo en puerto ${puerto}")
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
})
