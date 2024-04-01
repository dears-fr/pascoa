var papel = document.getElementById("papel");

var clone_papel = papel.cloneNode(true);



var parte_baixo = document.getElementById("parte-baixo-papel");

//preenchendo parte de baixo
parte_baixo.appendChild(clone_papel);
//preenchendo parte de baixo

let textoPartes = document.querySelectorAll('.texto-carta');
textoPartes.forEach(function(texto) {
    if(texto.parentNode.parentNode.parentNode.id === 'parte-baixo-papel')
    texto.id += '-parte-baixo';
})
var texto_parte_baixo = document.getElementById('texto-carta-parte-baixo');
texto_parte_baixo.classList.add('texto-parte-baixo-dobrada');

var is_dobravel = true;
document.addEventListener('click', function() {
    inverteDobraduraPapel();
})

function inverteDobraduraPapel() {
    if(is_dobravel) {
        if(!parte_baixo.classList.contains('parte-baixo-desdobrada')) {
            is_dobravel = false;
            //demora 1s
            abreTampaEnvelope();

            setTimeout(function() {
                //precisa de 1s, mas demora 3s
                tiraEnvelope();
            }, 1000); //tempo pro abreTampaEnvelope ser executado

            setTimeout(function() {
                parte_baixo.classList.add('desdobra-papel');
            }, 2000); //tempo pro tiraEnvelope ser executado

            //transparecendo texto pra nao aparecer do outro lado
            setTimeout(function() {
                texto_parte_baixo.classList.remove('texto-parte-baixo-dobrada');
            }, 3000);

            setTimeout(function() {
                parte_baixo.classList.add('parte-baixo-desdobrada');
                parte_baixo.classList.remove('desdobra-papel');
            }, 5005); //tempo pro evento ser executado

            setTimeout(function() {
                is_dobravel = true;
            }, 5010);

        } else {
            parte_baixo.classList.add('dobra-papel');
            is_dobravel = false;

            setTimeout(function() {
                colocaEnvelope(); //demora 3s
            }, 1000);

            setTimeout(function() {
                texto_parte_baixo.classList.add('texto-parte-baixo-dobrada');
            }, 2000);

            setTimeout(function() {
                parte_baixo.classList.remove('parte-baixo-desdobrada');
                parte_baixo.classList.remove('dobra-papel');
            }, 3005);

            setTimeout(function() {
                fechaTampaEnvelope();
            }, 4000);

            setTimeout(function() {
                is_dobravel = true;
            }, 5010);
        }
    }
}