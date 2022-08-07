const listaProductos = () => fetch("http://localhost:3000/producto").then(( respuesta) => respuesta.json());

const crearProducto = (url,nombre,precio) => {
    return fetch("http://localhost:3000/producto", {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({url,nombre,precio}),
    });
  }


export const productServices = {
    listaProductos,
    crearProducto
  };