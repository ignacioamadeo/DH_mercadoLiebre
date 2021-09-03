const controlador = {
    listado: function(){},
    funcionY: function(){},
    metodoX: (req, res) => {
        res.send("Soy una función y un método a la vez" + req.params.idController)
    } //metodoX es una función que manda un mensaje cuando es requerida con el id "idController"
} //Es un objeto literal, que tiene métodos (funciones) adentro

module.exports = controlador; //Exporto el objeto literal para hacerlo visible