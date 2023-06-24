document.getElementById("btnEnviar").addEventListener("click", function(event) {
    event.preventDefault();
  
    var id = document.getElementById("txtID").value;
    var nombre = document.getElementById("txtCategoria").value;
    var descripcion = document.getElementById("txtDescripcion").value;

    if (id === "" || nombre === "" || descripcion == "") {
      var alerta = document.getElementById("alerta");
      alerta.innerHTML = "Por favor, complete todos los campos.";
      alerta.style.display = "block";
      
      setTimeout(function() {
        alerta.style.display = "none";
      }, 6000);
    } else {

      document.getElementById("agregarCategoriaForm").submit();
    }
  });