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
const envelopeFundo = document.getElementById("envelope-fundo");
const envelopeTampa = document.getElementById("envelope-tampa");

const carta = document.getElementById("parte-baixo");
const cartaAfter = document.getElementById("parte-baixo");

envelope.addEventListener("click", mouseClickedEnvelope);
var isFirstClickInEnvelop = true;
var isClickEnvelop = true;

function mouseClickedEnvelope() {
    if(isFirstClickInEnvelop) {
        envelope.classList.add('coloca-envelope');
        envelopeFundo.classList.add('coloca-envelope');
        envelopeTampa.classList.add('dobra-envelope');


        carta.classList.add('dobrado');
        isFirstClickInEnvelop = false;
    }

    if(isClickEnvelop) {
        envelope.classList.toggle('tira-envelope');
        envelope.classList.toggle('coloca-envelope');

        envelopeFundo.classList.toggle('tira-envelope');
        envelopeFundo.classList.toggle('coloca-envelope');

        envelopeTampa.classList.toggle('desdobra-envelope');
        envelopeTampa.classList.toggle('dobra-envelope');
        
        carta.classList.toggle('dobrado');
        carta.classList.toggle('desdobrado');
        isClickEnvelop = false;

        setTimeout(function() {
            isClickEnvelop = true;
        }, 4000);
    }
}


carta.addEventListener("click", mouseClickedCarta);

function mouseClickedCarta(event) {
    if(event.target.id === "metade-egg" || event.target.id === "rachado") {
        mouseClickedEgg1(event);
    } else if(event.target.id === "coelho") {
        mouseClickedCoelho(event);
    }
}