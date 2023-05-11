// Hora actual
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



// Api - Weather

const API_KEY = '6cd2f110df5f8fd17f5d67e45db69716';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}'

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const temperatura = data.main.temp;

    document.getElementById('temperatura').textContent = temperatura;
})
.catch(error => console.log(error));


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

