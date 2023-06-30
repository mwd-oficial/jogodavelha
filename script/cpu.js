var body = document.querySelector("body")
var jogoCpu = document.getElementById("jogoCpu");
var cercac = document.querySelectorAll(".cerca")
var jdvc = document.getElementById("jdvc");
var quadradosc = document.getElementsByClassName("quadradosc");
var oxc = ["O", "X", ""];
var escOXc = document.querySelectorAll(".escolhaOXc");
var escOXcSpan = document.querySelectorAll(".escolhaOXc span");
var jogoc = [];
var tabuleiroc = [];
var tabuleiroc2 = [];
var tabuleiroc3 = [];
var tabuleiroc4 = [];
var tabuleirocPc = [];
var verificafc;
var jogandoc;
var jogadorc;
var quemJogac;
var cpu;
var jogadac = 0;
var nivel = 0;
var tmpc = 1000;
var setTime;
var OXDivc = document.getElementsByClassName("OXDiv");
var indEscc;
var indexc;
var pontosJ1c = document.querySelector("#pontosJ1c")
var pontosJ2c = document.querySelector("#pontosJ2c")
var pJ1c = 0
var pJ2c = 0
var vit10pontosc

function determinaOX() {
  var random = Math.round(Math.random() * 1);
  var random2 = Math.round(Math.random() * 1);

  if (random == 0) {
    jogadorc = oxc[0];
    cpu = oxc[1];
    indEscc = 0;
    indexc = 1;
  } else if (random == 1) {
    jogadorc = oxc[1];
    cpu = oxc[0];
    indEscc = 1;
    indexc = 0;
  } else {
    alert("nao deu certo");
  }
  OXDivc[0].innerHTML = jogadorc;
  OXDivc[1].innerHTML = cpu;

  if (random2 == 0) {
    if (nivel != 0) {
      quemJogac = "cpu";
      ocupadofc();
      ligaPensa();
      jogoCpu.style.backgroundImage = `linear-gradient(to top, red, transparent, transparent, transparent)`;
      jdvc.style.boxShadow = "0px 0px 20px 5px red";
      setTime = setTimeout(() => {
        vezDoCpu();
      }, tmpc);
    }
  } else if (random2 == 1) {
    quemJogac = "jogador";
    atualizaTabuleiroc();
  } else {
    alert("nao deu certo");
  }
}

function jogarCpu(p) {
  if (jogandoc == true && quemJogac == "jogador") {
    switch (p) {
      case 1:
        if (jogoc[0][0] == oxc[2]) {
          jogoc[0][0] = jogadorc;
        }
        break;
      case 2:
        if (jogoc[0][1] == oxc[2]) {
          jogoc[0][1] = jogadorc;
        }
        break;
      case 3:
        if (jogoc[0][2] == oxc[2]) {
          jogoc[0][2] = jogadorc;
        }
        break;
      case 4:
        if (jogoc[1][0] == oxc[2]) {
          jogoc[1][0] = jogadorc;
        }
        break;
      case 5:
        if (jogoc[1][1] == oxc[2]) {
          jogoc[1][1] = jogadorc;
        }
        break;
      case 6:
        if (jogoc[1][2] == oxc[2]) {
          jogoc[1][2] = jogadorc;
        }
        break;
      case 7:
        if (jogoc[2][0] == oxc[2]) {
          jogoc[2][0] = jogadorc;
        }
        break;
      case 8:
        if (jogoc[2][1] == oxc[2]) {
          jogoc[2][1] = jogadorc;
        }
        break;
      default: //Caso 9
        if (jogoc[2][2] == oxc[2]) {
          jogoc[2][2] = jogadorc;
        }
        break;
    }
    jogadac++;
    quemJogac = "cpu";
    atualizaTabuleiroc();
    trocaFundoCpu();
    ligaPensa();
    vezDoCpu();
  }
}

function vezDoCpu() {
  if (jogandoc == true && quemJogac == "cpu") {
    ocupadofc();
    setTime = setTimeout(() => {
      var l, c;
      if (nivel == 1) {
        tmpc = 2000;
        do {
          l = Math.round(Math.random() * 2);
          c = Math.round(Math.random() * 2);
        } while (jogoc[l][c] != oxc[2]);
        jogoc[l][c] = cpu;
      } else if (nivel == 2) {
        tmpc = 1000;
        //ATAQUE
        //jogadas linha 1
        if (jogoc[0][0] == cpu && jogoc[0][1] == cpu && jogoc[0][2] == oxc[2]) {
          jogoc[0][2] = cpu;
        } else if (
          jogoc[0][0] == cpu &&
          jogoc[0][2] == cpu &&
          jogoc[0][1] == oxc[2]
        ) {
          jogoc[0][1] = cpu;
        } else if (
          jogoc[0][1] == cpu &&
          jogoc[0][2] == cpu &&
          jogoc[0][0] == oxc[2]
        ) {
          jogoc[0][0] = cpu;
        }

        //jogadas linhas 2
        else if (
          jogoc[1][0] == cpu &&
          jogoc[1][1] == cpu &&
          jogoc[1][2] == oxc[2]
        ) {
          jogoc[1][2] = cpu;
        } else if (
          jogoc[1][0] == cpu &&
          jogoc[1][2] == cpu &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[1][1] = cpu;
        } else if (
          jogoc[1][1] == cpu &&
          jogoc[1][2] == cpu &&
          jogoc[1][0] == oxc[2]
        ) {
          jogoc[1][0] = cpu;
        }

        //jogadas linhas 3
        else if (
          jogoc[2][0] == cpu &&
          jogoc[2][1] == cpu &&
          jogoc[2][2] == oxc[2]
        ) {
          jogoc[2][2] = cpu;
        } else if (
          jogoc[2][0] == cpu &&
          jogoc[2][2] == cpu &&
          jogoc[2][1] == oxc[2]
        ) {
          jogoc[2][1] = cpu;
        } else if (
          jogoc[2][1] == cpu &&
          jogoc[2][2] == cpu &&
          jogoc[2][0] == oxc[2]
        ) {
          jogoc[2][0] = cpu;
        }

        //jogadas coluna 1
        else if (
          jogoc[0][0] == cpu &&
          jogoc[1][0] == cpu &&
          jogoc[2][0] == oxc[2]
        ) {
          jogoc[2][0] = cpu;
        } else if (
          jogoc[0][0] == cpu &&
          jogoc[2][0] == cpu &&
          jogoc[1][0] == oxc[2]
        ) {
          jogoc[1][0] = cpu;
        } else if (
          jogoc[1][0] == cpu &&
          jogoc[2][0] == cpu &&
          jogoc[0][0] == oxc[2]
        ) {
          jogoc[0][0] = cpu;
        }

        //jogadas coluna 2
        else if (
          jogoc[0][1] == cpu &&
          jogoc[1][1] == cpu &&
          jogoc[2][1] == oxc[2]
        ) {
          jogoc[2][1] = cpu;
        } else if (
          jogoc[0][1] == cpu &&
          jogoc[2][1] == cpu &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[1][1] = cpu;
        } else if (
          jogoc[1][1] == cpu &&
          jogoc[2][1] == cpu &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[0][1] = cpu;
        }

        //jogadas coluna 3
        else if (
          jogoc[0][2] == cpu &&
          jogoc[1][2] == cpu &&
          jogoc[2][2] == oxc[2]
        ) {
          jogoc[2][2] = cpu;
        } else if (
          jogoc[0][2] == cpu &&
          jogoc[2][2] == cpu &&
          jogoc[1][2] == oxc[2]
        ) {
          jogoc[1][2] = cpu;
        } else if (
          jogoc[1][2] == cpu &&
          jogoc[2][2] == cpu &&
          jogoc[1][2] == oxc[2]
        ) {
          jogoc[0][2] = cpu;
        }

        //jogadas diagonal 1
        else if (
          jogoc[0][0] == cpu &&
          jogoc[1][1] == cpu &&
          jogoc[2][2] == oxc[2]
        ) {
          jogoc[2][2] = cpu;
        } else if (
          jogoc[0][0] == cpu &&
          jogoc[2][2] == cpu &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[1][1] = cpu;
        } else if (
          jogoc[1][1] == cpu &&
          jogoc[2][2] == cpu &&
          jogoc[0][0] == oxc[2]
        ) {
          jogoc[0][0] = cpu;
        }

        //jogadas diagonal 2
        else if (
          jogoc[0][2] == cpu &&
          jogoc[1][1] == cpu &&
          jogoc[2][0] == oxc[2]
        ) {
          jogoc[2][0] = cpu;
        } else if (
          jogoc[0][2] == cpu &&
          jogoc[2][0] == cpu &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[1][1] = cpu;
        } else if (
          jogoc[2][0] == cpu &&
          jogoc[1][1] == cpu &&
          jogoc[0][2] == oxc[2]
        ) {
          jogoc[0][2] = cpu;
        }

        //DEFESA
        //jogadas linha 1
        else if (
          jogoc[0][0] == jogadorc &&
          jogoc[0][1] == jogadorc &&
          jogoc[0][2] == oxc[2]
        ) {
          jogoc[0][2] = cpu;
        } else if (
          jogoc[0][0] == jogadorc &&
          jogoc[0][2] == jogadorc &&
          jogoc[0][1] == oxc[2]
        ) {
          jogoc[0][1] = cpu;
        } else if (
          jogoc[0][1] == jogadorc &&
          jogoc[0][2] == jogadorc &&
          jogoc[0][0] == oxc[2]
        ) {
          jogoc[0][0] = cpu;
        }

        //jogadas linhas 2
        else if (
          jogoc[1][0] == jogadorc &&
          jogoc[1][1] == jogadorc &&
          jogoc[1][2] == oxc[2]
        ) {
          jogoc[1][2] = cpu;
        } else if (
          jogoc[1][0] == jogadorc &&
          jogoc[1][2] == jogadorc &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[1][1] = cpu;
        } else if (
          jogoc[1][1] == jogadorc &&
          jogoc[1][2] == jogadorc &&
          jogoc[1][0] == oxc[2]
        ) {
          jogoc[1][0] = cpu;
        }

        //jogadas linhas 3
        else if (
          jogoc[2][0] == jogadorc &&
          jogoc[2][1] == jogadorc &&
          jogoc[2][2] == oxc[2]
        ) {
          jogoc[2][2] = cpu;
        } else if (
          jogoc[2][0] == jogadorc &&
          jogoc[2][2] == jogadorc &&
          jogoc[2][1] == oxc[2]
        ) {
          jogoc[2][1] = cpu;
        } else if (
          jogoc[2][1] == jogadorc &&
          jogoc[2][2] == jogadorc &&
          jogoc[2][0] == oxc[2]
        ) {
          jogoc[2][0] = cpu;
        }

        //jogadas coluna 1
        else if (
          jogoc[0][0] == jogadorc &&
          jogoc[1][0] == jogadorc &&
          jogoc[2][0] == oxc[2]
        ) {
          jogoc[2][0] = cpu;
        } else if (
          jogoc[0][0] == jogadorc &&
          jogoc[2][0] == jogadorc &&
          jogoc[1][0] == oxc[2]
        ) {
          jogoc[1][0] = cpu;
        } else if (
          jogoc[1][0] == jogadorc &&
          jogoc[2][0] == jogadorc &&
          jogoc[0][0] == oxc[2]
        ) {
          jogoc[0][0] = cpu;
        }

        //jogadas coluna 2
        else if (
          jogoc[0][1] == jogadorc &&
          jogoc[1][1] == jogadorc &&
          jogoc[2][1] == oxc[2]
        ) {
          jogoc[2][1] = cpu;
        } else if (
          jogoc[0][1] == jogadorc &&
          jogoc[2][1] == jogadorc &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[1][1] = cpu;
        } else if (
          jogoc[1][1] == jogadorc &&
          jogoc[2][1] == jogadorc &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[0][1] = cpu;
        }

        //jogadas coluna 3
        else if (
          jogoc[0][2] == jogadorc &&
          jogoc[1][2] == jogadorc &&
          jogoc[2][2] == oxc[2]
        ) {
          jogoc[2][2] = cpu;
        } else if (
          jogoc[0][2] == jogadorc &&
          jogoc[2][2] == jogadorc &&
          jogoc[1][2] == oxc[2]
        ) {
          jogoc[1][2] = cpu;
        } else if (
          jogoc[1][2] == jogadorc &&
          jogoc[2][2] == jogadorc &&
          jogoc[1][2] == oxc[2]
        ) {
          jogoc[0][2] = cpu;
        }

        //jogadas diagonal 1
        else if (
          jogoc[0][0] == jogadorc &&
          jogoc[1][1] == jogadorc &&
          jogoc[2][2] == oxc[2]
        ) {
          jogoc[2][2] = cpu;
        } else if (
          jogoc[0][0] == jogadorc &&
          jogoc[2][2] == jogadorc &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[1][1] = cpu;
        } else if (
          jogoc[1][1] == jogadorc &&
          jogoc[2][2] == jogadorc &&
          jogoc[0][0] == oxc[2]
        ) {
          jogoc[0][0] = cpu;
        }

        //jogadas diagonal 2
        else if (
          jogoc[0][2] == jogadorc &&
          jogoc[1][1] == jogadorc &&
          jogoc[2][0] == oxc[2]
        ) {
          jogoc[2][0] = cpu;
        } else if (
          jogoc[0][2] == jogadorc &&
          jogoc[2][0] == jogadorc &&
          jogoc[1][1] == oxc[2]
        ) {
          jogoc[1][1] = cpu;
        } else if (
          jogoc[2][0] == jogadorc &&
          jogoc[1][1] == jogadorc &&
          jogoc[0][2] == oxc[2]
        ) {
          jogoc[0][2] = cpu;
        } else {
          if (jogadac < 8) {
            var l, c;
            do {
              l = Math.round(Math.random() * 2);
              c = Math.round(Math.random() * 2);
            } while (jogoc[l][c] != oxc[2]);
            jogoc[l][c] = cpu;
          } else {
            for (var l = 0; l < 3; l++) {
              for (var c = 0; c < 3; c++) {
                if (jogoc[l][c] == oxc[2]) {
                  jogoc[l][c] = cpu;
                }
              }
            }
          }
        }
      }
      desPensa();
      jogadac++;
      quemJogac = "jogador";
      atualizaTabuleiroc();
      trocaFundoCpu();
    }, tmpc);
  }
}

function sortearc() {
  if (jogandoc == true && nivel != 0) {
    sorteBtnc.style.pointerEvents = "none";
    sorteBtnc.classList.add("sorteGray");
    for (let i = 0; i < escOXc.length; i++) {
      escOXc[i].style.pointerEvents = "none";
      escOXc[i].style.pointerEvents = "none";
    }
    determinaOX();
    escOXc[indEscc].classList.add("escolhaOXGray");
    escOXc[indexc].classList.add("clicado");
  } else {
    alert("Selecione um nível antes de sortear!");
  }
}

function escolhidoOXc(i) {
  if (jogandoc == true && nivel != 0) {
    indEscc = i;
    indexc = i === 0 ? 1 : 0;
    escOXc[indexc].classList.add("escolhaOXGray");
    escOXc[i].classList.add("clicado");
    escOXc[i].style.pointerEvents = "none";
    escOXc[indexc].style.pointerEvents = "none";
    sorteBtnc.style.pointerEvents = "none";
    sorteBtnc.classList.add("sorteGray");

    OXDivc[0].innerHTML = escOXcSpan[i].innerHTML;
    OXDivc[1].innerHTML = escOXcSpan[indexc].innerHTML;
    jogadorc = escOXcSpan[i].innerHTML;
    cpu = escOXcSpan[indexc].innerHTML;

    var random2 = Math.round(Math.random() * 1);
    if (random2 == 0) {
      if (nivel != 0) {
        quemJogac = "cpu";
        ocupadofc();
        ligaPensa();
        jogoCpu.style.backgroundImage = `linear-gradient(to top, red, transparent, transparent, transparent)`;
        jdvc.style.boxShadow = "0px 0px 20px 5px red";
        setTime = setTimeout(() => {
          vezDoCpu();
        }, tmpc);
      }
    } else if (random2 == 1) {
      quemJogac = "jogador";
      atualizaTabuleiroc();
    } else {
      alert("nao deu certo");
    }
  } else {
    alert("Selecione um nível antes de escolher!");
  }
}

var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
function ligaPensa() {
  if (jogandoc == true) {
    dot1.style.display = "inline-block";
    dot1.style.animation = "wave 0.75s linear infinite";
    dot2.style.display = "inline-block";
    dot2.style.animation = "wave 0.75s 0.1875s linear infinite";
    dot3.style.display = "inline-block";
    dot3.style.animation = "wave 0.75s 0.375s linear infinite";
  }
}

function desPensa() {
  dot1.style.display = "none";
  dot2.style.display = "none";
  dot3.style.display = "none";
}

function ocupadofc() {
  ligaPensa();
  for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
      tabuleirocPc[l][c].classList.add("ocupado");
      tabuleiroc[l][c].classList.add("ocupado");
      tabuleiroc2[l][c].classList.add("ocupado");
      tabuleiroc3[l][c].classList.add("ocupado");
      tabuleiroc4[l][c].classList.add("ocupado");
      tabuleirocPc[l][c].classList.remove("livre");
      tabuleiroc[l][c].classList.remove("livre");
      tabuleiroc2[l][c].classList.remove("livre");
      tabuleiroc3[l][c].classList.remove("livre");
      tabuleiroc4[l][c].classList.remove("livre");
    }
  }
}

// Seleciona os elementos do HTML
let cor1c = corInput[0];
let cor2c = "#ff0000";

// Define uma função que atualiza a cor de fundo da mistura
function atualizarMisturac() {
  // Obtém os valores das cores em formato hexadecimal
  let hex1c = cor1c.value;
  let hex2c = cor2c;

  // Converte os valores hexadecimais para decimais
  let r1 = parseInt(hex1c.slice(1, 3), 16);
  let g1 = parseInt(hex1c.slice(3, 5), 16);
  let b1 = parseInt(hex1c.slice(5, 7), 16);
  let r2 = parseInt(hex2c.slice(1, 3), 16);
  let g2 = parseInt(hex2c.slice(3, 5), 16);
  let b2 = parseInt(hex2c.slice(5, 7), 16);

  // Calcula a média das componentes RGB das cores
  let r = Math.round((r1 + r2) / 2);
  let g = Math.round((g1 + g2) / 2);
  let b = Math.round((b1 + b2) / 2);

  // Converte os valores decimais para hexadecimais
  let hexc =
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  // Aplica a cor de fundo à mistura
  jogoCpu.style.backgroundImage = `linear-gradient(to top, ${hexc}, transparent, transparent, transparent)`;
  jdvc.style.boxShadow = `0px 0px 20px 5px ${hexc}`;
  for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
      tabuleirocPc[l][c].style.backgroundColor = hexc;
      tabuleiroc[l][c].style.backgroundColor = hexc;
      tabuleiroc2[l][c].style.backgroundColor = hexc;
      tabuleiroc3[l][c].style.backgroundColor = hexc;
      tabuleiroc4[l][c].style.backgroundColor = hexc;

      tabuleirocPc[l][c].style.cursor = "default";
      tabuleiroc[l][c].style.cursor = "default";
      tabuleiroc2[l][c].style.cursor = "default";
      tabuleiroc3[l][c].style.cursor = "default";
      tabuleiroc4[l][c].style.cursor = "default";
    }
  }
}

function atualizaTabuleiroc() {
  for (var l = 0; l < 3; l++) {
    for (var c = 0; c < 3; c++) {
      if (jogoc[l][c] == oxc[0]) {
        tabuleiroc[l][c].innerHTML = oxc[0];
        tabuleiroc[l][c].classList.add("ocupado");
        tabuleiroc[l][c].classList.remove("livre");
        tabuleiroc2[l][c].innerHTML = oxc[0];
        tabuleiroc2[l][c].classList.add("ocupado");
        tabuleiroc2[l][c].classList.remove("livre");
      } else if (jogoc[l][c] == oxc[1]) {
        tabuleiroc[l][c].innerHTML = oxc[1];
        tabuleiroc[l][c].classList.add("ocupado");
        tabuleiroc[l][c].classList.remove("livre");
        tabuleiroc2[l][c].innerHTML = oxc[1];
        tabuleiroc2[l][c].classList.add("ocupado");
        tabuleiroc2[l][c].classList.remove("livre");
      } else {
        tabuleiroc[l][c].innerHTML = "";
        tabuleiroc[l][c].classList.remove("ocupado");
        tabuleiroc[l][c].classList.add("livre");
        tabuleiroc2[l][c].innerHTML = "";
        tabuleiroc2[l][c].classList.remove("ocupado");
        tabuleiroc2[l][c].classList.add("livre");
      }
    }
  }
  verificafc = verificaVitoriac();
  if (verificafc != "") {
    jogandoc = false;
    if (jogandoc == false) {
      ocupadofc();
    }
    if (verificafc == OXDivc[0].innerHTML) {
      if (pJ1c < 1) {
        pJ1c++
        pontosJ1c.innerHTML = pJ1c
      } else {
        vitoriaJ1c()
      }
    } else if (verificafc == OXDivc[1].innerHTML) {
      if (pJ2c < 1) {
        pJ2c++
        pontosJ2c.innerHTML = pJ2c
      } else {
        vitoriaJ2c()
      }
    }
  } else {
    //Velha
    if (jogadac >= 9) {
      atualizarMisturac();
      jogandoc = false;
    }
  }
}

function vitoriaJ1c() {
  vit10pontosc = true
  body.style.backgroundImage = `url('${urlc}')`
  jdvc.style.boxShadow = `0px 0px 20px 5px ${corInput[0].value}`
  jogoCpu.style.boxShadow = `inset 0px 0px 30px 30px ${corInput[0].value}`
  jdvc.style.backgroundColor = "transparent"
  for (let i = 0; i < cercac.length; i++) {
    cercac[i].style.backgroundColor = "transparent"
  }
}
function vitoriaJ2c() {
  vit10pontosc = true
  body.style.backgroundImage = "url('terminator.webp')"
  jdvc.style.boxShadow = "0px 0px 20px 5px red"
  jogoCpu.style.boxShadow = "inset 0px 0px 30px 30px red"
  jdvc.style.backgroundColor = "transparent"
  for (let i = 0; i < cercac.length; i++) {
    cercac[i].style.backgroundColor = "transparent"
  }
}

var linhaVencedora = document.querySelectorAll(".linhaVencedora");
var sorteBtnc = document.getElementsByClassName("sorte")[0];
function reiniciandoc() {
  console.log("Nivel: " + nivel);
  if (nivel == 1 || nivel == 2) {
    jogandoc = true;
    sorteBtnc.style.pointerEvents = "all";
    sorteBtnc.classList.remove("sorteGray");

    escOXc[indexc].classList.remove("escolhaOXGray");
    escOXc[indEscc].classList.remove("clicado");
    escOXc[indEscc].style.pointerEvents = "all";
    escOXc[indEscc].classList.remove("escolhaOXGray");
    escOXc[indexc].classList.remove("clicado");
    escOXc[indexc].style.pointerEvents = "all";

    OXDivc[0].innerHTML = "";
    OXDivc[1].innerHTML = "";
    for (var l = 0; l < 3; l++) {
      for (var c = 0; c < 3; c++) {
        jogoc[l][c] = oxc[2];
        tabuleiroc[l][c].innerHTML = "";
        tabuleiroc2[l][c].innerHTML = "";
      }
    }
  } else if (nivel == 0) {
    jogandoc = false;
    desPensa();
  }
  clearTimeout(setTime);
  ocupadofc();
  desPensa();
  jogadac = 0;
  iniciac();
  jogoCpu.style.backgroundImage = `linear-gradient(to top, ${corInput[0].value}, transparent, transparent, transparent)`;
  jdvc.style.boxShadow = `0px 0px 20px 5px ${corInput[0].value}`;
  jogoCpu.style.boxShadow = "none"
  jdvc.style.backgroundColor = "white"
  body.style.backgroundImage = "none"
  for (let i = 0; i < cercac.length; i++) {
    cercac[i].style.backgroundColor = "white"
  }
  for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
      tabuleirocPc[l][c].classList.remove("linhaVencedora");
      tabuleirocPc[l][c].style.backgroundColor = "";
      tabuleiroc[l][c].style.backgroundColor = "";
      tabuleiroc2[l][c].style.backgroundColor = "";
      tabuleiroc3[l][c].style.backgroundColor = "";
      tabuleiroc4[l][c].style.backgroundColor = "";
    }
  }
  for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
      tabuleirocPc[l][c].classList.remove("linhaVencedora");
      tabuleirocPc[l][c].style.backgroundColor = "";
      tabuleiroc[l][c].style.backgroundColor = "";
      tabuleiroc2[l][c].style.backgroundColor = "";
      tabuleiroc3[l][c].style.backgroundColor = "";
      tabuleiroc4[l][c].style.backgroundColor = "";

      tabuleirocPc[l][c].style.cursor = "pointer";
      tabuleiroc[l][c].style.cursor = "pointer";
      tabuleiroc2[l][c].style.cursor = "pointer";
      tabuleiroc3[l][c].style.cursor = "pointer";
      tabuleiroc4[l][c].style.cursor = "pointer";
    }
  }
  if (vit10pontosc == true) {
    vit10pontosc = false
    reiniciandoPontosc()
  }
}

function reiniciandoPontosc() {
  pJ1c = 0
  pontosJ1c.innerHTML = pJ1c
  pJ2c = 0
  pontosJ2c.innerHTML = pJ2c
  reiniciandoc()
}

function verificaVitoriac() {
  //LINHAS
  for (let l = 0; l < 3; l++) {
    if (
      jogoc[l][0] == jogoc[l][1] &&
      jogoc[l][1] == jogoc[l][2] &&
      jogoc[l][1] != oxc[2]
    ) {
      tabuleirocPc[l][0].classList.add("linhaVencedora");
      tabuleirocPc[l][1].classList.add("linhaVencedora");
      tabuleirocPc[l][2].classList.add("linhaVencedora");
      if (jogoc[l][0] == jogadorc) {
        tabuleirocPc[l][0].style.backgroundColor = corInput[0].value;
        tabuleirocPc[l][1].style.backgroundColor = corInput[0].value;
        tabuleirocPc[l][2].style.backgroundColor = corInput[0].value;
        tabuleiroc[l][0].style.backgroundColor = corInput[0].value;
        tabuleiroc[l][1].style.backgroundColor = corInput[0].value;
        tabuleiroc[l][2].style.backgroundColor = corInput[0].value;
        tabuleiroc2[l][0].style.backgroundColor = corInput[0].value;
        tabuleiroc2[l][1].style.backgroundColor = corInput[0].value;
        tabuleiroc2[l][2].style.backgroundColor = corInput[0].value;
        tabuleiroc3[l][0].style.backgroundColor = corInput[0].value;
        tabuleiroc3[l][1].style.backgroundColor = corInput[0].value;
        tabuleiroc3[l][2].style.backgroundColor = corInput[0].value;
        tabuleiroc4[l][0].style.backgroundColor = corInput[0].value;
        tabuleiroc4[l][1].style.backgroundColor = corInput[0].value;
        tabuleiroc4[l][2].style.backgroundColor = corInput[0].value;
        jogoCpu.style.backgroundImage = `linear-gradient(to top, ${corInput[0].value}, transparent, transparent, transparent)`;
        jdvc.style.boxShadow = `0px 0px 20px 5px ${corInput[0].value}`;
      } else {
        tabuleirocPc[l][0].style.backgroundColor = "red";
        tabuleirocPc[l][1].style.backgroundColor = "red";
        tabuleirocPc[l][2].style.backgroundColor = "red";
        tabuleiroc[l][0].style.backgroundColor = "red";
        tabuleiroc[l][1].style.backgroundColor = "red";
        tabuleiroc[l][2].style.backgroundColor = "red";
        tabuleiroc2[l][0].style.backgroundColor = "red";
        tabuleiroc2[l][1].style.backgroundColor = "red";
        tabuleiroc2[l][2].style.backgroundColor = "red";
        tabuleiroc3[l][2].style.backgroundColor = "red";
        tabuleiroc3[l][0].style.backgroundColor = "red";
        tabuleiroc3[l][1].style.backgroundColor = "red";
        tabuleiroc4[l][0].style.backgroundColor = "red";
        tabuleiroc4[l][1].style.backgroundColor = "red";
        tabuleiroc4[l][2].style.backgroundColor = "red";
        jogoCpu.style.backgroundImage = `linear-gradient(to top, red, transparent, transparent, transparent)`;
        jdvc.style.boxShadow = "0px 0px 20px 5px red";
      }
      return jogoc[l][0];
    }
  }

  //COLUNAS
  for (let c = 0; c < 3; c++) {
    if (
      jogoc[0][c] == jogoc[1][c] &&
      jogoc[1][c] == jogoc[2][c] &&
      jogoc[1][c] != oxc[2]
    ) {
      tabuleirocPc[0][c].classList.add("linhaVencedora");
      tabuleirocPc[1][c].classList.add("linhaVencedora");
      tabuleirocPc[2][c].classList.add("linhaVencedora");
      if (jogoc[0][c] == jogadorc) {
        tabuleirocPc[0][c].style.backgroundColor = corInput[0].value;
        tabuleirocPc[1][c].style.backgroundColor = corInput[0].value;
        tabuleirocPc[2][c].style.backgroundColor = corInput[0].value;
        tabuleiroc[0][c].style.backgroundColor = corInput[0].value;
        tabuleiroc[1][c].style.backgroundColor = corInput[0].value;
        tabuleiroc[2][c].style.backgroundColor = corInput[0].value;
        tabuleiroc2[0][c].style.backgroundColor = corInput[0].value;
        tabuleiroc2[1][c].style.backgroundColor = corInput[0].value;
        tabuleiroc2[2][c].style.backgroundColor = corInput[0].value;
        tabuleiroc3[2][c].style.backgroundColor = corInput[0].value;
        tabuleiroc3[0][c].style.backgroundColor = corInput[0].value;
        tabuleiroc3[1][c].style.backgroundColor = corInput[0].value;
        tabuleiroc4[0][c].style.backgroundColor = corInput[0].value;
        tabuleiroc4[1][c].style.backgroundColor = corInput[0].value;
        tabuleiroc4[2][c].style.backgroundColor = corInput[0].value;
        jogoCpu.style.backgroundImage = `linear-gradient(to top, ${corInput[0].value}, transparent, transparent, transparent)`;
        jdvc.style.boxShadow = `0px 0px 20px 5px ${corInput[0].value}`;
      } else {
        tabuleirocPc[0][c].style.backgroundColor = "red";
        tabuleirocPc[1][c].style.backgroundColor = "red";
        tabuleirocPc[2][c].style.backgroundColor = "red";
        tabuleiroc[0][c].style.backgroundColor = "red";
        tabuleiroc[1][c].style.backgroundColor = "red";
        tabuleiroc[2][c].style.backgroundColor = "red";
        tabuleiroc2[0][c].style.backgroundColor = "red";
        tabuleiroc2[1][c].style.backgroundColor = "red";
        tabuleiroc2[2][c].style.backgroundColor = "red";
        tabuleiroc3[2][c].style.backgroundColor = "red";
        tabuleiroc3[0][c].style.backgroundColor = "red";
        tabuleiroc3[1][c].style.backgroundColor = "red";
        tabuleiroc4[0][c].style.backgroundColor = "red";
        tabuleiroc4[1][c].style.backgroundColor = "red";
        tabuleiroc4[2][c].style.backgroundColor = "red";
        jogoCpu.style.backgroundImage =
          "linear-gradient(to top, red, transparent, transparent, transparent)";
        jdvc.style.boxShadow = "0px 0px 20px 5px red";
      }
      return jogoc[0][c];
    }
  }

  //DIAGONAIS
  if (
    jogoc[0][0] == jogoc[1][1] &&
    jogoc[1][1] == jogoc[2][2] &&
    jogoc[1][1] != oxc[2]
  ) {
    tabuleirocPc[0][0].classList.add("linhaVencedora");
    tabuleirocPc[1][1].classList.add("linhaVencedora");
    tabuleirocPc[2][2].classList.add("linhaVencedora");
    if (jogoc[0][0] == jogadorc) {
      tabuleirocPc[0][0].style.backgroundColor = corInput[0].value;
      tabuleirocPc[1][1].style.backgroundColor = corInput[0].value;
      tabuleirocPc[2][2].style.backgroundColor = corInput[0].value;
      tabuleiroc[0][0].style.backgroundColor = corInput[0].value;
      tabuleiroc[1][1].style.backgroundColor = corInput[0].value;
      tabuleiroc[2][2].style.backgroundColor = corInput[0].value;
      tabuleiroc2[0][0].style.backgroundColor = corInput[0].value;
      tabuleiroc2[1][1].style.backgroundColor = corInput[0].value;
      tabuleiroc2[2][2].style.backgroundColor = corInput[0].value;
      tabuleiroc3[0][0].style.backgroundColor = corInput[0].value;
      tabuleiroc3[1][1].style.backgroundColor = corInput[0].value;
      tabuleiroc3[2][2].style.backgroundColor = corInput[0].value;
      tabuleiroc4[0][0].style.backgroundColor = corInput[0].value;
      tabuleiroc4[1][1].style.backgroundColor = corInput[0].value;
      tabuleiroc4[2][2].style.backgroundColor = corInput[0].value;
      jogoCpu.style.backgroundImage = `linear-gradient(to top, ${corInput[0].value}, transparent, transparent, transparent)`;
      jdvc.style.boxShadow = `0px 0px 20px 5px ${corInput[0].value}`;
    } else {
      tabuleirocPc[0][0].style.backgroundColor = "red";
      tabuleirocPc[1][1].style.backgroundColor = "red";
      tabuleirocPc[2][2].style.backgroundColor = "red";
      tabuleiroc[0][0].style.backgroundColor = "red";
      tabuleiroc[1][1].style.backgroundColor = "red";
      tabuleiroc[2][2].style.backgroundColor = "red";
      tabuleiroc2[0][0].style.backgroundColor = "red";
      tabuleiroc2[1][1].style.backgroundColor = "red";
      tabuleiroc2[2][2].style.backgroundColor = "red";
      tabuleiroc3[0][0].style.backgroundColor = "red";
      tabuleiroc3[1][1].style.backgroundColor = "red";
      tabuleiroc3[2][2].style.backgroundColor = "red";
      tabuleiroc4[0][0].style.backgroundColor = "red";
      tabuleiroc4[1][1].style.backgroundColor = "red";
      tabuleiroc4[2][2].style.backgroundColor = "red";
      jogoCpu.style.backgroundImage =
        "linear-gradient(to top, red, transparent, transparent, transparent)";
      jdvc.style.boxShadow = "0px 0px 20px 5px red";
    }
    return jogoc[0][0];
  }
  if (
    jogoc[0][2] == jogoc[1][1] &&
    jogoc[1][1] == jogoc[2][0] &&
    jogoc[1][1] != oxc[2]
  ) {
    tabuleirocPc[0][2].classList.add("linhaVencedora");
    tabuleirocPc[1][1].classList.add("linhaVencedora");
    tabuleirocPc[2][0].classList.add("linhaVencedora");
    if (jogoc[0][2] == jogadorc) {
      tabuleirocPc[0][2].style.backgroundColor = corInput[0].value;
      tabuleirocPc[1][1].style.backgroundColor = corInput[0].value;
      tabuleirocPc[2][0].style.backgroundColor = corInput[0].value;
      tabuleiroc[0][2].style.backgroundColor = corInput[0].value;
      tabuleiroc[1][1].style.backgroundColor = corInput[0].value;
      tabuleiroc[2][0].style.backgroundColor = corInput[0].value;
      tabuleiroc2[0][2].style.backgroundColor = corInput[0].value;
      tabuleiroc2[1][1].style.backgroundColor = corInput[0].value;
      tabuleiroc2[2][0].style.backgroundColor = corInput[0].value;
      tabuleiroc3[0][2].style.backgroundColor = corInput[0].value;
      tabuleiroc3[1][1].style.backgroundColor = corInput[0].value;
      tabuleiroc3[2][0].style.backgroundColor = corInput[0].value;
      tabuleiroc4[0][2].style.backgroundColor = corInput[0].value;
      tabuleiroc4[1][1].style.backgroundColor = corInput[0].value;
      tabuleiroc4[2][0].style.backgroundColor = corInput[0].value;
      jogoCpu.style.backgroundImage = `linear-gradient(to top, ${corInput[0].value}, transparent, transparent, transparent)`;
      jdvc.style.boxShadow = `0px 0px 20px 5px ${corInput[0].value}`;
    } else {
      tabuleirocPc[0][2].style.backgroundColor = "red";
      tabuleirocPc[1][1].style.backgroundColor = "red";
      tabuleirocPc[2][0].style.backgroundColor = "red";
      tabuleiroc[0][2].style.backgroundColor = "red";
      tabuleiroc[1][1].style.backgroundColor = "red";
      tabuleiroc[2][0].style.backgroundColor = "red";
      tabuleiroc2[0][2].style.backgroundColor = "red";
      tabuleiroc2[1][1].style.backgroundColor = "red";
      tabuleiroc2[2][0].style.backgroundColor = "red";
      tabuleiroc3[2][0].style.backgroundColor = "red";
      tabuleiroc3[0][2].style.backgroundColor = "red";
      tabuleiroc3[1][1].style.backgroundColor = "red";
      tabuleiroc4[0][2].style.backgroundColor = "red";
      tabuleiroc4[1][1].style.backgroundColor = "red";
      tabuleiroc4[2][0].style.backgroundColor = "red";
      jogoCpu.style.backgroundImage =
        "linear-gradient(to top, red, transparent, transparent, transparent)";
      jdvc.style.boxShadow = "0px 0px 20px 5px red";
    }
    return jogoc[0][2];
  }
  return oxc[2];
}

var corInput = document.getElementsByClassName("corInput");
var imgDiv = document.getElementsByClassName("imgDiv");
var textDiv = document.getElementsByClassName("textDiv");
var color = document.getElementsByClassName("color");
var quemE = document.getElementsByClassName("quemE");
var imgDiv2 = document.getElementsByClassName("imgDiv2");
var textDiv2 = document.getElementsByClassName("textDiv2");
var color2 = document.getElementsByClassName("color2");
var quemE2 = document.getElementsByClassName("quemE2");
function outColorc() {
  jogoCpu.style.backgroundImage = `linear-gradient(to top, ${corInput[0].value}, transparent, transparent, transparent)`;
  jdvc.style.boxShadow = `0px 0px 20px 5px ${corInput[0].value}`;

  imgDiv[0].style.border = `2.5px solid ${corInput[0].value}`;
  textDiv[0].style.border = `2.5px solid ${corInput[0].value}`;
  color[0].style.border = `2.5px solid ${corInput[0].value}`;
  quemE[0].style.backgroundColor = corInput[0].value;
  textDiv[0].style.borderLeft = "none";

  imgDiv[1].style.border = `2.5px solid ${corInput[1].value}`;
  textDiv[1].style.border = `2.5px solid ${corInput[1].value}`;
  color[1].style.border = `2.5px solid ${corInput[1].value}`;
  quemE[1].style.backgroundColor = corInput[1].value;
  textDiv[1].style.borderLeft = "none";

  imgDiv2[0].style.border = `2.5px solid ${corInput2[0].value}`;
  textDiv2[0].style.border = `2.5px solid ${corInput2[0].value}`;
  color2[0].style.border = `2.5px solid ${corInput2[0].value}`;
  quemE2[0].style.backgroundColor = corInput2[0].value;
  textDiv2[0].style.borderRight = "none";

  imgDiv2[1].style.border = `2.5px solid ${corInput2[1].value}`;
  textDiv2[1].style.border = `2.5px solid ${corInput2[1].value}`;
  color2[1].style.border = `2.5px solid ${corInput2[1].value}`;
  quemE2[1].style.backgroundColor = corInput2[1].value;
  textDiv2[1].style.borderRight = "none";

  var sorte = document.getElementsByClassName("sorte");
  sorte[0].style.setProperty("--corInput", corInput[0].value);
  sorte[0].style.setProperty("--corInput2", "red");

  for (let i = 0; i < escOXc.length; i++) {
    escOXc[i].style.setProperty("--corInput", corInput[0].value);
  }
}

function trocaFundoCpu() {
  if (jogandoc == true) {
    if (quemJogac == "jogador") {
      jogoCpu.style.backgroundImage = `linear-gradient(to top, ${corInput[0].value}, transparent, transparent, transparent)`;
      jdvc.style.boxShadow = `0px 0px 20px 5px ${corInput[0].value}`;
    } else if (quemJogac == "cpu") {
      jogoCpu.style.backgroundImage = `linear-gradient(to top, red, transparent, transparent, transparent)`;
      jdvc.style.boxShadow = "0px 0px 20px 5px red";
    }
  }
}

function iniciac() {
  pontosJ1c.innerHTML = pJ1c
  pontosJ2c.innerHTML = pJ2c
  jogoc = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  tabuleiroc = [
    [
      document.getElementById("pc1OX"),
      document.getElementById("pc2OX"),
      document.getElementById("pc3OX"),
    ],
    [
      document.getElementById("pc4OX"),
      document.getElementById("pc5OX"),
      document.getElementById("pc6OX"),
    ],
    [
      document.getElementById("pc7OX"),
      document.getElementById("pc8OX"),
      document.getElementById("pc9OX"),
    ],
  ];
  tabuleiroc2 = [
    [
      document.getElementById("pc1OX2"),
      document.getElementById("pc2OX2"),
      document.getElementById("pc3OX2"),
    ],
    [
      document.getElementById("pc4OX2"),
      document.getElementById("pc5OX2"),
      document.getElementById("pc6OX2"),
    ],
    [
      document.getElementById("pc7OX2"),
      document.getElementById("pc8OX2"),
      document.getElementById("pc9OX2"),
    ],
  ];
  tabuleiroc3 = [
    [
      document.getElementById("pc1OX3"),
      document.getElementById("pc2OX3"),
      document.getElementById("pc3OX3"),
    ],
    [
      document.getElementById("pc4OX3"),
      document.getElementById("pc5OX3"),
      document.getElementById("pc6OX3"),
    ],
    [
      document.getElementById("pc7OX3"),
      document.getElementById("pc8OX3"),
      document.getElementById("pc9OX3"),
    ],
  ];
  tabuleiroc4 = [
    [
      document.getElementById("pc1OX4"),
      document.getElementById("pc2OX4"),
      document.getElementById("pc3OX4"),
    ],
    [
      document.getElementById("pc4OX4"),
      document.getElementById("pc5OX4"),
      document.getElementById("pc6OX4"),
    ],
    [
      document.getElementById("pc7OX4"),
      document.getElementById("pc8OX4"),
      document.getElementById("pc9OX4"),
    ],
  ];
  tabuleirocPc = [
    [
      document.getElementById("pc1"),
      document.getElementById("pc2"),
      document.getElementById("pc3"),
    ],
    [
      document.getElementById("pc4"),
      document.getElementById("pc5"),
      document.getElementById("pc6"),
    ],
    [
      document.getElementById("pc7"),
      document.getElementById("pc8"),
      document.getElementById("pc9"),
    ],
  ];
  if (nivel == 0) {
    ocupadofc();
    desPensa();
  }
}
window.addEventListener("load", iniciac);
