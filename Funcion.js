function Menu(){
    let Menu = document.getElementById('Menu');
    if(Menu.style.right == '-100%'){
        Menu.style.right = '0px';
        document.body.classList.add('no-scroll');
        Menu.style.transition = '.5s';
    }
    else{
        Menu.style.right = '-100%';
        document.body.classList.remove('no-scroll');
        Menu.style.transition = '.5s';
    }
}
// Al abrir el menú desplegable
function abrirMenu() {
    // Agregar una clase al <link>body</link> para deshabilitar el scroll
    document.body.classList.add('no-scroll');
}

// Al cerrar el menú desplegable
function cerrarMenu() {
    // Remover la clase que deshabilita el scroll del <link>body</link>
    document.body.classList.remove('no-scroll');
}

 // Variable para controlar si el efecto ya se ha aplicado
// Distancia desde el inicio de la página hasta el contenedor
var efectoAplicado = false;
window.addEventListener('scroll', function() {
    
    let Barbero = document.getElementById('Cont-Barberos');
    let scrollPosition = window.scrollY;
    let Distancia = Barbero.offsetTop + 50;
    if (scrollPosition > Distancia && !efectoAplicado) {
        Barbero.style.opacity = '1';
        Barbero.style.top = '0';
        Barbero.style.transition = '1s';
        efectoAplicado = true; // Marcar que el efecto ya se ha aplicado
    }
});
var efecticoAplicado = false;
window.addEventListener('scroll', function() {
    let Servicios = document.getElementById('Cont-Servicios');
    let Carta1 = document.getElementById('Carta1');
    let Carta2 = document.getElementById('Carta2');
    let Carta3 = document.getElementById('Carta3');
    let Descripcion = document.getElementById('Descripcion-Servicios');
    let scrollPosition = window.scrollY;
    let Distancia = Servicios.offsetTop + 100;
    // Reemplaza 300 con el valor de desplazamiento en píxeles en el que quieres que el efecto se aplique
    if (scrollPosition > Distancia && !efecticoAplicado) {
        Descripcion.style.opacity = '1';
        Carta1.style.right = '0';
        Carta1.style.transition = '.8s';
        Carta2.style.right = '0';
        Carta2.style.transition = '1.2s';
        Carta3.style.right = '0';
        Carta3.style.transition = '1.6s';
        Descripcion.style.left = '0';
        Descripcion.style.transition = '1.2s';
        efecticoAplicado = true;
    }
});

 // Variable para controlar si la animación ya se aplicó
let animationApplied = false;
var efecticoStats = false;
window.addEventListener('scroll', function() {
    let Stats = document.getElementById('Cont-Stats');
    let DescripcionStats = document.getElementById('Descripcion-Stats');
    let scrollPosition = window.scrollY;
    let Distancia = Stats.offsetTop + 150;
    
    // Reemplaza 300 con el valor de desplazamiento en píxeles en el que quieres que el efecto se aplique
    if (scrollPosition > Distancia && !efecticoStats && !animationApplied) {
        animateCircularProgressBars();
        DescripcionStats.style.top = '0';
        DescripcionStats.style.transition = '1.2s';
        efecticoStats = true;
        animationApplied = true; // Marca que la animación ya se aplicó
    }
});


window.addEventListener('scroll', function() {
    let Resenitas = document.getElementById('Resenas-Negocio');
    let Titulo = document.getElementById('TituloResena');
    let Descripcion = document.getElementById('DescripcionResena');
    let Cartica = document.getElementById('Cartica');
    let Cartica2 = document.getElementById('Cartica2');
    let scrollPosition = window.scrollY;
    let Distancia = Resenitas.offsetTop + 100;
    // Reemplaza 300 con el valor de desplazamiento en píxeles en el que quieres que el efecto se aplique
    if (scrollPosition > Distancia) {
        Titulo.style.left = '0';
        Titulo.style.transition = '1.2s';
        Descripcion.style.left = '0';
        Descripcion.style.transition = '1.2s';
        Cartica.style.right = '0';
        Cartica.style.transition = '1.2s';
        Cartica2.style.right = '0';
        Cartica2.style.transition = '1.5s';
    }
});

function Ver(id){
    let Servicio = document.getElementById(id);
    if(Servicio.style.opacity == '0'){
        Servicio.style.opacity = '1';
        Servicio.style.transition = '.7s';
        Servicio.style.zIndex = '5';
    }
    else{
        Servicio.style.opacity = '0';
        Servicio.style.zIndex = -1;
        Servicio.style.transition = '.5s';
    }
}
function Cerrar(id){
    let Servicio = document.getElementById(id);
    if(Servicio.style.opacity != '0'){
        Servicio.style.opacity = '0';
        Servicio.style.zIndex = -1;
        Servicio.style.transition = '.5s';
    }
}

function animateCircularProgressBars() {
    let progressBars = document.querySelectorAll(".circular-progress");
    let valueContainers = document.querySelectorAll(".Contador");
    let progressEndValues = [50, 10, 70]; // Valores finales de progreso para cada gráfico
    let speed = 20; // Velocidades de progreso diferentes para cada gráfico
    let progressValues = [0, 0, 0];

    let progress = setInterval(() => {
        for (let i = 0; i < progressBars.length; i++) {
            if (progressValues[i] < progressEndValues[i]) {
                progressValues[i]++;
                valueContainers[i].textContent = `${progressValues[i]}%`;
                progressBars[i].style.background = `conic-gradient(
                    #4681ff 0deg,
                    #4681ff ${progressValues[i] / 100 * 360}deg,
                    #cadcff ${progressValues[i] / 100 * 360}deg,
                    #cadcff 360deg
                )`;
                if (progressValues[i] == progressEndValues[i]) {
                    progressBars[i].style.boxShadow = "0 0 10px #4CAF50"; // Efecto visual al alcanzar el progreso final
                }
            }
        }

        if (progressValues.every((val, index) => val >= progressEndValues[index])) {
            clearInterval(progress);
        }
    }, speed);
}


















