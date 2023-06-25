// Validaciones con Jquery - Registrarse
$(document).ready(function(){
    
})


$(function(){
    $("#registrarUsuarioForm").validate({
        rules:{
            txtNombre:{
                required: true,
                minlength: 5
            },
            txtApellido:{
                required: true,
                minlength:5
            },
            txtRut:{
                required: true,
                minlength:5,
            },
            txtEmail:{
                required: true,
                minlength: 5,
                email: true
            },
            txtTelefono:{
                required: true,
                minlength: 5,
            },
            txtPassword:{
                required: true
            },
            txtConfirmPass:{
                required: true
            }
        },


        messages:{
            txtNombre:{
                required: "Campo obligatorio",
                minlength: "El largo mínimo es de 5 caracteres"
            },
            txtApellido:{
                required: "Campo obligatorio",
                minlength: "El largo mínimo es de 5 caracteres"
            },
            txtRut:{
                required: "Campo obligatorio",
                minlength: "El largo mínimo es de 5 caracteres"
            },
            txtEmail:{
                required: "Campo obligatorio",
                email: "Ingrese un email válido"
            },
            txtTelefono:{
                required: "Campo obligatorio",
                minlength: "El largo mínimo es de 5 caracteres"
            },
            txtPassword:{
                required: "Campo obligatorio"
            },
            txtConfirmPass:{
                required: "Campo obligatorio"
            }
        }
    })


    $("#formAgregarProd").validate({
        rules:{
            txtSku:{
                required: true
            },
            txtProducto:{
                required: true
            },
            txtPrecio:{
                required: true
            },
            txtDesc:{
                required: true
            },
            txtStock:{
                required: true
            },
            txtProv:{
                required: true
            }

        },

        messages:{
            txtSku:{
                required: "Campo obligatorio"
            },
            txtProducto:{
                required: "Campo obligatorio"
            },
            txtPrecio:{
                required: "Campo obligatorio"
            },
            txtDesc:{
                required: "Campo obligatorio"
            },
            txtStock:{
                required: "Campo obligatorio"
            },
            txtProv:{
                required: "Campo obligatorio"
            }
        }
    })



})

function validarContrasenia(){
    var contrasenia = document.getElementById('txtPassword').value;
    var repetirContrasenia = document.getElementById('txtConfirmPass').value;
    var mensajeError = document.getElementById('mensajeError');

    if (contrasenia !== repetirContrasenia){
        mensajeError.style.display = 'block';
        return false;
    }else {
        mensajeError.style.display = 'none';
        return true;
    }
}

