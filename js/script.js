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

const envelopeFundo = document.getElementById("envelope-fundo");
const envelopeTampa = document.getElementById("envelope-tampa");
const envelopeFrente = document.getElementById("envelope-frente");

const designInterno = document.getElementById("design-interno");

const carta = document.getElementById("parte-baixo");
const cartaAfter = document.getElementById("parte-baixo");

var isFirstClickInEnvelop = true;
var isClickEnvelop = true;

document.addEventListener('click', function(event) {
    if(event.target.id === 'envelope-tampa' || event.target.id === 'envelope-fundo') {
        mouseClickedEnvelope();
    }
})

function mouseClickedEnvelope() {
    if(isFirstClickInEnvelop) {
        envelopeFundo.classList.add('coloca-envelope');
        envelopeFrente.classList.add('coloca-envelope');

        carta.classList.add('dobrado');
        isFirstClickInEnvelop = false;
    }

    if(isClickEnvelop) {
        envelopeFundo.classList.toggle('tira-envelope');
        envelopeFrente.classList.toggle('tira-envelope');

        envelopeFundo.classList.toggle('coloca-envelope');
        envelopeFrente.classList.toggle('coloca-envelope');

        let timeOutDesignInterno = 500;

        if(designInterno.classList.contains('oculto')) {
            timeOutDesignInterno = 2000;
        }

        setTimeout(function() {
            designInterno.classList.toggle('oculto');
            egg1.classList.toggle('oculto');
        }, timeOutDesignInterno);

        if(envelopeTampa.classList.contains('desdobra-envelope')) {
            setTimeout(function() {
                envelopeTampa.classList.toggle('desdobra-envelope');
            }, 3500);
        } else {
            envelopeTampa.classList.toggle('desdobra-envelope');
        }

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