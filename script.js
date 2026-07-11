const boton = document.querySelector("button");
const circulo = document.getElementById("circulo");

boton.onclick = function () {

    boton.style.display = "none";

    let inhalando = true;

    circulo.innerHTML = "INHALÁ";

    setInterval(function () {

        if (inhalando) {
            circulo.style.transform = "scale(1.4)";
            circulo.innerHTML = "INHALÁ";
        } else {
            circulo.style.transform = "scale(1)";
            circulo.innerHTML = "EXHALÁ";
        }

        inhalando = !inhalando;

    }, 6000);

};



    

    

    
        
            
        
        

    
    




    

