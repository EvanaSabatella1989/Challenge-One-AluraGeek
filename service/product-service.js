const listaProductos = () => fetch("http://localhost:3000/producto").then(( respuesta) => respuesta.json());

const crearProducto = (url,nombre,precio) => {
    return fetch("http://localhost:3000/producto", {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({url,nombre,precio,id: uuid.v4()}),
    });
  }

  const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then( respuesta => respuesta.json()
    )
  
    
  }


export const productServices = {
    listaProductos,
    crearProducto,
    detalleProducto
  };