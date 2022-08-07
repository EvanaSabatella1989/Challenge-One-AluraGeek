import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;

    // console.log(nombre);
    // console.log(email);

    productServices.crearProducto(url,nombre,precio).then((respuesta) => {
        window.location.href = "productos.html"
        console.log("Producto agregado")
    }).catch(err => console.log(err))
})