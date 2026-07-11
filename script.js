const boton = document.querySelector("button");
const circulo = document.getElementById("circulo");

boton.onclick = function () {
    boton.style.display = "none";

    circulo.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.4)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 4000,
            iterations: Infinity
        }
    );
};

