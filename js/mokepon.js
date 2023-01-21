const seccionSeleccionarAtaque=document.getElementById("Seleccionar-ataque")
const seccionReiniciar=document.getElementById("Reiniciar")
const botonMascotaJugador=document.getElementById("boton-mascota")
const botonReiniciar=document.getElementById("boton-reinicio")
const seccionarSeleccionarMascota=document.getElementById("Seleccionar-mascota")

const spanMascotaJugador=document.getElementById("mascotaJugador")
const spanEnemigo=document.getElementById("mascotaEnemigo")
const spanVidasJugador=document.getElementById("vidasJugador")
const spanVidasEnemigo=document.getElementById("vidasEnemigo")
const seccionMensajes=document.getElementById("resultado")
const seccionAtaqueDelJugador=document.getElementById("ataque-del-jugador")
const seccionAtaqueDelEnemigo=document.getElementById("ataque-del-enemigo")
const contenedorDeTarjetas=document.getElementById("contenedorTarjetas")
const contenedorDeAtaques=document.getElementById("contenedor-ataques")

const sectionVerMapa=document.getElementById('ver-mapa')
const mapa=document.getElementById('mapa')

const anchoMaximoDelMapa=350

let mokepones=[]
let opcionDeMokepones
let mascotaJugador
let mascotaJugadorObjeto
let inputperro
let inputgato
let inputchiguire
let inputLangosta
let inputSerpiente
let inputTucan
let botonFuego
let botonAgua
let botonTierra
let botones=[]
let ataquesMokepon
let ataqueJugador=[]
let ataqueMokeponEnemigo
let ataqueEnemigo=[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let pelea
let victoriasJugador=0
let victoriasEnemigo=0
let vidasDelJugador=3
let vidasDelEnemigo=3
let lienzo= mapa.getContext('2d')
let intervalo
let mapaBackground=new Image()
mapaBackground.src='./assets/mokemap.png'



let alturaQuebuscamos
let anchoDelMapa= window.innerWidth -20

if(anchoDelMapa>anchoMaximoDelMapa){
    anchoDelMapa=anchoMaximoDelMapa-20
}
alturaQuebuscamos=anchoDelMapa*600/800

mapa.width=anchoDelMapa
mapa.height=alturaQuebuscamos




class Mokepon{
    constructor(nombre, foto, vida, tipo,fotoMapa) {
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.tipo=tipo
        this.ataques=[]
        this.ancho=40
        this.alto=40
        this.x=aleatorio(0,mapa.width-this.ancho)
        this.y=aleatorio(0,mapa.height- this.alto)
        this.mapaFoto=new Image()
        this.mapaFoto.src=fotoMapa
        this.velocidadX=0
        this.velocidadY=0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        ) 
    }
}
let perro=new Mokepon('Perro','./assets/mokepons_mokepon_hipodoge_attack.png', 5, 'Tierra','./assets/hipodoge.webp')
let gato=new Mokepon('Gato','./assets/mokepons_mokepon_ratigueya_attack.png', 5,'Fuego','./assets/ratigueya.webp')
let chiguire=new Mokepon('Chiguire','./assets/mokepons_mokepon_capipepo_attack.png',5,'Agua','./assets/capipepo.webp')
let tucan=new Mokepon('Tucan', './assets/mokepons_mokepon_tucapalma_attack.png',5,'aire')
let serpiente= new Mokepon('Serpiente','./assets/mokepons_mokepon_pydos_attack.png',5,'veneno')
let langosta=new Mokepon('Langosta','./assets/mokepons_mokepon_langostelvis_attack.png',5,'dragon')

let perroEnemigo=new Mokepon('Perro','./assets/mokepons_mokepon_hipodoge_attack.png', 5, 'Tierra','./assets/hipodoge.webp')
let gatoEnemigo=new Mokepon('Gato','./assets/mokepons_mokepon_ratigueya_attack.png', 5,'Fuego','./assets/ratigueya.webp')
let chiguireEnemigo=new Mokepon('Chiguire','./assets/mokepons_mokepon_capipepo_attack.png',5,'Agua','./assets/capipepo.webp')


chiguire.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌵',id:'boton-tierra'},
)
gato.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌵',id:'boton-tierra'},
)
perro.ataques.push(
    {nombre:'🌵',id:'boton-tierra'},
    {nombre:'🌵',id:'boton-tierra'},
    {nombre:'🌵',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
)
langosta.ataques.push(
    {nombre:'🐲',id:'boton-dragon'},
    {nombre:'🐲',id:'boton-dragon'},
    {nombre:'🐲',id:'boton-dragon'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🤢',id:'boton-veneno'},
)
serpiente.ataques.push(
    {nombre:'🤢',id:'boton-veneno'},
    {nombre:'🤢',id:'boton-veneno'},
    {nombre:'🤢',id:'boton-veneno'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌵',id:'boton-tierra'},
)
tucan.ataques.push(
    {nombre:'🐦',id:'boton-pajaro'},
    {nombre:'🐦',id:'boton-pajaro'},
    {nombre:'🐦',id:'boton-pajaro'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-tierra'},
)

chiguireEnemigo.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌵',id:'boton-tierra'},
)
gatoEnemigo.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌵',id:'boton-tierra'},
)
perroEnemigo.ataques.push(
    {nombre:'🌵',id:'boton-tierra'},
    {nombre:'🌵',id:'boton-tierra'},
    {nombre:'🌵',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
)

mokepones.push(chiguire,gato,perro/*,tucan,serpiente,langosta*/)


function inicio() {
    seccionSeleccionarAtaque.style.display="none"
    seccionReiniciar.style.display="none"
    sectionVerMapa.style.display='none'
    
    mokepones.forEach((mokepon)=>{
        opcionDeMokepones=`
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjetas-de-mokepon" for= ${mokepon.nombre} >
        <p>${mokepon.nombre} </p>
        <img src=${mokepon.foto} alt=${mokepon.nombre} >
        `
        contenedorDeTarjetas.innerHTML += opcionDeMokepones
        inputperro=document.getElementById('Perro')
        inputgato=document.getElementById('Gato')
        inputchiguire=document.getElementById('Chiguire')
        inputLangosta=document.getElementById('Langosta')
        inputSerpiente=document.getElementById('Serpiente')
        inputTucan=document.getElementById('Tucan')
    })
    //let cambioDeColorDeTarjeta=document.getElementsById('perro')
    // cambioDeColorDeTarjeta.addEventListener('input', cambioDeColor) 
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    seccionarSeleccionarMascota.style.display="none"
    //seccionSeleccionarAtaque.style.display="flex"
   
        if (inputperro.checked) {  
            spanMascotaJugador.innerHTML=inputperro.id
            mascotaJugador=inputperro.id
        }else if (inputgato.checked) {
            spanMascotaJugador.innerHTML=inputgato.id
            mascotaJugador=inputgato.id
        }else if (inputchiguire.checked) {
            spanMascotaJugador.innerHTML=inputchiguire.id
            mascotaJugador=inputchiguire.id
        }else if (inputLangosta.checked){
            spanMascotaJugador.innerHTML=inputLangosta.id
            mascotaJugador=inputLangosta.id
        }else if(inputSerpiente.checked){
            spanMascotaJugador.innerHTML=inputSerpiente.id
            mascotaJugador=inputSerpiente.id
        }else if(inputTucan.checked){
            spanMascotaJugador.innerHTML=inputTucan.id
            mascotaJugador=inputTucan.id
        }

        else {
            alert("Selecciona una mascota olvidadiso")
    }
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display='flex '
    iniciarMapa() 
}
function extraerAtaques(mascotaJugador){
    let ataques
     for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador===mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }        
     }
     mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon=`
        <button id=${ataque.id} class="boton-de-ataque botonesAtaque">${ataque.nombre}</button>
        `
        contenedorDeAtaques.innerHTML+=ataquesMokepon
    })
    botonFuego=document.getElementById("boton-fuego")
    botonAgua=document.getElementById("boton-agua") 
    botonTierra=document.getElementById("boton-tierra")
    botonPajaro=document.getElementById('boton-pajaro')
    botonDragon=document.getElementById('boton-dragon')
    botonVeneno=document.getElementById('boton-veneno')
    
    /*botonFuego.addEventListener("click",  ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)*/

    botones=document.querySelectorAll('.botonesAtaque')
    
}
function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener("click", (e)=>{
            if(e.target.textContent==='🔥'){
                ataqueJugador.push('fuego')
                console.log(ataqueJugador)
                boton.style.background='#112f58' 
                boton.disabled=true
            }else if(e.target.textContent==='💧'){
                ataqueJugador.push('agua')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled=true 
            }else if(e.target.textContent==='🌵'){
                ataqueJugador.push('tierra')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled=true 
            }else if(e.target.textContent==='🐲'){
                ataqueJugador.push('ciclon')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled=true 
            }else if(e.target.textContent==='🤢'){
                ataqueJugador.push('veneno')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled=true 
            }else{
                ataqueJugador.push('rafagaso')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled=true 
            }
            ataqueAleatorioEnemigo()
        })
    })
}


function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaEnemigo(enemigo) {
            spanEnemigo.innerHTML=enemigo.nombre
            ataqueMokeponEnemigo=enemigo.ataques
           secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    //hacer esto sin que sea hardcodeado
    let ataqueAleatorio=aleatorio(0,ataqueMokeponEnemigo.length -1)
    let ataqueDelEnemigo=ataqueMokeponEnemigo[ataqueAleatorio].nombre
    if(ataqueDelEnemigo==='🔥'){
        ataqueEnemigo.push('fuego')
        }else if(ataqueDelEnemigo==='💧'){  
        ataqueEnemigo.push('agua')
        }else if(ataqueDelEnemigo==='🌵'){
        ataqueEnemigo.push('tierra')
        } else if(ataqueDelEnemigo==='🐲'){
            ataqueEnemigo.push('FuegoDragonil')
        }else if(ataqueDelEnemigo==='🤢'){
            ataqueEnemigo.push('veneno')
        }else{
            ataqueEnemigo.push('rafagaso')
        }
    /*if(ataqueAleatorio==0 || ataqueAleatorio==1){
        ataqueEnemigo.push('fuego')
    }else if(ataqueAleatorio==3 || ataqueAleatorio==4){
        ataqueEnemigo.push('agua')
    }else{
        ataqueEnemigo.push('tierra')
    }*/   
    console.log(ataqueEnemigo)
    iniciarJuego()
}
function iniciarJuego(){
    if(ataqueJugador.length===5){
        combate()   
    }
}
function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador=ataqueJugador[jugador]
    indexAtaqueEnemigo=ataqueEnemigo[enemigo]
}
function combate(){
    for(let index=0;index<ataqueJugador.length;index++){
        if(ataqueJugador[index]===ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje('Empate')
        }
        else if(ataqueJugador[index]==='fuego'&& ataqueEnemigo[index]==='tierra'
                ||ataqueJugador[index]==='agua'&&ataqueEnemigo[index]==='fuego'
                ||ataqueJugador[index]==='tierra'&&ataqueEnemigo[index]==='agua'){
                    indexAmbosOponentes(index,index)
                    crearMensaje('Ganaste')
                    victoriasJugador++
                    spanVidasJugador.innerHTML=victoriasJugador

        }else{
            indexAmbosOponentes(index,index)
            crearMensaje('Perdiste')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML=victoriasEnemigo

        }
    }chequeoDeVictorias()
}

/*function combate(){
        if(ataqueJugador==ataqueEnemigo) {
            pelea="Empate"
            crearMensaje()
        }else if(ataqueJugador=="fuego" && ataqueEnemigo=="tierra" || ataqueJugador=="agua" && ataqueEnemigo=="fuego" || ataqueJugador=="tierra" && ataqueEnemigo=="agua"){
            pelea="Ganaste"
            vidasDelEnemigo--
            spanVidasEnemigo.innerHTML=vidasDelEnemigo
            crearMensaje()
        }else {
            pelea="Perdiste"
            vidasDelJugador--
            spanVidasJugador.innerHTML=vidasDelJugador
            crearMensaje()
        }
        chequeoVidas()
    }*/

function chequeoDeVictorias(){
        if(victoriasJugador===victoriasEnemigo) {
            mensajeFinal("Ésto ha sido un empate")
        }else if(victoriasJugador>victoriasEnemigo) {
            mensajeFinal("Has ganado noble caballero")
        }else{
            mensajeFinal("Has perdido mamaguevo")
        }    
}
       
function crearMensaje(resultado) {
    let nuevoAtaqueJugador=document.createElement("p")
    let nuevoAtaqueEnemigo=document.createElement("p")
    /*seccionMensajes.innerHTML=resultado*/
    nuevoAtaqueJugador.innerHTML=indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML=indexAtaqueEnemigo
    seccionAtaqueDelJugador.appendChild(nuevoAtaqueJugador)
    seccionAtaqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)    

} 

function mensajeFinal(resultado) {  
    //let mensajeFinal=document.createElement("p")
    //mensajeFinal.innerHTML=resultado
    //seccionMensajeFinal.appendChild(mensajeFinal)
    seccionMensajes.innerHTML=resultado 
    seccionReiniciar.style.display="flex"     
}  

function pintarCanvas(){
    mascotaJugadorObjeto.x=mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y=mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    perroEnemigo.pintarMokepon()
    gatoEnemigo.pintarMokepon()
    chiguireEnemigo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX!==0||mascotaJugadorObjeto.velocidadY!==0){
    revisarColision(perroEnemigo)
    revisarColision(gatoEnemigo)
    revisarColision(chiguireEnemigo)
    }      
}

function moverMokeponDerecha(){
    mascotaJugadorObjeto.velocidadX=5
}
function moverMokeponIzquierda (){
    mascotaJugadorObjeto.velocidadX=-5
}
function moverMokeponAbajo  (){
    mascotaJugadorObjeto.velocidadY=5
}
function moverMokeponArriba (){
    mascotaJugadorObjeto.velocidadY=-5
}


function reiniciarJuego() {
    location.reload()
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX=0
    mascotaJugadorObjeto.velocidadY=0   
}
function movimientoMokeponTeclas(event){
    switch (event.key) {
        case 'ArrowUp':
            moverMokeponArriba()
            break;
        case 'w':
            moverMokeponArriba()
            break;
        case 'ArrowDown':
            moverMokeponAbajo  ()
            break;
        case 's':
            moverMokeponAbajo  ()
            break;
        case 'ArrowRight':
            moverMokeponDerecha()
            break;
        case 'd':
            moverMokeponDerecha()
            break;  
        case 'ArrowLeft':
            moverMokeponIzquierda ()
            break;
        case 'a':
            moverMokeponIzquierda ()
            break; 
        default:
            break;
    }
}
function iniciarMapa(){
    mascotaJugadorObjeto=obtenerObjetoMascota()
    intervalo=setInterval(pintarCanvas,50)  
    window.addEventListener('keydown',movimientoMokeponTeclas)
    window.addEventListener('keyup',detenerMovimiento)
} 

function obtenerObjetoMascota(){
     for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador===mokepones[i].nombre){
            return mokepones[i]
        }        
     }
}
function revisarColision(enemigo){
    const arribaEnemigo=enemigo.y
    const abajoEnemigo=enemigo.y+enemigo.alto
    const derechaEnemigo=enemigo.x+enemigo.ancho
    const izquierdaEnemigo=enemigo.x

    const arribaMascota=mascotaJugadorObjeto.y
    const abajoMascota=mascotaJugadorObjeto.y+mascotaJugadorObjeto.alto
    const derechaMascota=mascotaJugadorObjeto.x+mascotaJugadorObjeto.ancho
    const  izquierdaMascota=mascotaJugadorObjeto.x
    if(
        abajoMascota<arribaEnemigo||
        arribaMascota>abajoEnemigo||
        derechaMascota<izquierdaEnemigo||
        izquierdaMascota>derechaEnemigo
    ){return
    }else{
        detenerMovimiento()
        clearInterval(intervalo)
        console.log('se detecto una colision ')
        sectionVerMapa.style.display='none'
        seccionSeleccionarAtaque.style.display="flex"
        seleccionarMascotaEnemigo(enemigo) 
    }

}
window.addEventListener("load", inicio)


