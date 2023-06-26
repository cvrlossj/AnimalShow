const formulario = document.querySelectorAll("#agregarProductoForm, #editarProductoForm");
const toastLiveExample = document.getElementById('toastError');
const toastErrorSku = document.getElementById('toastErrorSku');

formulario.forEach((form) => {
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    sku = document.getElementById("txtSku").value;
    errorSku = false

    if ((document.getElementById("txtSku").value.length == 0) || 
    (document.getElementById("txtProducto").value.length == 0) || 
    (document.getElementById("txtStock").value.length == 0) || 
    (document.getElementById("txtPrecio").value.length == 0) || 
    (document.getElementById("txtDesc").value.length == 0) ||
    (document.getElementById("cmbCat").value == "Seleccione") ||
    (document.getElementById("cmbPro").value == "Seleccione") || 
    (document.getElementById("txtImagen").value == 0)) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()

    }else{
      fetch('/api/productos')
      .then(response => response.json())
      .then(data => {
        const productos = data; // Obtén la lista de productos existentes
        console.log(productos);

        // Convertir la lista de productos en una lista temporal
        const listaTemporal = [];
        productos.forEach(producto => {
          listaTemporal.push(producto);
        });

        // Recorrer la lista temporal
        listaTemporal.forEach(producto => {
          console.log(producto); 
          if (!(producto.sku == sku)){
          }else{
            const toastSku = bootstrap.Toast.getOrCreateInstance(toastErrorSku)
            toastSku.show()
            errorSku = true
            return;
          }
        });

        if (errorSku == false){
          this.submit()
        }

      })
      .catch(error => {
        console.log(error);
      });
    }
  });
});