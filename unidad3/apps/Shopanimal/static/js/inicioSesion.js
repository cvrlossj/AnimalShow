const formulario = document.getElementById("iniciarSesionForm");
const toastLiveExample = document.getElementById('toastError')
const toastErrorCorreo = document.getElementById('toastErrorCorreo');
const toastErrorContra = document.getElementById('toastErrorContra');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    email = document.getElementById("txtEmail").value;
    contra = document.getElementById("txtPassword").value;
    errorCorreo = false
    errorContra = false

    if ((email.length == 0) || (contra.length == 0)) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()

    }else{
        fetch('/api/usuarios/')
            .then(response => response.json())
            .then(data => {
                const usuarios = data;
                console.log(usuarios);

                const listaTemporal = [];
                usuarios.forEach(usuario => {
                    listaTemporal.push(usuario);
                });

                listaTemporal.forEach(usuario => {
                    console.log(usuario);
                    if (!(usuario.email == email)) {
                    } else {
                        if (!(usuario.contrasenia == contra)){
                            errorContra = true
                            errorCorreo = true
                        }else{
                            errorCorreo = true
                        }
                    }
                });
                if (errorCorreo == false) {
                    const toastCorreo = bootstrap.Toast.getOrCreateInstance(toastErrorCorreo)
                    toastCorreo.show()
                }else if(errorContra == true){
                    const toastContra = bootstrap.Toast.getOrCreateInstance(toastErrorContra)
                    toastContra.show()
                }else{
                    this.submit()
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


})