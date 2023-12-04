//Declaracion de variables

//Variables donde almaceno valores de score del usuario y del propio juego
var score = 0;
const winScore = 100;

//Variable donde manejo el evento de cuando el usuario gana
var win = false;

//Variables para manejar el DOM de mi documento
const cookie_object = document.getElementById("cookie_img");
const scoreDisplay = document.getElementById("score-value");
const img_real_details = document.getElementById("img_real");
const win_text = document.getElementById("win_text");
const cookie_container = document.getElementById("all_details");

//Funcion donde se maneja la incrementacion del score del usuario
function Incremento_Score(){
    //Aumentamos, el score del usuario
    score++;
        
    //Escribimos en nuestro html, los puntos que llevas en ese momento: 
    scoreDisplay.textContent = score;
}

//Funcion donde manejo el caso cuando se gana
function Manejo_Evento_Ganador(){
    win = true;
    cookie_container.style.display = "none";
    win_text.style.display = "flex";
    //Esperar 30 segundos, para reiniciar la pagina
    setTimeout(function () {
        window.location.reload();
    }, 3000);
}

cookie_object.addEventListener("click", function () {
    //Mandamos a llamar la funcion para incrementar los puntos
    Incremento_Score();

    if(score === winScore){
        //Mandamos a llamar la funcion para manejar que se realiza cuando se gana
        Manejo_Evento_Ganador();
    }
});



