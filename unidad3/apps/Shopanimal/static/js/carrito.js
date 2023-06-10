let carritoContainer = document.getElementById('carrito-container');

function abrirCarrito() {
  carritoContainer.classList.add('open');
}

function cerrarCarrito() {
  carritoContainer.classList.remove('open');
}

function agregarAlCarrito(producto, precio) {
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
      carrito.push({ producto: producto, precio: precio, cantidad: 1 });
      alert("Producto agregado correctamente")
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

