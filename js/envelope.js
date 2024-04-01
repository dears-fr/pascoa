var tampa_envelope = document.getElementById('tampa-envelope');
var pseudo_tampa_envelope = document.getElementById('pseudo-tampa-envelope');
var envelope = document.querySelectorAll('.envelope');

function abreTampaEnvelope() {
    tampa_envelope.classList.add('abre-tampa-envelope');
    
    setTimeout(function() {
        pseudo_tampa_envelope.classList.add('pseudo-tampa-envelope-aberta');
        tampa_envelope.classList.add('tampa-envelope-aberta');

        pseudo_tampa_envelope.classList.remove('pseudo-tampa-envelope-fechada');
        tampa_envelope.classList.remove('tampa-envelope-fechada');

        tampa_envelope.classList.remove('abre-tampa-envelope');
    }, 1005);
}

function fechaTampaEnvelope() {
    pseudo_tampa_envelope.classList.remove('pseudo-tampa-envelope-aberta');
    pseudo_tampa_envelope.classList.add('pseudo-tampa-envelope-fechada');
    tampa_envelope.classList.add('fecha-tampa-envelope');
    setTimeout(function() {
        tampa_envelope.classList.add('tampa-envelope-fechada');
        tampa_envelope.classList.remove('tampa-envelope-aberta');

        tampa_envelope.classList.remove('fecha-tampa-envelope');
    }, 1005);
}

function colocaEnvelope() {
    envelope.forEach(function(e) {
        e.classList.add('coloca-envelope');

        setTimeout(function() {
            e.classList.remove('envelope-tirado');
            e.classList.add('envelope-colocado');
            e.classList.remove('coloca-envelope');
        }, 3005);
    })
}

function tiraEnvelope() {
    envelope.forEach(function(e) {
        e.classList.add('tira-envelope');
        setTimeout(function() {
            e.classList.add('envelope-tirado');
            e.classList.remove('envelope-colocado');
            e.classList.remove('tira-envelope');
        }, 3005);
    })
}
