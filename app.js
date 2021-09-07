const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine","ejs");

const puerto = process.env.PORT || 3000 //Busca el puerto en el entorno o sino usar el 3000

app.listen(puerto, () => {
    console.log(`Servidor corriendo en puerto ${puerto}`)
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
})
app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})
app.get("/register.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})
app.get("/producto01.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/producto01.html"));
})

//Rutas y controladores:

let rutasPrueba = require("./routes/pruebaRoutes")  // Guardo en variable ruta a requerir
app.use("/test", rutasPrueba) //Uso la ruta asignandola a una dirección http
