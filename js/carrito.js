
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
    let listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item.producto + ' ($' + item.precio + ') x ' + item.cantidad;
      listaCarrito.appendChild(li);
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



