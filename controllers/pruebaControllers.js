const controlador01 = {
    productDetail: (req, res) => {
        return res.render('testIndex', {
            products: [
                {
                    productImage:"./public/images/img-tv-samsung-smart.jpg",
                    productName: "Macbook pro",
                    productPrice: "$19.000",
                    productOffer: "20%"
                },
                {
                    productImage:"./public/images/img-tv-samsung-smart.jpg",
                    productName: "Cafetera Moulinex",
                    productPrice: "$5.000",
                    productOffer: "15%"
                },
                {
                    productImage:"./public/images/img-tv-samsung-smart.jpg",
                    productName: "Smart TV",
                    productPrice: "$20.000",
                    productOffer: "10%"
                },

            ]
        })
    } //metodoX es una función que manda un mensaje cuando es requerida con el id "idController"
} //Es un objeto literal, que tiene métodos (funciones) adentro

module.exports = controlador01; //Exporto el objeto literal para hacerlo visible