document.getElementById("btnEnviar").addEventListener("click", function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById("txtNombre").value;
    var email = document.getElementById("txtEmail").value;
    var asunto = document.getElementById("txtAsunto").value;
    var mensaje = document.getElementById("txtMensaje").value;

    if (nombre === "" || email === "" || asunto == "" || mensaje == "") {
      var alerta = document.getElementById("alerta");
      alerta.innerHTML = "Por favor, complete todos los campos.";
      alerta.style.display = "block";
      
      setTimeout(function() {
        alerta.style.display = "none";
      }, 6000);
    } else {

      document.getElementById("contactoForm").submit();
    }
  });