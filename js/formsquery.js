// Validaciones con Jquery - Registrarse
$(document).ready(function(){
    
})


$(function(){
    $("#miFormulario").validate({
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
                minlength: "El largo mínimo es de 5 caracteres",
            },
            txtEmail:{
                required: "Campo obligatorio",
                email: "Ingrese un email válido"
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



