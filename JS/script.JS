var textHora = window.document.getElementById("horario")
var img = window.document.getElementById("img")
var b = window.document.getElementById("bom")
var hora = new Date()

const imagens = [
    "./IMG/Manha.jpg",
    "./IMG/Tarde.jpg",
    "./IMG/Noite.jpg"
];

textHora.innerHTML += ` ${hora.getHours()}:${hora.getMinutes()}`

function verificaçãoHorario() {
    if (hora < 12) {
        img.src = imagens[0]
        b.innerText = "Bom dia!"
    }else {
        if (hora < 19) {
            img.src = imagens[1]
            b.innerText = "Boa tarde!"
        }else {
            img.src = imagens[2]
            b.innerText = "Boa noite!"
        }
    }
    }

verificaçãoHorario()