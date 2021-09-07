let express = require ("express"); //Llama a la funcionalidad express
let router = express.Router();

let pruebaController = require("../controllers/pruebaControllers") //Requiere el controlador

router.get("/testController", pruebaController.productDetail); //Con la funcionalidad router de express, busca el método adentro del controlador.

module.exports = router;