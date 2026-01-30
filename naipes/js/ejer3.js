document.querySelector('button').addEventListener('click',()=>{

    let juego = new Juego('solitario');
    
    // console.log(cartas);
    
    juego.inicarjuego()


})
// let mazo = new Mazo([new Napie(1, 'oros'),new Napie(5, 'oros'),new Napie(6, 'oros')]);
// let cartas = mazo.getSrcs();
// cartas.forEach(e => [
//     document.querySelector("#ejer3").appendChild(e)
// ])


/* 
let carta = new Napie(1, 'oros')
console.log(carta);
console.log(carta.getAnverso());
document.querySelector("#ejer3 img").src = carta.show()
 
setTimeout(()=>{
    carta.voltear()
    document.querySelector("#ejer3 img").src = carta.show()
},2000)
*/