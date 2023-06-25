document.getElementById("btnEnviar").addEventListener("click", function(event) {
    event.preventDefault();
  
    var sku = document.getElementById("txtSku").value;
    var producto = document.getElementById("txtProducto").value;
    var precio = document.getElementById("txtPrecio").value;
    var descripcion = document.getElementById("txtDesc").value;
    var stock = document.getElementById("txtStock").value;
    var categoria = document.getElementById("cmbCat").value;
    var proveedor = document.getElementById("cmbPro").value;
    var imagen = document.getElementById("txtImagen").value;
    
    if (sku === "" || producto === "" || precio == "" || descripcion == "" || stock == "" || categoria == "Seleccionar" || proveedor == "Seleccionar" || imagen == "") {
      var alerta = document.getElementById("alerta");
      alerta.innerHTML = "Por favor, complete todos los campos.";
      alerta.style.display = "block";
      
      setTimeout(function() {
        alerta.style.display = "none";
      }, 6000);
    } else {

      document.getElementById("agregarProductoForm").submit();
    }
    
  });


