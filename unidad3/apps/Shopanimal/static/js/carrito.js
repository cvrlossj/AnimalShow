let carritoContainer = document.getElementById('carrito-container');

function abrirCarrito() {
  carritoContainer.classList.add('open');
}

function cerrarCarrito() {
  carritoContainer.classList.remove('open');
}

function agregarAlCarrito(producto, precio, sku) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  let encontrado = false;

  // Buscar si el producto ya está en el carrito
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].producto === producto) {
      carrito[i].cantidad++;
      encontrado = true;
      break;
    }
  }

  // Si el producto no está en el carrito, agregarlo con cantidad 1
  if (!encontrado) {
    carrito.push({ producto: producto, precio: precio, cantidad: 1, sku: sku });
    alert("Producto agregado correctamente");
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarrito();
  calcularTotal();
}


  function vaciarCarrito() {
    localStorage.removeItem('carrito');
    actualizarCarrito();
    calcularTotal();
  }

  function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let tablaCarrito = document.getElementById('tabla-carrito');
    tablaCarrito.innerHTML = '';
  
    carrito.forEach(function(item) {
      let fila = document.createElement('tr');
  
      let columnaProducto = document.createElement('td');
      columnaProducto.textContent = item.producto;
      fila.appendChild(columnaProducto);
  
      let columnaPrecio = document.createElement('td');
      columnaPrecio.textContent = '$' + item.precio;
      fila.appendChild(columnaPrecio);
  
      let columnaCantidad = document.createElement('td');
      let badgeCantidad = document.createElement('span');
      badgeCantidad.classList.add('badge', 'bg-primary');
      badgeCantidad.textContent = item.cantidad;
      columnaCantidad.appendChild(badgeCantidad);
      fila.appendChild(columnaCantidad);
  
      tablaCarrito.appendChild(fila);
    });
  }
  
  function calcularTotal() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;

    carrito.forEach(function(item) {
      total += item.precio * item.cantidad;
    });

    document.getElementById('total-carrito').textContent = total;
  }

  window.onload = function() {
    actualizarCarrito();
    calcularTotal();
  };

  function realizarPago() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    // Verificar si hay suficiente stock para los productos en el carrito
    for (let i = 0; i < carrito.length; i++) {
      let producto = carrito[i];
  
      // Verificar si producto.sku tiene un valor válido
      if (producto.sku !== undefined) {
        verificarStock(producto)
          .then(response => response.json())
          .then(data => {
            if (data.stock >= producto.cantidad) {
              // Si hay suficiente stock, realizar la actualización del stock en la API.
              actualizarStockAPI(producto, producto.cantidad);
              const pagoExitoso = "El pago se ha realizado con éxito."
              alert(pagoExitoso);
              localStorage.removeItem('carrito');
              calcularTotal();
              actualizarCarrito();
              
            } else {
              // Si no hay suficiente stock, mostrar un mensaje de error.
              const mensajeError = `No hay suficiente stock para el producto: ${producto.producto}. Stock disponible: ${data.stock}`;
              alert(mensajeError);
            }
          })
          .catch(error => {
            alert("Error al verificar el stock del producto: " + producto.producto);
            console.error(error);
          });
  
      } else {
        // El producto.sku no tiene un valor válido
        console.log("El producto no tiene un SKU válido:", producto);
      }
    }
  

  }
  
  
  function verificarStock(producto) {
    const url = 'http://127.0.0.1:8000/api/productos/' + producto.sku + '/';
    return fetch(url);
  }
  
  
  
  function actualizarStockAPI(producto, cantidad) {
    const url = 'http://127.0.0.1:8000/api/productos/' + producto.sku + '/';
    const data = {
      cantidad: cantidad
    };
  
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Stock actualizado:", data);
      })
      .catch(error => {
        console.error("Error al actualizar el stock:", error);
      });
  }
  
  
