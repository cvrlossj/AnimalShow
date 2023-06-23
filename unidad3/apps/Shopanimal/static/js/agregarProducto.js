const formulario = document.getElementById("agregarProductoForm")

formulario.addEventListener('submit',function(evento){
    evento.preventDefault();


    if(document.getElementById("txtSku").ariaValueMax.length == 0){
        alert("Debe ingresar el codigo del producto.s");
        return;
    }else{
        this.onsubmit();
    }

    if(document.getElementById("txtProducto").ariaValueMax.length == 0){
        alert("Debe ingresar el nombre del producto.");
        return;
    }else{
        this.onsubmit();
    }

})