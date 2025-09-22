let vidaJugador = 500, vidaJefe = 2000;

// Función que genera un número aleatorio entre min y max
// Se usa para calcular daño y curación de manera impredecible
const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Función que maneja un turno completo del jugador
// Actualiza la vida del jugador y del jefe, aplica el ataque del jefe

const turno = (accion) => {
  let defensa = false;
// Recibe la acción (1=Atacar, 2=Curar, 3=Defender)
  if(accion==="1"){ 
    let d=aleatorio(50,150); 
    vidaJefe-=d; 
    // Muestra en consola los resultados y controla si alguien gana o pierde
    console.log(`Atacaste e hiciste ${d} de daño.`); 
  } 
  else if(accion==="2"){ 
    let c=aleatorio(30,100); 
    vidaJugador+=c; 
    // Muestra en consola los resultados y controla si alguien gana o pierde
    console.log(`Te curaste ${c} puntos.`); 
  } 
  else if(accion==="3"){ 
    defensa=true; 
    // Muestra en consola los resultados y controla si alguien gana o pierde
    console.log("Defendiste, daño reducido."); 
  } 
  else console.log("Acción no válida.");

  // Ataque del jefe después de la acción del jugador
  if(vidaJefe>0){
    let dj=aleatorio(40,120); 
    if(defensa) dj=Math.floor(dj/2); // Reducir daño si defendió
    vidaJugador-=dj; 
    console.log(`El jefe te atacó e hizo ${dj} de daño.`);
  }

  // Revisar resultados finales
  if(vidaJefe<=0) return console.log("¡Ganaste!");
  if(vidaJugador<=0) return console.log("Perdiste.");
  console.log("\n----------------------------------");
  console.log(`\nVida: ${vidaJugador} | Vida jefe: ${vidaJefe}`);
  console.log("\n----------------------------------");
  
  console.log("Presiona 1=Atacar, 2=Curar, 3=Defender");
};

// Mensaje inicial y escucha de teclas para jugar desde la consola
console.log("Bienvenido al juego de ataque. Debes derrotar al jefe.");
console.log("\nJuego iniciado. Presiona 1, 2 o 3 en la consola.");
document.addEventListener('keydown', e => { 
  if(["1","2","3"].includes(e.key)) turno(e.key); 
});
