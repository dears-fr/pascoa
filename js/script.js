const coelho = document.getElementById("coelho")

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

function mouseClickedEgg1(event) {
    egg1.style.transform = "scale(1.1)";

    setTimeout(function() {
        egg1.style.transform = "scale(1)";
    }, 300);
}

const envelope = document.getElementById("envelope");
envelope.addEventListener("click", mouseClickedEnvelope);
var isClickedEnvelop = 0;

function mouseClickedEnvelope() {
    if(isClickedEnvelop === 0) {
        envelope.classList.toggle('tira-envelope');
        isClickedEnvelop = -1;
        setTimeout(function() {
            isClickedEnvelop = 1;
        }, 2000);
    } else if(isClickedEnvelop === 1) {
        if(isClickedCarta) {
            carta.classList.toggle('dobrado');
            isClickedCarta = false;
        }
        envelope.classList.toggle('coloca-envelope');
        isClickedEnvelop = -1;
        setTimeout(function() {
            isClickedEnvelop = 0;
        }, 2000);
    }
}

const carta = document.getElementById("parte-baixo");
carta.addEventListener("click", mouseClickedCarta);
var isClickedCarta = false;

function mouseClickedCarta(event) {
    //onclick="document.getElementById('parte-baixo').classList.toggle('dobrado')"
    if(!isClickedCarta) {
        carta.classList.toggle('dobrado');
        isClickedCarta = true;
    } else {
        if(event.target.id === "metade-egg" || event.target.id === "rachado") {
            mouseClickedEgg1(event);
        } else if(event.target.id === "coelho") {
            mouseClickedCoelho(event);
        }
    }
}