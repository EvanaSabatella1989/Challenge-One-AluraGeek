import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    
    const id = url.searchParams.get("id");

    if(id == null){
        // window.location.href = "/screens/error.html"
        alert("No se encuentra el detalle de este producto");
    }

    
    
    const urlProducto = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const categoria = document.querySelector("[data-categoria]");
    const descripcion = document.querySelector("[data-descripcion]");

    try{
        const producto = await productServices.detalleProducto(id);
        
        // if(producto.urlProducto && producto.nombre && producto.precio && producto.categoria&& producto.descripcion){
        //     urlProducto.value = producto.url;
        //     nombre.value = producto.nombre;
        //     precio.value = producto.precio;
        //     categoria.value = producto.categoria;
        //     descripcion.value = producto.descripcion;
        // }else{
        //     throw new Error();
        // }
        if( producto.nombre && producto.precio && producto.categoria&& producto.descripcion){
            
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            categoria.value = producto.categoria;
            descripcion.value = producto.descripcion;
        }else{
            throw new Error();
        }
        

    }catch(error){
        
        window.location.href = "/productos.html"
        // alert("Error")
    }
    
   
};

obtenerInformacion();