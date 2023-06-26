document.getElementById("btnEnviar").addEventListener("click", function(event) {
    event.preventDefault();
  
    var id = document.getElementById("txtID").value;
    var nombre = document.getElementById("txtNombre").value;
    var email = document.getElementById("txtEmail").value;
    var telefono = document.getElementById("txtTel").value;
    var ciudad = document.getElementById("txtCiudad").value;

    if (id === "" || nombre === "" || email == "" || telefono == "" || ciudad == "") {
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