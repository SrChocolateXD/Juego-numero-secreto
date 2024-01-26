let numeroAlazar;
let intentos;
let listaNumerosSorteados=[];
let numeroMaximo =10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    if(numeroAlazar===numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numeroAlazar<numeroDeUsuario){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';

}

function numeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return numeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }

    }

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`indica el numero del 1 al ${numeroMaximo}`);
    numeroAlazar=numeroSecreto();
    intentos=1;
}

function reinicarJuego(){
    //limpiar la caja
    limpiarCaja();
    //menjaje de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();

