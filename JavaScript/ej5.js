function cero(numero){
    return numero ? numero(0) : 0; 
}
function uno(numero){
    return numero ? numero(1) : 1; 
}
function dos(numero){
    return numero ? numero(2) : 2; 
}
function tres(numero){
    return numero ? numero(3) : 3; 
}
function cuatro(numero){
    return numero ? numero(4) : 4; 
}
function cinco(numero){
    return numero ? numero(5) : 5; 
}
function seis(numero){
    return numero ? numero(6) : 6; 
}
function siete(numero){
    return numero ? numero(7) : 7; 
}
function ocho(numero){
    return numero ? numero(8) : 8; 
}
function nueve(numero){
    return numero ? numero(9) : 9; 
}

// OP Matematicas

function plus(num) { 
    return function(a) {
        return a + num; 
    };
 }

function minus(num) {
     return function(a) {
         return a - num; 
        }; 
    }

function times(num) { 
    return function(a) {
        return a * num; 
    };
 }

function dividedBy(num) {
     return function(a) { 
        return Math.floor(a / num);
     };
    }



console.log(siete(times(cinco())));
console.log(cuatro(plus(nueve())));
console.log(ocho(minus(tres())));
console.log(seis(dividedBy(dos())));  