$(document).ready(function(){

});


// Ocultar Elemento publicidad - sin actualizar la página 
$("#ocultar").on("click",function(){
    $("#pb").slideUp();
})

// Mostrar Elemento publicidad - sin actualizar la página 
$("#mostrar").on("click",function(){
    $("#pb").slideDown();
})



// Reloj en tiempo real
function mostrarHora() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();
    
    hora = (hora < 10 ? "0" : "") + hora;
    minuto = (minuto < 10 ? "0" : "") + minuto;
    segundo = (segundo < 10 ? "0" : "") + segundo;
    
    var horaActual = hora + ":" + minuto + ":" + segundo;
    
    document.getElementById("reloj").innerHTML = horaActual;
}

setInterval(mostrarHora, 1000);  



// Api - Weather (Obtener la temperatura)

let lon;
//creamos varible de longitud
let lat;
//creamos variable de latitud
let temperatura = document.querySelector(".temp")
//aqui se obtiene el elemento de html temp para asi rellenarlo posteriormente con la api
let loc = document.querySelector(".location")
//locacion acutal que tendremos
const kelvin = 273.15


window.addEventListener("load",()=>{


if(navigator.geolocation){
//si navegador que se esta utilizando tiene una locacion

navigator.geolocation.getCurrentPosition((position) =>{
//metodo para obtener la posicion actual
// esto es para definir las variables de logitud y latitud


        console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;


//declarar constante que sera la id de la api

const api ="6cd2f110df5f8fd17f5d67e45db69716";

const url_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=${api}`;

//para hacer peticiones
fetch(url_api).then((response)=>{

    return response.json();
})
.then((data)=>{

console.log("esta es la data:");
console.log(data);

//esto para reemplazar las variables que vienen del html
temperatura.textContent = Math.floor(data.main.temp - kelvin) +"°C";

loc.textContent =data.name + "," +data.sys.country;
});
});
}
});





// Modo oscuro
const bdark = document.querySelector('#bdark');
const body= document.querySelector('body');

load();

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load(){
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode){
        store('false');
    }else if(darkmode == 'true'){
        body.classList.add('darkmode')
    }
}

function store(value){
    localStorage.setItem('darkmode',value);
}


// Clase a un elemento html

var boton = document.getElementById("ocultar");

boton.classList.add("boton-ocultar");

