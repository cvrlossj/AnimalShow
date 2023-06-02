

// Validaciones con JavaScript - Contacto
document.getElementById("valNombre").style.display = "none";
document.getElementById("valEmail").style.display = "none";
document.getElementById("valAsunto").style.display = "none";
document.getElementById("valMensaje").style.display = "none";


function validarForm(){
    let txtNombre = document.getElementById("txtNombre").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtAsunto = document.getElementById("txtAsunto").value;
    let txtMensaje = document.getElementById("txtMensaje").value;
    

    // Nombre
    if (txtNombre.length == 0){
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        document.getElementById("valNombre").style.display = "none";
    }

    // Email
    if (txtEmail.length == 0){
        document.getElementById("valEmail").style.display = "inline";
        document.getElementById("txtEmail").classList.add("is-invalid");
    }else{
        document.getElementById("txtEmail").classList.remove("is-invalid");
        document.getElementById("txtEmail").classList.add("is-valid");
        document.getElementById("valEmail").style.display = "none";
    }

    // Asunto
    if (txtAsunto.length == 0){
        document.getElementById("valAsunto").style.display = "inline";
        document.getElementById("txtAsunto").classList.add("is-invalid");
    }else{
        document.getElementById("txtAsunto").classList.remove("is-invalid");
        document.getElementById("txtAsunto").classList.add("is-valid");
        document.getElementById("valAsunto").style.display = "none";
    }

    // Mensaje
    if (txtMensaje.length == 0){
        document.getElementById("valMensaje").style.display = "inline";
        document.getElementById("txtMensaje").classList.add("is-invalid");
    }else{
        document.getElementById("txtMensaje").classList.remove("is-invalid");
        document.getElementById("txtMensaje").classList.add("is-valid");
        document.getElementById("valMensaje").style.display = "none";
    }

}


