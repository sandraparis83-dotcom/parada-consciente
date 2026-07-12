const boton = document.querySelector("button");
const circulo = document.getElementById("circulo");
const tiempo = document.getElementById("tiempo");

boton.onclick = function () {

    boton.style.display = "none";

    let inhalando = true;
    let segundos = 10;

    actualizarTiempo();

    circulo.innerHTML = "INHALÁ";
    circulo.style.transform = "scale(1.4)";

    setInterval(function () {

        if (inhalando) {
            circulo.innerHTML = "EXHALÁ";
            circulo.style.transform = "scale(1)";
        } else {
            circulo.innerHTML = "INHALÁ";
            circulo.style.transform = "scale(1.4)";
        }

        inhalando = !inhalando;

    }, 6000);

    const reloj = setInterval(function () {

        segundos--;

        actualizarTiempo();

        if (segundos <= 0) {
            clearInterval(reloj);
            tiempo.innerHTML = "✔";
            circulo.innerHTML = "✔";
alert("¡Excelente! Tu cuello está listo para continuar el viaje.");
        }

    }, 1000);

    function actualizarTiempo() {
        let min = Math.floor(segundos / 60);
        let seg = segundos % 60;

        if (seg < 10) seg = "0" + seg;

        tiempo.innerHTML = min + ":" + seg;
    }

};



    

    

    
        
            
        
        

    
    




    

