function sumar(numero_uno,numero_dos){
    let sumatoria = +numero_uno  + +numero_dos;
    return sumatoria;
}
function suma(){
    let elemento_uno = document.getElementById("numero_uno");
    let elemento_dos = document.getElementById("numero_dos");
    let elemento_resultado = document.getElementById("resultado");
    let elemento_suma = sumar(elemento_uno.value,elemento_dos.value);
    elemento_resultado.textContent = elemento_suma;
}

function restar(numero_uno,numero_dos){
    let substraccion = +numero_uno - +numero_dos;
    return substraccion;
}
function resta(){
    let elemento_uno = document.getElementById("numero_uno");
    let elemento_dos = document.getElementById("numero_dos");
    let elemento_resultado = document.getElementById("resultado");
    let elemento_resta = restar(elemento_uno.value,elemento_dos.value);
    elemento_resultado.textContent = elemento_resta;
}

function multiplicar(numero_uno,numero_dos){
    let multiplicidad = +numero_uno * +numero_dos;
    return multiplicidad;
}
function multiplicacion(){
    let elemento_uno = document.getElementById("numero_uno");
    let elemento_dos = document.getElementById("numero_dos");
    let elemento_resultado = document.getElementById("resultado");
    let elemento_multiplicacion = multiplicar(elemento_uno.value,elemento_dos.value);
    elemento_resultado.textContent = elemento_multiplicacion;
}

function dividir(numero_uno,numero_dos){
    let dividendo = +numero_uno / +numero_dos;
    return dividendo;
}
function division(){
    let elemento_uno = document.getElementById("numero_uno")
    let elemento_dos = document.getElementById("numero_dos");
    let elemento_resultado = document.getElementById("resultado");
    let elemento_division = dividir(elemento_uno.value,elemento_dos.value);
    elemento_resultado.textContent = elemento_division;
}

function radicar(numero_dos){
    let radicacion = Math.sqrt(numero_dos);
    return radicacion
}
function raiz(){
    let elemento_dos = document.getElementById("numero_dos");
    let elemento_resultado = document.getElementById("resultado");
    let elemento_raiz = radicar(elemento_dos.value);
    elemento_resultado.textContent = elemento_raiz;
}

function valor_absoluto(numero_dos){
    let abs = Math.abs(numero_dos);
    return abs
}
function absoluto(){
    let elemento_dos = document.getElementById("numero_dos");
    let elemento_resultado = document.getElementById("resultado");
    let elemento_abs = valor_absoluto(elemento_dos.value);
    elemento_resultado.textContent = elemento_abs;
}

function potenciar(numero_uno,numero_dos){
    let elevacion = Math.pow(numero_uno,numero_dos);
    return elevacion
}
function potencia(){
    let elemento_uno = document.getElementById("numero_uno");
    let elemento_dos = document.getElementById("numero_dos");
    let elemento_resultado = document.getElementById("resultado");
    let elemento_potencia = potenciar(elemento_uno.value,elemento_dos.value);
    elemento_resultado.textContent = elemento_potencia;
}

function aleatorio(numero_uno,numero_dos){
    let aleatoriedad = Math.floor(Math.random() * (numero_dos - numero_uno) + numero_uno);
    return aleatoriedad;
}
function random(){
    let elemento_uno = document.getElementById("numero_uno");
    let elemento_dos = document.getElementById("numero_dos");
    let elemento_resultado = document.getElementById("resultado");
    let elemento_random = aleatorio(elemento_uno.value,elemento_dos.value);
    elemento_resultado.textContent = elemento_random;
}

function redondear_arriba(){
    let resultante = document.getElementById("resultado");
    let redondo = Number(resultante.textContent)

    let total = Math.round(redondo);
    resultante.textContent = total
    
}

function redondear_abajo(){
    let resultante = document.getElementById("resultado");
    let redondo = Number(resultante.textContent)

    let total = Math.floor(redondo);
    resultante.textContent = total
    
}

function redondear_entero(){
    let resultante = document.getElementById("resultado");
    let redondo = Number(resultante.textContent)

    let total = Math.ceil(redondo);
    resultante.textContent = total
    
}


