
const section_ataque = document.getElementById('SelecAtaque');
const section_reiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('Boton-mascota');
const reinicio = document.getElementById('Boton-reinicio');
const section_mascota = document.getElementById('SelecMascota');
const vicJugador = document.getElementById('vidas_jugador');
const vicEnemigo = document.getElementById('vidas_enemigo');
const MascotaE_N = document.getElementById('mascotaE_nombre');
const section = document.getElementById('resultado');
const Ataquesjugador = document.getElementById('Ataquesjugador');
const Ataquesenemigo = document.getElementById('Ataquesenemigo');
const contenedorTarjetas = document.getElementById('tarjetas');
const contenedorAtaques = document.getElementById('contenedor_ataques');

const SectionVerMapa = document.getElementById('ver-mapa');
const Mapa = document.getElementById('mapa');

let mokepones = [];
let opcionesMokepones;
let opcionesBotones;
let MascotaJugadorNombre;
let mascotaJugadorObjeto;

let botones = [];
let ataques_Jugador = [];
let ataques_Enemigo = [];

let victoriasJugador = 0;
let victoriasEnemigo = 0;

let indexAtaqueJugador;
let indexAtaqueEnemigo;

let Hipodoge;
let Capipepo;
let Ratigueya;
let Langostelvis;
let Pydos;
let Tucapalma;

let ataqueMokeponEnemigo;
let lienzo = Mapa.getContext('2d');
let intervalo;
let MapaBackground = new Image();
MapaBackground.src = './img/mokemap.png';

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.x = 20;
        this.y = 30;
        this.ancho = 80;
        this.alto = 80;
        this.mapaFoto = new Image();
        this.mapaFoto.src = foto;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
}

let hipodoge = new Mokepon('Hipodoge', './img/mokepons_mokepon_hipodoge_attack.png', 5);
let capipepo = new Mokepon('Capipepo', './img/mokepons_mokepon_capipepo_attack.png', 5);
let ratigueya = new Mokepon('Ratigueya', './img/mokepons_mokepon_ratigueya_attack.png', 5);
let langostelvis = new Mokepon('Langostelvis', './img/mokepons_mokepon_langostelvis_attack.png', 5);
let pydos = new Mokepon('Pydos', './img/mokepons_mokepon_pydos_attack.png', 5);
let tucapalma = new Mokepon('Tucapalma', './img/mokepons_mokepon_tucapalma_attack.png', 5);

hipodoge.ataques.push(
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'},
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
);

capipepo.ataques.push(
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'}
);

ratigueya.ataques.push(
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'},
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'},
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'},
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
);

langostelvis.ataques.push(
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'},
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'},
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
)

pydos.ataques.push(
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'},
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
);

tucapalma.ataques.push(
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'},
    {nombre: 'Fuego 🔥',id: 'Boton-fuego'},
    {nombre: 'Agua 💧',id: 'Boton-agua'},
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
    {nombre: 'Tierra 🌱',id: 'Boton-tierra'},
);

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, pydos, tucapalma);


const iniciarJuego = () => {

    section_ataque.style.display = 'none';
    SectionVerMapa.style.display = 'none';

    mokepones.forEach((mokepon)=> {

        opcionesMokepones = ` 
            <input type="radio" id='${mokepon.nombre}' name="mascota" />
            <label class="card_mascota" for="${mokepon.nombre}">
                <p>${mokepon.nombre}</p>
                <img src="${mokepon.foto}" alt="${mokepon.nombre} foto">
            </label>
        `;

        contenedorTarjetas.innerHTML += opcionesMokepones;
    });

    Hipodoge = document.getElementById('Hipodoge');
    Capipepo = document.getElementById('Capipepo');
    Ratigueya = document.getElementById('Ratigueya');
    Langostelvis = document.getElementById('Langostelvis');
    Pydos = document.getElementById('Pydos');
    Tucapalma = document.getElementById('Tucapalma');

    section_reiniciar.style.display = 'none';
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador);
}

const selecionarMascotaJugador = () => {

    section_mascota.style.display = 'none';

    let MascotaJ_N = document.getElementById('mascotaJ_nombre');

    if (Hipodoge.checked) {
        MascotaJ_N.innerHTML = Hipodoge.id;
        MascotaJugadorNombre = Hipodoge.id;
    } else if (Capipepo.checked) {
        MascotaJ_N.innerHTML = Capipepo.id;
        MascotaJugadorNombre = Capipepo.id;
    } else if (Ratigueya.checked) {
        MascotaJ_N.innerHTML = Ratigueya.id;
        MascotaJugadorNombre = Ratigueya.id;
    }else if (Langostelvis.checked) {
        MascotaJ_N.innerHTML = Langostelvis.id;
        MascotaJugadorNombre = Langostelvis.id;
    } else if(Pydos.checked){
        MascotaJ_N.innerHTML = Pydos.id;
        MascotaJugadorNombre = Pydos.id;
    } else if(Tucapalma.checked) {
        MascotaJ_N.innerHTML = Tucapalma.id;
        MascotaJugadorNombre = Tucapalma.id;
    } else {
        alert("Mascota no seleccionada")
    }

    extraerataques(MascotaJugadorNombre);
    SectionVerMapa.style.display = 'flex';
    // section_ataque.style.display = 'flex';
    iniciarMapa();
    selecionarMascotaEnemigo();

}

const extraerataques = (mascotaJuador) =>{

    reinicio.addEventListener('click', reiniciar);
    let mokepon = mokepones.find(element => element.nombre === mascotaJuador);
    // mascotaJugadorObjeto = mokepon;
    //crear los botones
    mokepon.ataques.forEach((ataque)=> {
        opcionesBotones = `  <button id="${ataque.id}" class="ataque btnAtaque">${ataque.nombre}</button>`;
        contenedorAtaques.innerHTML += opcionesBotones;
    });

    botones = document.querySelectorAll('.btnAtaque');
}

const secuenciaAtaques = () =>{
    botones.forEach((boton)=> {
        boton.addEventListener('click', (e)=>{
            if (e.target.textContent === 'Fuego 🔥') {
                ataques_Jugador.push('Fuego');
                boton.style.background = '#2f5853';
                boton.disabled = true;
            } else if(e.target.textContent === 'Agua 💧'){
                ataques_Jugador.push('Agua');
                boton.style.background = '#2f5853';
                boton.disabled = true;
            } else{
                ataques_Jugador.push('Tierra');
                boton.style.background = '#2f5853';
                boton.disabled = true;
            }

            ataque_enemigo();
        })
    })
}

const selecionarMascotaEnemigo = () => {
    let Aleatorio = aleatorio(1, mokepones.length-1);
    MascotaE_N.innerHTML = mokepones[Aleatorio].nombre;
    ataqueMokeponEnemigo = mokepones[Aleatorio].ataques;
    secuenciaAtaques();

}

const ataque_enemigo = () => {

    let ataqueAleatorioEnemigo = aleatorio(1, ataqueMokeponEnemigo.length-1);

    console.log(ataqueMokeponEnemigo);
    console.log(ataqueAleatorioEnemigo);
    // ataques_Enemigo
    if (ataqueAleatorioEnemigo === 0 || ataqueAleatorioEnemigo === 1) {
        ataques_Enemigo.push('Fuego');
    } else if (ataqueAleatorioEnemigo === 3 || ataqueAleatorioEnemigo === 4) {
        ataques_Enemigo.push('Agua');
    } else {
        ataques_Enemigo.push('Tierra');
    }

    iniciarPelea();
}

const iniciarPelea = () => {
    if (ataques_Jugador.length === 5) {
        combate();
    }
}

const indexAmposOponentes = (Jugador, Enemigo ) => {
    indexAtaqueJugador = ataques_Jugador[Jugador];
    indexAtaqueEnemigo = ataques_Enemigo[Enemigo];
}

const combate = () => {

    for (let i = 0; i < ataques_Jugador.length; i++) {
        if (ataques_Jugador[i] == ataques_Enemigo[i]) {
            indexAmposOponentes(i,i)
            crearMensaje("Empate");
        } else if(ataques_Jugador[i] == 'Fuego' && ataques_Enemigo[i] == 'Tierra'){
            indexAmposOponentes(i,i)
            crearMensaje("Ganaste");
            victoriasJugador ++;
            vicJugador.innerHTML = victoriasJugador;
            // vidaE.innerHTML = mascotasE_vidas;
        }else if (ataques_Jugador[i] == 'Agua' && ataques_Enemigo[i] == 'Fuego') {
            indexAmposOponentes(i,i)
            crearMensaje("Ganaste");
            victoriasJugador ++;
            vicJugador.innerHTML = victoriasJugador;
        }else if (ataques_Jugador[i] == 'Tierra' && ataques_Enemigo[i] == 'Agua') {
            indexAmposOponentes(i,i)
            crearMensaje("Ganaste");
            victoriasJugador ++;
            vicJugador.innerHTML = victoriasJugador;
        } else {
            indexAmposOponentes(i,i)
            crearMensaje("PERDISTE");
            victoriasEnemigo ++;
            vicEnemigo.innerHTML = victoriasEnemigo;
        }
        
    }

    revisarVictorias();
}

const revisarVictorias = () => {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('Empate');
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('Ganaste la batalla');
    } else {
        crearMensajeFinal('Perdiste la batalla');
    }

}

const crearMensaje = (resultado) => {

    section.innerHTML = resultado;

    let nuevoAtaqueJ = document.createElement('p');
    nuevoAtaqueJ.innerHTML = indexAtaqueJugador;
    Ataquesjugador.appendChild(nuevoAtaqueJ);

    let nuevoAtaqueE = document.createElement('p');
    nuevoAtaqueE.innerHTML = indexAtaqueEnemigo;
    Ataquesenemigo.appendChild(nuevoAtaqueE);
}

const crearMensajeFinal = (resultadoFinal) => {
    section.innerHTML = resultadoFinal;
    section_reiniciar.style.display = 'block';

}

const reiniciar = () => {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const pintarCanvas = () => {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0, 0, Mapa.width, Mapa.height);
    lienzo.drawImage(MapaBackground, 0, 0, Mapa.width, Mapa.height);
    lienzo.drawImage(
        mascotaJugadorObjeto.mapaFoto,
        mascotaJugadorObjeto.x,
        mascotaJugadorObjeto.y,
        mascotaJugadorObjeto.ancho,
        mascotaJugadorObjeto.alto
    )
}

const moverCapipepoDerecha = () => {
    mascotaJugadorObjeto.velocidadX = 5;
}

const moverCapipepoIzquierda = () => {
    mascotaJugadorObjeto.velocidadX = -5
}

const moverCapipepoArriba = () => {
    mascotaJugadorObjeto.velocidadY = -5
}

const moverCapipepoAbajo = () => {
    mascotaJugadorObjeto.velocidadY = 5
}

const detenerMovimiento = () => {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

const KeyPress = (e) => {
    switch (e.key) {
        case 'ArrowUp':
            moverCapipepoArriba();
        break;
        case 'ArrowDown':
            moverCapipepoAbajo();
        break;
        case 'ArrowLeft':
            moverCapipepoIzquierda();
        break;
        case 'ArrowRight':
            moverCapipepoDerecha();
        break;
        default:
            break;
    }
}

const KeyUp = (e) =>{
    detenerMovimiento();
}

const iniciarMapa = () => {
    Mapa.width = 320;
    Mapa.height = 240;
    mascotaJugadorObjeto = obtenerObjetoMascota(MascotaJugadorNombre)
    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener('keydown', KeyPress);
    window.addEventListener('keyup', KeyUp);
}

const obtenerObjetoMascota = (mascotaJuador) => {
    let mokepon = mokepones.find(element => element.nombre === mascotaJuador);
    mascotaJugadorObjeto = mokepon;
    return mokepon
}

window.addEventListener('load', iniciarJuego);