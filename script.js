const boton = document.querySelector("button");
const circulo = document.getElementById("circulo");

boton.onclick = function () {

    boton.style.display = "none";

    let inhalando = true;

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

};



    

    

    
        
            
        
        

    
    




    

