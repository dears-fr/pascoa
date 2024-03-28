const coelho = document.getElementById("coelho")
coelho.addEventListener("click", mouseClickedCoelho);

function mouseClickedCoelho(event) {
    if(coelho.classList.contains("coelho-visivel")) {
        coelho.classList.remove("coelho-visivel");
        coelho.classList.add("coelho-oculto");
    } else {
        coelho.classList.remove("coelho-oculto");
        coelho.classList.add("coelho-visivel");
    }
}

const egg1 = document.getElementById("egg1");
egg1.addEventListener("click", mouseClickedEgg1);

function mouseClickedEgg1(event) {
    if(event.target.id === "metade-egg" || event.target.id === "rachado") {
        egg1.style.transform = "scale(1.1)";

        setTimeout(function() {
            egg1.style.transform = "scale(1)";
        }, 300);
    }
}
