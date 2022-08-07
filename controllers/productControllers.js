import { productServices } from "../service/product-service.js";

const crearNuevaLinea = (url,nombre,precio) => {
    const linea = document.createElement("div");
   const contenido = `
            <img class="star__wars__imagen" src="${url}" alt="">
            <h3 class="star__wars__nombre">${nombre}</h3>
            <p class="star__wars__precio">${precio}</p>
            <a class="star__wars__ver" href="#">Ver producto</a>
        `;
        linea.innerHTML = contenido;
        return linea;
};

const div = document.querySelector("[data-product]");

productServices.listaProductos().then((data) => {
    data.forEach(producto => {
        const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio);
        div.appendChild(nuevoProducto);
    });
}).catch((error) => alert("Ocurrio un error"));


