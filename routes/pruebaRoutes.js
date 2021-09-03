let express = require ("express"); //Llama a la funcionalidad express

let pruebaController = require("../controllers/pruebaControllers") //Requiere el controlador

let router = express.Router();

router.get("/:idController", pruebaController.metodoX); //Con la funcionalidad router de express, busca el método adentro del controlador.
router.get("/:idController", pruebaController.funcionY); 

module.exports = router;