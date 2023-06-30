var carregando = document.getElementById("carregando")
function carregandof() {
    setTimeout(() => {
        carregando.style.display = "none"
        conteudo.style.display = "block"
    }, 500);
}

var jogoCpu = document.getElementById("jogoCpu")
var jogoMult = document.getElementById("jogoMult")
var btnprev = document.getElementById("btnprev")
var btnnext = document.getElementById("btnnext")
var pbtnprev = document.getElementById("pbtnprev")
var pbtnnext = document.getElementById("pbtnnext")

setInterval(() => {
    pbtnprev.style.animation = "movepbtnprev 2s linear"
    setTimeout(() => {
        pbtnprev.style.animation = "none"
    }, 2000);
}, 3000);

setInterval(() => {
    pbtnnext.style.animation = "movepbtnnext 2s linear"
    setTimeout(() => {
        pbtnnext.style.animation = "none"
    }, 2000);
}, 3000);

function next() {
    reiniciandoc()
    btnInfo[0].style.opacity = 0
    btnInfo[0].style.display = "none"
    pontosDiv[0].style.opacity = 0
    pontosDiv[0].style.display = "none"
    jogoCpu.style.animation = "avançar 1s linear"
    jogoMult.style.animation = "avançarm 1s linear"
    btnnext.classList.add("desativado")
    btnprev.classList.add("desativado")
    infoJogador2[0].style.opacity = 0
    infoJogador[0].style.opacity = 0
    pbtnnext.style.display = "none"
    setTimeout(() => {
        pbtnprev.style.display = "block"
        jogoCpu.style.transform = "translate(-100%, 0)"
        jogoMult.style.transform = "translate(0, 0)"
        btnprev.classList.remove("desativado")
    }, 980);

    divPlay[0].style.display = "flex"
    setTimeout(() => {
        divPlay[0].style.opacity = 1
    }, 1);
    jogos[0].style.opacity = 0
    jogos[0].style.transitionDuration = ".5s"
    setTimeout(() => {
        jogos[0].style.transform = "translate(0,100vh)"
    }, 1000);
}

function prev() {
    reiniciando()
    btnInfo[1].style.opacity = 0
    btnInfo[1].style.display = "none"
    pontosDiv[1].style.opacity = 0
    pontosDiv[1].style.display = "none"
    jogoCpu.style.animation = "voltar 1s linear"
    jogoMult.style.animation = "voltarm 1s linear"
    btnprev.classList.add("desativado")
    btnnext.classList.add("desativado")
    pbtnprev.style.display = "none"
    infoJogador2[1].style.opacity = 0
    infoJogador[1].style.opacity = 0
    setTimeout(() => {
        pbtnnext.style.display = "block"
        jogoCpu.style.transform = "translate(0, 0)"
        jogoMult.style.transform = "translate(100%, 0)"
        btnnext.classList.remove("desativado")
    }, 980);

    divPlay[1].style.display = "flex"
    setTimeout(() => {
        divPlay[1].style.opacity = 1
    }, 1);
    jogos[1].style.opacity = 0
    jogos[1].style.transitionDuration = ".5s"
    setTimeout(() => {
        jogos[1].style.transform = "translate(0,100vh)"
    }, 1000);
}

var jogos = document.getElementsByClassName("jogo")
var divPlay = document.getElementsByClassName("divPlay")
var infoJogador = document.getElementsByClassName("infoJogador")
var infoJogador2 = document.getElementsByClassName("infoJogador2")
var btnInfo = document.getElementsByClassName("btnInfo")
var pontosDiv = document.getElementsByClassName("pontosDiv")
function play1() {
    pJ1c = 0
    pJ2c = 0
    jogos[0].style.transitionDuration = "2s"
    divPlay[0].style.opacity = 0
    jogos[0].style.opacity = 1
    btnInfo[0].style.display = "flex"
    pontosDiv[0].style.display = "flex"
    
    setTimeout(() => {
        jogos[0].style.transform = "translate(0,0)"
        infoJogador[0].style.display = "flex"
        infoJogador2[0].style.display = "flex"
    }, 1);
    setTimeout(() => {
        divPlay[0].style.display = "none"
        btnInfo[0].style.opacity = 1
        pontosDiv[0].style.opacity = 1
        infoJogador[0].style.opacity = 1
        infoJogador2[0].style.opacity = 1
    }, 2000);
    selectNivel.value = "s"
        jogandoc = false
        reiniciandoc()
        ocupadofc()
        desPensa()
        nivel = 0
        console.log("jogandoc: " + jogandoc)
    
}

function play2() {
    pJ1 = 0
    pJ2 = 0
    jogos[1].style.transitionDuration = "2s"
    divPlay[1].style.opacity = 0
    jogos[1].style.opacity = 1
    btnInfo[1].style.display = "flex"
    pontosDiv[1].style.display = "flex"
    setTimeout(() => {
        jogos[1].style.transform = "translate(0,0)"
        infoJogador[1].style.display = "flex"
        infoJogador2[1].style.display = "flex"
    }, 1);
    setTimeout(() => {
        divPlay[1].style.display = "none"
        btnInfo[1].style.opacity = 1
        pontosDiv[1].style.opacity = 1
        infoJogador[1].style.opacity = 1
        infoJogador2[1].style.opacity = 1
    }, 2000);
    reiniciando()
}

function voltar() {
    jogoCpu.style.backgroundImage = `linear-gradient(to top, ${corInput[0].value}, transparent, transparent, transparent)`
    btnInfo[0].style.opacity = 0
    btnInfo[0].style.display = "none"
    pontosDiv[0].style.opacity = 0
    pontosDiv[0].style.display = "none"
    
    divPlay[0].style.display = "flex"
    infoJogador[0].style.opacity = 0
    infoJogador2[0].style.opacity = 0
    setTimeout(() => {
        divPlay[0].style.opacity = 1
    }, 1);
    jogos[0].style.opacity = 0
    jogos[0].style.transitionDuration = ".5s"
    setTimeout(() => {
        infoJogador[0].style.display = "none"
        infoJogador2[0].style.display = "none"
        jogos[0].style.transform = "translate(0,100vh)"
    }, 1000);
}

function voltar2() {
    btnInfo[1].style.opacity = 0
    btnInfo[1].style.display = "none"
    pontosDiv[1].style.opacity = 0
    pontosDiv[1].style.display = "none"

    divPlay[1].style.display = "flex"
    infoJogador[1].style.opacity = 0
    infoJogador2[1].style.opacity = 0
    setTimeout(() => {
        divPlay[1].style.opacity = 1
    }, 1);
    jogos[1].style.opacity = 0
    jogos[1].style.transitionDuration = ".5s"
    setTimeout(() => {
        infoJogador[1].style.display = "none"
        infoJogador2[1].style.display = "none"
        jogos[1].style.transform = "translate(0,100vh)"
    }, 1000);
}

var selectNivel = document.getElementById("selectNivel")
selectNivel.addEventListener('change', function () {
    if (selectNivel.value == "s") {
        jogandoc = false
        reiniciandoc()
        ocupadofc()
        nivel = 0
        console.log("jogandoc: " + jogandoc)
    } else if (selectNivel.value == "f") {
        reiniciandoc()
        jogandoc = true
        nivel = 1
        console.log("jogandoc: " + jogandoc)
    } else if (selectNivel.value == "d") {
        reiniciandoc()
        jogandoc = true
        nivel = 2
        console.log("jogandoc: " + jogandoc)
    }
    console.log("Nivel: " + selectNivel.value)
})

var urlc = "avatar.jpg"
var url1 = "avatar.jpg"
var url2 = "avatar.jpg"
function imagemAvatar(ind) {
    var imgInputs = document.getElementsByClassName("imgInput");
    for (var i = 0; i < imgInputs.length; i++) {
        var imgInput = imgInputs[i];
        imgInput.onchange = function (event) {
            var reader = new FileReader();
            var labelFile = this.previousElementSibling;

            reader.onload = function () {
                var url = reader.result;
                labelFile.style.backgroundImage = `url("${url}")`;
                if (ind == 0) {
                    urlc = url
                } else if (ind == 1) {
                    url1 = url
                } else if (ind == 2) {
                    url2 = url
                }
            };

            reader.readAsDataURL(event.target.files[0]);
        };
    }
}

function infoJogadores(obj) {
    obj.style.animation = "none"
}

var infoDiv = document.getElementById("infoDiv")
function abrirInfo() {
    infoDiv.style.display = "block"
    setTimeout(() => {
        infoDiv.style.opacity = 1
    }, 1);
}
function fecharInfo() {
    infoDiv.style.opacity = 0
    setTimeout(() => {
        infoDiv.style.display = "none"
    }, 500);
}