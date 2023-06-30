var body = document.querySelector("body")
var quadrados = document.getElementsByClassName("quadrados")
var jogoMult = document.getElementById("jogoMult")
var cerca = document.querySelectorAll(".cerca")
var jdv = document.getElementById("jdv")
var ox = ["O", "X", ""]
var escOX = document.querySelectorAll(".escolhaOX")
var escOXSpan = document.querySelectorAll(".escolhaOX span")
var jogo = []
var tabuleiro = []
var tabuleiro2 = []
var tabuleiro3 = []
var tabuleiro4 = []
var tabuleiroPc = []
var verificaf = ""
var jogando
var jogador
var jogador1
var jogador2
var OXDiv = document.getElementsByClassName("OXDiv")
var random
var random2
var jogada = 0
var tmp = 250
var indEsc
var index
var index1
var index2
var index3
var pontosJ1 = document.querySelector("#pontosJ1")
var pontosJ2 = document.querySelector("#pontosJ2")
var pJ1 = 0
var pJ2 = 0
var vit10pontos = false

function quemComeca() {
    random = Math.round(Math.random() * 1)
    random2 = Math.round(Math.random() * 1)

    if (random == 0) {
        jogador1 = ox[0]
        jogador2 = ox[1]
        indEsc = 1
    } else if (random == 1) {
        jogador1 = ox[1]
        jogador2 = ox[0]
        indEsc = 0
    } else {
        alert("nao deu certo")
    }
    if (random2 == 0) {
        jogador = jogador1
    } else if (random2 == 1) {
        jogador = jogador2
    } else {
        alert("nao deu certo")
    }
    OXDiv[2].innerHTML = jogador1
    OXDiv[3].innerHTML = jogador2
    trocaFundo()
    escolhidoOXSorte()
}

var corInput = document.getElementsByClassName("corInput")
var corInput2 = document.getElementsByClassName("corInput2")
function trocaFundo() {
    if (jogando == true) {
        console.log('random: ' + random)
        if (jogador == jogador1) {
            jogador = jogador2
            jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput2[1].value}, transparent, transparent, transparent)`
            jdv.style.boxShadow = `0px 0px 20px 5px ${corInput2[1].value}`
        } else if (jogador == jogador2) {
            jogador = jogador1
            jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput[1].value}, transparent, transparent, transparent)`
            jdv.style.boxShadow = `0px 0px 20px 5px ${corInput[1].value}`
        }
    }
}

function outColor1() {
    jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput[1].value}, transparent, transparent, transparent)`
    jdv.style.boxShadow = `0px 0px 20px 5px ${corInput[1].value}`
    escOX[0].style.setProperty("--corInput", corInput[1].value);
    escOX[1].style.setProperty("--corInput", corInput[1].value);
}

function outColor2() {
    jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput2[1].value}, transparent, transparent, transparent)`
    jdv.style.boxShadow = `0px 0px 20px 5px ${corInput2[1].value}`
    escOX[2].style.setProperty("--corInput2", corInput2[1].value);
    escOX[3].style.setProperty("--corInput2", corInput2[1].value);
}

function jogarMult(p) {
    if (jogando == true) {
        switch (p) {
            case 1:
                if (jogo[0][0] == ox[2]) {
                    jogo[0][0] = jogador
                    jogada++
                    atualizaTabuleiro()
                    if (verificaf == "") {
                        trocaFundo()
                    }
                }
                break
            case 2:
                if (jogo[0][1] == ox[2]) {
                    jogo[0][1] = jogador
                    jogada++
                    atualizaTabuleiro()
                    if (verificaf == "") {
                        trocaFundo()
                    }
                }
                break
            case 3:
                if (jogo[0][2] == ox[2]) {
                    jogo[0][2] = jogador
                    jogada++
                    atualizaTabuleiro()
                    if (verificaf == "") {
                        trocaFundo()
                    }
                }
                break
            case 4:
                if (jogo[1][0] == ox[2]) {
                    jogo[1][0] = jogador
                    jogada++
                    atualizaTabuleiro()
                    if (verificaf == "") {
                        trocaFundo()
                    }
                }
                break
            case 5:
                if (jogo[1][1] == ox[2]) {
                    jogo[1][1] = jogador
                    jogada++
                    atualizaTabuleiro()
                    if (verificaf == "") {
                        trocaFundo()
                    }
                }
                break
            case 6:
                if (jogo[1][2] == ox[2]) {
                    jogo[1][2] = jogador
                    jogada++
                    atualizaTabuleiro()
                    if (verificaf == "") {
                        trocaFundo()
                    }
                }
                break
            case 7:
                if (jogo[2][0] == ox[2]) {
                    jogo[2][0] = jogador
                    jogada++
                    atualizaTabuleiro()
                    if (verificaf == "") {
                        trocaFundo()
                    }
                }
                break
            case 8:
                if (jogo[2][1] == ox[2]) {
                    jogo[2][1] = jogador
                    jogada++
                    atualizaTabuleiro()
                    if (verificaf == "") {
                        trocaFundo()
                    }
                }
                break
            default://Caso 9
                if (jogo[2][2] == ox[2]) {
                    jogo[2][2] = jogador
                    jogada++
                    atualizaTabuleiro()
                    if (verificaf == "") {
                        trocaFundo()
                    }
                }
                break
        }
    }

}

var sorteBtn = document.getElementsByClassName("sorte")[1]
function sortear() {
    jogando = true
    if (jogando == true) {
        liberaf()
        sorteBtn.style.pointerEvents = "none"
        sorteBtn.classList.add("sorteGray")
        quemComeca()
    } 
}

function escolhidoOX(i) {
    if (jogando == true) {
        liberaf()
        indEsc = i

        index  = i === 0 ? 1 : 0;
        index1 = i === 1 ? 2 : 1;
        index2 = i === 2 ? 3 : 2;
        index3 = i === 3 ? 0 : 3;

        if (indEsc === 0) {
            escOX[index1].classList.add("escolhaOXGray");
            escOX[index2].classList.add("escolhaOXGray");
            escOX[index3].classList.add("clicado")
            OXDiv[2].innerHTML = escOXSpan[i].innerHTML
            OXDiv[3].innerHTML = escOXSpan[index3].innerHTML
            jogador1 = OXDiv[2].innerHTML
            jogador2 = OXDiv[3].innerHTML
        } else if (indEsc === 1) {
            escOX[index].classList.add("escolhaOXGray");
            escOX[index3].classList.add("escolhaOXGray");
            escOX[index2].classList.add("clicado")
            OXDiv[2].innerHTML = escOXSpan[i].innerHTML
            OXDiv[3].innerHTML = escOXSpan[index2].innerHTML
            jogador1 = OXDiv[2].innerHTML
            jogador2 = OXDiv[3].innerHTML
        } else if (indEsc === 2) {
            escOX[index].classList.add("escolhaOXGray");
            escOX[index3].classList.add("escolhaOXGray");
            escOX[index1].classList.add("clicado")
            OXDiv[3].innerHTML = escOXSpan[i].innerHTML
            OXDiv[2].innerHTML = escOXSpan[index1].innerHTML
            jogador1 = OXDiv[3].innerHTML
            jogador2 = OXDiv[2].innerHTML
        } else if (indEsc === 3) {
            escOX[index1].classList.add("escolhaOXGray");
            escOX[index2].classList.add("escolhaOXGray");
            escOX[index].classList.add("clicado")
            OXDiv[3].innerHTML = escOXSpan[i].innerHTML
            OXDiv[2].innerHTML = escOXSpan[index].innerHTML
            jogador1 = OXDiv[3].innerHTML
            jogador2 = OXDiv[2].innerHTML
        }


        escOX[i].classList.add("clicado")
        escOX[i].style.pointerEvents = "none"
        escOX[index].style.pointerEvents = "none"
        escOX[index1].style.pointerEvents = "none"
        escOX[index2].style.pointerEvents = "none"
        escOX[index3].style.pointerEvents = "none"
        sorteBtn.style.pointerEvents = "none"
        sorteBtn.classList.add("sorteGray")
        
        random2 = Math.round(Math.random() * 1)
        if (random2 == 0) {
            jogador = jogador1
        } else if (random2 == 1) {
            jogador = jogador2
        } else {
            alert("nao deu certo")
        }
        trocaFundo()
    } 
} 

function escolhidoOXSorte() {
    index  = indEsc === 0 ? 1 : 0;
    index1 = indEsc === 1 ? 2 : 1;
    index2 = indEsc === 2 ? 3 : 2;
    index3 = indEsc === 3 ? 0 : 3;
    
    if (indEsc === 0) {
        escOX[index1].classList.add("escolhaOXGray");
        escOX[index2].classList.add("escolhaOXGray");
        escOX[index].classList.add("clicado")
        escOX[index3].classList.add("clicado")
    } else if (indEsc === 1) {
        escOX[index].classList.add("escolhaOXGray");
        escOX[index3].classList.add("escolhaOXGray");
        escOX[index1].classList.add("clicado")
        escOX[index2].classList.add("clicado")
    }

    escOX[indEsc].classList.add("clicado")
    escOX[indEsc].style.pointerEvents = "none"
    escOX[index].style.pointerEvents = "none"
    escOX[index1].style.pointerEvents = "none"
    escOX[index2].style.pointerEvents = "none"
    escOX[index3].style.pointerEvents = "none"
}

function ocupadof() {
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            tabuleiroPc[l][c].classList.add("ocupado")
            tabuleiro[l][c].classList.add("ocupado")
            tabuleiro2[l][c].classList.add("ocupado")
            tabuleiro3[l][c].classList.add("ocupado")
            tabuleiro4[l][c].classList.add("ocupado")

            tabuleiroPc[l][c].classList.remove("livre")
            tabuleiro[l][c].classList.remove("livre")
            tabuleiro2[l][c].classList.remove("livre")
            tabuleiro3[l][c].classList.remove("livre")
            tabuleiro4[l][c].classList.remove("livre")
        }
    }
}

function liberaf() {
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            tabuleiroPc[l][c].classList.add("livre")
            tabuleiro[l][c].classList.add("livre")
            tabuleiro2[l][c].classList.add("livre")
            tabuleiro3[l][c].classList.add("livre")
            tabuleiro4[l][c].classList.add("livre")
            tabuleiroPc[l][c].classList.remove("ocupado")
            tabuleiro[l][c].classList.remove("ocupado")
            tabuleiro2[l][c].classList.remove("ocupado")
            tabuleiro3[l][c].classList.remove("ocupado")
            tabuleiro4[l][c].classList.remove("ocupado")
        }
    }
}

function atualizaTabuleiro() {
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            if (jogo[l][c] == ox[0]) {
                tabuleiro[l][c].innerHTML = ox[0]
                tabuleiro[l][c].classList.add("ocupado")
                tabuleiro[l][c].classList.remove("livre")
                tabuleiro2[l][c].innerHTML = ox[0]
                tabuleiro2[l][c].classList.add("ocupado")
                tabuleiro2[l][c].classList.remove("livre")
            } else if (jogo[l][c] == ox[1]) {
                tabuleiro[l][c].innerHTML = ox[1]
                tabuleiro[l][c].classList.add("ocupado")
                tabuleiro[l][c].classList.remove("livre")
                tabuleiro2[l][c].innerHTML = ox[1]
                tabuleiro2[l][c].classList.add("ocupado")
                tabuleiro2[l][c].classList.remove("livre")
            } else {
                tabuleiro[l][c].innerHTML = ""
                tabuleiro[l][c].classList.remove("ocupado")
                tabuleiro[l][c].classList.add("livre")
                tabuleiro2[l][c].innerHTML = ""
                tabuleiro2[l][c].classList.remove("ocupado")
                tabuleiro2[l][c].classList.add("livre")
            }
        }
    }
    verificaf = verificaVitoria()
    if (verificaf != "") {
        jogando = false
        if (jogando == false) {
            ocupadof()
        }
        if (verificaf == OXDiv[2].innerHTML) {
            if (pJ1 < 1) {
                pJ1++
                pontosJ1.innerHTML = pJ1
            } else {
                vitoriaJ1()
            }
          } else if (verificaf == OXDiv[3].innerHTML){
            if (pJ2 < 1) {
                pJ2++
                pontosJ2.innerHTML = pJ2
            } else {
                vitoriaJ2()
            }
          }
    } else {
        //Velha
        if (jogada >= 9) {
            atualizarMistura()
            jogando = false
        }
    }
}

function vitoriaJ1() {
    vit10pontos = true
    body.style.backgroundImage = `url('${url1}')`
    jdv.style.boxShadow = `0px 0px 20px 5px ${corInput[1].value}`
    jogoMult.style.boxShadow = `inset 0px 0px 30px 30px ${corInput[1].value}`
    jdv.style.backgroundColor = "transparent"
  for (let i = 0; i < cerca.length; i++) {
    cerca[i].style.backgroundColor = "transparent"
  }
}
function vitoriaJ2() {
    vit10pontos = true
    body.style.backgroundImage = `url('${url2}')`
    jdv.style.boxShadow = `0px 0px 20px 5px ${corInput2[1].value}`
    jogoMult.style.boxShadow = `inset 0px 0px 30px 30px ${corInput2[1].value}`
    jdv.style.backgroundColor = "transparent"
  for (let i = 0; i < cerca.length; i++) {
    cerca[i].style.backgroundColor = "transparent"
  }
}

function reiniciando() {
    jogando = true
    jogador = ""
    jogador1 = ""
    jogador2 = ""
    random = ""
    random2 = ""
    verificaf = ""
    sorteBtn.style.pointerEvents = "all"
    sorteBtn.classList.remove("sorteGray")
    jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput2[1].value}, transparent, transparent, transparent)`
    jdv.style.boxShadow = `0px 0px 20px 5px ${corInput2[1].value}`
    jogoMult.style.boxShadow = "none"
    jdv.style.backgroundColor = "white"
    body.style.backgroundImage = "none"
  for (let i = 0; i < cercac.length; i++) {
    cercac[i].style.backgroundColor = "white"
  }
    jogada = 0
    OXDiv[2].innerHTML = ""
    OXDiv[3].innerHTML = ""

    for (let i = 0; i < escOX.length; i++) {
        escOX[i].classList.remove("clicado")
        escOX[i].style.pointerEvents = "all"
        escOX[i].classList.remove("escolhaOXGray")
    }

    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            jogo[l][c] = ox[2]
            tabuleiro[l][c].innerHTML = ""
            tabuleiro2[l][c].innerHTML = ""
        }
    }
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            tabuleiroPc[l][c].classList.remove("linhaVencedora");
            tabuleiroPc[l][c].style.backgroundColor = ""
            tabuleiro[l][c].style.backgroundColor = ""
            tabuleiro2[l][c].style.backgroundColor = ""
            tabuleiro3[l][c].style.backgroundColor = ""
            tabuleiro4[l][c].style.backgroundColor = ""

            tabuleiroPc[l][c].style.cursor = "pointer"
            tabuleiro[l][c].style.cursor = "pointer"
            tabuleiro2[l][c].style.cursor = "pointer"
            tabuleiro3[l][c].style.cursor = "pointer"
            tabuleiro4[l][c].style.cursor = "pointer"
        }
    }
    ocupadof()
    if (vit10pontos == true) {
        vit10pontos = false
        reiniciandoPontos()
    }
}

function reiniciandoPontos() {
    pJ1 = 0
    pontosJ1.innerHTML = pJ1
    pJ2 = 0
    pontosJ2.innerHTML = pJ2
    reiniciando()
}

// Seleciona os elementos do HTML
let cor1 = corInput[1]
let cor2 = corInput2[1]

// Define uma função que atualiza a cor de fundo da mistura
function atualizarMistura() {
    // Obtém os valores das cores em formato hexadecimal
    let hex1 = cor1.value;
    let hex2 = cor2.value;

    // Converte os valores hexadecimais para decimais
    let r1 = parseInt(hex1.slice(1, 3), 16);
    let g1 = parseInt(hex1.slice(3, 5), 16);
    let b1 = parseInt(hex1.slice(5, 7), 16);
    let r2 = parseInt(hex2.slice(1, 3), 16);
    let g2 = parseInt(hex2.slice(3, 5), 16);
    let b2 = parseInt(hex2.slice(5, 7), 16);

    // Calcula a média das componentes RGB das cores
    let r = Math.round((r1 + r2) / 2);
    let g = Math.round((g1 + g2) / 2);
    let b = Math.round((b1 + b2) / 2);

    // Converte os valores decimais para hexadecimais
    let hex = "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");

    // Aplica a cor de fundo à mistura
    jogoMult.style.backgroundImage = `linear-gradient(to top, ${hex}, transparent, transparent, transparent)`
    jdv.style.boxShadow = `0px 0px 20px 5px ${hex}`
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            tabuleiroPc[l][c].style.backgroundColor = hex
            tabuleiro[l][c].style.backgroundColor = hex
            tabuleiro2[l][c].style.backgroundColor = hex
            tabuleiro3[l][c].style.backgroundColor = hex
            tabuleiro4[l][c].style.backgroundColor = hex

            tabuleiroPc[l][c].style.cursor = "default"
            tabuleiro[l][c].style.cursor = "default"
            tabuleiro2[l][c].style.cursor = "default"
            tabuleiro3[l][c].style.cursor = "default"
            tabuleiro4[l][c].style.cursor = "default"
        }
    }
}

function verificaVitoria() {

    //LINHAS
    for (let l = 0; l < 3; l++) {
        if ((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2]) && (jogo[l][1] != oxc[2])) {
            tabuleiroPc[l][0].classList.add("linhaVencedora");
            tabuleiroPc[l][1].classList.add("linhaVencedora");
            tabuleiroPc[l][2].classList.add("linhaVencedora");
            if (jogo[l][0] == OXDiv[2].innerHTML) {
                tabuleiroPc[l][0].style.backgroundColor = corInput[1].value
                tabuleiroPc[l][1].style.backgroundColor = corInput[1].value
                tabuleiroPc[l][2].style.backgroundColor = corInput[1].value
                tabuleiro[l][0].style.backgroundColor = corInput[1].value
                tabuleiro[l][1].style.backgroundColor = corInput[1].value
                tabuleiro[l][2].style.backgroundColor = corInput[1].value
                tabuleiro2[l][0].style.backgroundColor = corInput[1].value
                tabuleiro2[l][1].style.backgroundColor = corInput[1].value
                tabuleiro2[l][2].style.backgroundColor = corInput[1].value
                tabuleiro3[l][0].style.backgroundColor = corInput[1].value
                tabuleiro3[l][1].style.backgroundColor = corInput[1].value
                tabuleiro3[l][2].style.backgroundColor = corInput[1].value
                tabuleiro4[l][0].style.backgroundColor = corInput[1].value
                tabuleiro4[l][1].style.backgroundColor = corInput[1].value
                tabuleiro4[l][2].style.backgroundColor = corInput[1].value
                jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput[1].value}, transparent, transparent, transparent)`
                jdv.style.boxShadow = `0px 0px 20px 5px ${corInput[1].value}`
            } else {
                tabuleiroPc[l][0].style.backgroundColor = corInput2[1].value
                tabuleiroPc[l][1].style.backgroundColor = corInput2[1].value
                tabuleiroPc[l][2].style.backgroundColor = corInput2[1].value
                tabuleiro[l][0].style.backgroundColor = corInput2[1].value
                tabuleiro[l][1].style.backgroundColor = corInput2[1].value
                tabuleiro[l][2].style.backgroundColor = corInput2[1].value
                tabuleiro2[l][0].style.backgroundColor = corInput2[1].value
                tabuleiro2[l][1].style.backgroundColor = corInput2[1].value
                tabuleiro2[l][2].style.backgroundColor = corInput2[1].value
                tabuleiro3[l][2].style.backgroundColor = corInput2[1].value
                tabuleiro3[l][0].style.backgroundColor = corInput2[1].value
                tabuleiro3[l][1].style.backgroundColor = corInput2[1].value
                tabuleiro4[l][0].style.backgroundColor = corInput2[1].value
                tabuleiro4[l][1].style.backgroundColor = corInput2[1].value
                tabuleiro4[l][2].style.backgroundColor = corInput2[1].value
                jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput2[1].value}, transparent, transparent, transparent)`
                jdv.style.boxShadow = `0px 0px 20px 5px ${corInput2[1].value}`
            }
            return jogo[l][0]
        }
    }

    //COLUNAS
    for (let c = 0; c < 3; c++) {
        if ((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c]) && (jogo[1][c] != oxc[2])) {
            tabuleiroPc[0][c].classList.add("linhaVencedora");
            tabuleiroPc[1][c].classList.add("linhaVencedora");
            tabuleiroPc[2][c].classList.add("linhaVencedora");
            if (jogo[0][c] == OXDiv[2].innerHTML) {
                tabuleiroPc[0][c].style.backgroundColor = corInput[1].value
                tabuleiroPc[1][c].style.backgroundColor = corInput[1].value
                tabuleiroPc[2][c].style.backgroundColor = corInput[1].value
                tabuleiro[0][c].style.backgroundColor = corInput[1].value
                tabuleiro[1][c].style.backgroundColor = corInput[1].value
                tabuleiro[2][c].style.backgroundColor = corInput[1].value
                tabuleiro2[0][c].style.backgroundColor = corInput[1].value
                tabuleiro2[1][c].style.backgroundColor = corInput[1].value
                tabuleiro2[2][c].style.backgroundColor = corInput[1].value
                tabuleiro3[2][c].style.backgroundColor = corInput[1].value
                tabuleiro3[0][c].style.backgroundColor = corInput[1].value
                tabuleiro3[1][c].style.backgroundColor = corInput[1].value
                tabuleiro4[0][c].style.backgroundColor = corInput[1].value
                tabuleiro4[1][c].style.backgroundColor = corInput[1].value
                tabuleiro4[2][c].style.backgroundColor = corInput[1].value
                jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput[1].value}, transparent, transparent, transparent)`
                jdv.style.boxShadow = `0px 0px 20px 5px ${corInput[1].value}`
            } else {

                tabuleiroPc[0][c].style.backgroundColor = corInput2[1].value
                tabuleiroPc[1][c].style.backgroundColor = corInput2[1].value
                tabuleiroPc[2][c].style.backgroundColor = corInput2[1].value
                tabuleiro[0][c].style.backgroundColor = corInput2[1].value
                tabuleiro[1][c].style.backgroundColor = corInput2[1].value
                tabuleiro[2][c].style.backgroundColor = corInput2[1].value
                tabuleiro2[0][c].style.backgroundColor = corInput2[1].value
                tabuleiro2[1][c].style.backgroundColor = corInput2[1].value
                tabuleiro2[2][c].style.backgroundColor = corInput2[1].value
                tabuleiro3[2][c].style.backgroundColor = corInput2[1].value
                tabuleiro3[0][c].style.backgroundColor = corInput2[1].value
                tabuleiro3[1][c].style.backgroundColor = corInput2[1].value
                tabuleiro4[0][c].style.backgroundColor = corInput2[1].value
                tabuleiro4[1][c].style.backgroundColor = corInput2[1].value
                tabuleiro4[2][c].style.backgroundColor = corInput2[1].value
                jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput2[1].value}, transparent, transparent, transparent)`
                jdv.style.boxShadow = `0px 0px 20px 5px ${corInput2[1].value}`
            }
            return jogo[0][c]
        }
    }

    //DIAGONAIS
    if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2]) && (jogo[1][1] != oxc[2])) {
        tabuleiroPc[0][0].classList.add("linhaVencedora")
        tabuleiroPc[1][1].classList.add("linhaVencedora")
        tabuleiroPc[2][2].classList.add("linhaVencedora")
        if (jogo[0][0] == OXDiv[2].innerHTML) {
            tabuleiroPc[0][0].style.backgroundColor = corInput[1].value
            tabuleiroPc[1][1].style.backgroundColor = corInput[1].value
            tabuleiroPc[2][2].style.backgroundColor = corInput[1].value
            tabuleiro[0][0].style.backgroundColor = corInput[1].value
            tabuleiro[1][1].style.backgroundColor = corInput[1].value
            tabuleiro[2][2].style.backgroundColor = corInput[1].value
            tabuleiro2[0][0].style.backgroundColor = corInput[1].value
            tabuleiro2[1][1].style.backgroundColor = corInput[1].value
            tabuleiro2[2][2].style.backgroundColor = corInput[1].value
            tabuleiro3[0][0].style.backgroundColor = corInput[1].value
            tabuleiro3[1][1].style.backgroundColor = corInput[1].value
            tabuleiro3[2][2].style.backgroundColor = corInput[1].value
            tabuleiro4[0][0].style.backgroundColor = corInput[1].value
            tabuleiro4[1][1].style.backgroundColor = corInput[1].value
            tabuleiro4[2][2].style.backgroundColor = corInput[1].value
            jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput[1].value}, transparent, transparent, transparent)`
            jdv.style.boxShadow = `0px 0px 20px 5px ${corInput[1].value}`
        } else {
            tabuleiroPc[0][0].style.backgroundColor = corInput2[1].value
            tabuleiroPc[1][1].style.backgroundColor = corInput2[1].value
            tabuleiroPc[2][2].style.backgroundColor = corInput2[1].value
            tabuleiro[0][0].style.backgroundColor = corInput2[1].value
            tabuleiro[1][1].style.backgroundColor = corInput2[1].value
            tabuleiro[2][2].style.backgroundColor = corInput2[1].value
            tabuleiro2[0][0].style.backgroundColor = corInput2[1].value
            tabuleiro2[1][1].style.backgroundColor = corInput2[1].value
            tabuleiro2[2][2].style.backgroundColor = corInput2[1].value
            tabuleiro3[0][0].style.backgroundColor = corInput2[1].value
            tabuleiro3[1][1].style.backgroundColor = corInput2[1].value
            tabuleiro3[2][2].style.backgroundColor = corInput2[1].value
            tabuleiro4[0][0].style.backgroundColor = corInput2[1].value
            tabuleiro4[1][1].style.backgroundColor = corInput2[1].value
            tabuleiro4[2][2].style.backgroundColor = corInput2[1].value
            jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput2[1].value}, transparent, transparent, transparent)`
            jdv.style.boxShadow = `0px 0px 20px 5px ${corInput2[1].value}`

        }
        return jogo[0][0]
    }
    if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0]) && (jogo[1][1] != oxc[2])) {
        tabuleiroPc[0][2].classList.add("linhaVencedora")
        tabuleiroPc[1][1].classList.add("linhaVencedora")
        tabuleiroPc[2][0].classList.add("linhaVencedora")
        if (jogo[0][2] == OXDiv[2].innerHTML) {
            tabuleiroPc[0][2].style.backgroundColor = corInput[1].value
            tabuleiroPc[1][1].style.backgroundColor = corInput[1].value
            tabuleiroPc[2][0].style.backgroundColor = corInput[1].value
            tabuleiro[0][2].style.backgroundColor = corInput[1].value
            tabuleiro[1][1].style.backgroundColor = corInput[1].value
            tabuleiro[2][0].style.backgroundColor = corInput[1].value
            tabuleiro2[0][2].style.backgroundColor = corInput[1].value
            tabuleiro2[1][1].style.backgroundColor = corInput[1].value
            tabuleiro2[2][0].style.backgroundColor = corInput[1].value
            tabuleiro3[0][2].style.backgroundColor = corInput[1].value
            tabuleiro3[1][1].style.backgroundColor = corInput[1].value
            tabuleiro3[2][0].style.backgroundColor = corInput[1].value
            tabuleiro4[0][2].style.backgroundColor = corInput[1].value
            tabuleiro4[1][1].style.backgroundColor = corInput[1].value
            tabuleiro4[2][0].style.backgroundColor = corInput[1].value
            jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput[1].value}, transparent, transparent, transparent)`
            jdv.style.boxShadow = `0px 0px 20px 5px ${corInput[1].value}`
        } else {
            tabuleiroPc[0][2].style.backgroundColor = corInput2[1].value
            tabuleiroPc[1][1].style.backgroundColor = corInput2[1].value
            tabuleiroPc[2][0].style.backgroundColor = corInput2[1].value
            tabuleiro[0][2].style.backgroundColor = corInput2[1].value
            tabuleiro[1][1].style.backgroundColor = corInput2[1].value
            tabuleiro[2][0].style.backgroundColor = corInput2[1].value
            tabuleiro2[0][2].style.backgroundColor = corInput2[1].value
            tabuleiro2[1][1].style.backgroundColor = corInput2[1].value
            tabuleiro2[2][0].style.backgroundColor = corInput2[1].value
            tabuleiro3[2][0].style.backgroundColor = corInput2[1].value
            tabuleiro3[0][2].style.backgroundColor = corInput2[1].value
            tabuleiro3[1][1].style.backgroundColor = corInput2[1].value
            tabuleiro4[0][2].style.backgroundColor = corInput2[1].value
            tabuleiro4[1][1].style.backgroundColor = corInput2[1].value
            tabuleiro4[2][0].style.backgroundColor = corInput2[1].value
            jogoMult.style.backgroundImage = `linear-gradient(to top, ${corInput2[1].value}, transparent, transparent, transparent)`
            jdv.style.boxShadow = `0px 0px 20px 5px ${corInput2[1].value}`
        }
        return jogo[0][2]
    }
    return ox[2]
}

var imgDiv = document.getElementsByClassName("imgDiv")
var textDiv = document.getElementsByClassName("textDiv")
var color = document.getElementsByClassName("color")
var quemE = document.getElementsByClassName("quemE")
var imgDiv2 = document.getElementsByClassName("imgDiv2")
var textDiv2 = document.getElementsByClassName("textDiv2")
var color2 = document.getElementsByClassName("color2")
var quemE2 = document.getElementsByClassName("quemE2")
function outColor() {

    imgDiv[0].style.border = `2.5px solid ${corInput[0].value}`
    textDiv[0].style.border = `2.5px solid ${corInput[0].value}`
    color[0].style.border = `2.5px solid ${corInput[0].value}`
    quemE[0].style.backgroundColor = corInput[0].value
    textDiv[0].style.borderLeft = "none"

    imgDiv[1].style.border = `2.5px solid ${corInput[1].value}`
    textDiv[1].style.border = `2.5px solid ${corInput[1].value}`
    color[1].style.border = `2.5px solid ${corInput[1].value}`
    quemE[1].style.backgroundColor = corInput[1].value
    textDiv[1].style.borderLeft = "none"

    imgDiv2[0].style.border = `2.5px solid ${corInput2[0].value}`
    textDiv2[0].style.border = `2.5px solid ${corInput2[0].value}`
    color2[0].style.border = `2.5px solid ${corInput2[0].value}`
    quemE2[0].style.backgroundColor = corInput2[0].value
    textDiv2[0].style.borderRight = "none"

    imgDiv2[1].style.border = `2.5px solid ${corInput2[1].value}`
    textDiv2[1].style.border = `2.5px solid ${corInput2[1].value}`
    color2[1].style.border = `2.5px solid ${corInput2[1].value}`
    quemE2[1].style.backgroundColor = corInput2[1].value
    textDiv2[1].style.borderRight = "none"



    var sorte = document.getElementsByClassName("sorte")
    sorte[1].style.setProperty("--corInput", corInput[1].value);
    sorte[1].style.setProperty("--corInput2", corInput2[1].value);
}

function inicia() {
    pontosJ1.innerHTML = pJ1
    pontosJ2.innerHTML = pJ2
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    tabuleiro = [
        [document.getElementById("p1OX"), document.getElementById("p2OX"), document.getElementById("p3OX")],
        [document.getElementById("p4OX"), document.getElementById("p5OX"), document.getElementById("p6OX")],
        [document.getElementById("p7OX"), document.getElementById("p8OX"), document.getElementById("p9OX")]
    ]
    tabuleiro2 = [
        [document.getElementById("p1OX2"), document.getElementById("p2OX2"), document.getElementById("p3OX2")],
        [document.getElementById("p4OX2"), document.getElementById("p5OX2"), document.getElementById("p6OX2")],
        [document.getElementById("p7OX2"), document.getElementById("p8OX2"), document.getElementById("p9OX2")]
    ]
    tabuleiro3 = [
        [document.getElementById("p1OX3"), document.getElementById("p2OX3"), document.getElementById("p3OX3")],
        [document.getElementById("p4OX3"), document.getElementById("p5OX3"), document.getElementById("p6OX3")],
        [document.getElementById("p7OX3"), document.getElementById("p8OX3"), document.getElementById("p9OX3")]
    ]
    tabuleiro4 = [
        [document.getElementById("p1OX4"), document.getElementById("p2OX4"), document.getElementById("p3OX4")],
        [document.getElementById("p4OX4"), document.getElementById("p5OX4"), document.getElementById("p6OX4")],
        [document.getElementById("p7OX4"), document.getElementById("p8OX4"), document.getElementById("p9OX4")]
    ]
    tabuleiroPc = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ]
    ocupadof()
}
window.addEventListener("load", inicia)