import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    // console.log(nombre);
    // console.log(email);

    productServices.crearProducto(url,categoria,nombre,precio,descripcion).then((respuesta) => {
        window.location.href = "productos.html"
        console.log("Producto agregado")
    }).catch(err => console.log(err))
})