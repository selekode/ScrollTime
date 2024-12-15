function mostrarTiempoPerdidoDiv() {
  var htmlShow = document.getElementById("divTiempoPerdido");
  if (htmlShow.style.display === "none") {
    htmlShow.style.display = "block";
  } else {
    htmlShow.style.display = "none";
  }
  calcularTiempoPerdido()
}

function calcularTiempoPerdido() {
  var inputHoras = document.getElementById("inputHoras").value;
  var inputMinutos = document.getElementById("inputMinutos").value;

  if (inputHoras.length === 0) {
    inputHoras = 0;
  }

  if (inputMinutos.length === 0) {
    inputMinutos = 0;
  }

  let horasIntroducidas = parseInt(inputHoras);
  let minutosIntroducidos = parseInt(inputMinutos);
  let tiempoDiarioMalgastadoEnMinutos = (horasIntroducidas * 60) + minutosIntroducidos;
  let tiempoDiarioMalgastadoHoras = (tiempoDiarioMalgastadoEnMinutos / 60);
  tiempoDiarioMalgastadoEnHoras = tiempoDiarioMalgastadoHoras.toFixed(2);

  let porcentajeDelDiaMalgastado = (tiempoDiarioMalgastadoEnMinutos / 1440) * 100;
  porcentajeDelDiaMalgastado = porcentajeDelDiaMalgastado.toFixed(2);

  let diasPerdidosAlAño = (tiempoDiarioMalgastadoHoras * 365) / 24;
  diasPerdidosAlAño = diasPerdidosAlAño.toFixed(1);
  diasPerdidosAlAño = diasPerdidosAlAño.toString();

  let mesesPerdidosAlAño = ((tiempoDiarioMalgastadoHoras * 365) / 24) / 30.416;
  mesesPerdidosAlAño = mesesPerdidosAlAño.toFixed(1);

  let diasPerdidosEn10Años = diasPerdidosAlAño * 10;
  diasPerdidosEn10Años = diasPerdidosEn10Años.toFixed(2);
  let mesesPerdidosEn10Años = mesesPerdidosAlAño * 10;
  mesesPerdidosEn10Años = mesesPerdidosEn10Años.toFixed(2);
  let añosPerdidosEn10Años = mesesPerdidosEn10Años / 12;
  añosPerdidosEn10Años = añosPerdidosEn10Años.toFixed(2);

  let diasPerdidosEn40Años = diasPerdidosEn10Años * 4;
  diasPerdidosEn40Años = diasPerdidosEn40Años.toFixed(2);
  let mesesPerdidosEn40Años = mesesPerdidosEn10Años * 4;
  mesesPerdidosEn40Años = mesesPerdidosEn40Años.toFixed(2);
  let añosPerdidosEn40Años = mesesPerdidosEn40Años / 12;
  añosPerdidosEn40Años = añosPerdidosEn40Años.toFixed(2);

  tiempoDiarioMalgastadoEnMinutos = tiempoDiarioMalgastadoEnMinutos;
  console.log("Tiempo: " +tiempoDiarioMalgastadoEnMinutos);

  // Update image
  if (tiempoDiarioMalgastadoEnMinutos < 60 || tiempoDiarioMalgastadoEnMinutos == 60) {
    console.log(tiempoDiarioMalgastadoEnMinutos);
    console.log("Menos de 1h");
    document.getElementById("imageReactionEmoji").src = "assets/images/phoneUse1h.png"
    document.getElementById("labelNivelUso").textContent = "¡Muy bién! La mayoría de la gente no consigue menos de una hora";
    document.getElementById("labelMinutosDiarios").textContent = tiempoDiarioMalgastadoEnMinutos  + "min";
    document.getElementById("porcentajeDiarioMalgastado").textContent = "Estás empleando el " + porcentajeDelDiaMalgastado + " % de tu día haciendo scroll";
    document.getElementById("diasPerdidosAlAño").textContent = "Estás empleando " + diasPerdidosAlAño + " días al año haciendo scroll (" + mesesPerdidosAlAño + " meses al año)";
    document.getElementById("añosPerdidosEn10años").textContent = "A lo largo de 10 años, habrás malgastado " + mesesPerdidosEn10Años + " meses (" + añosPerdidosEn10Años + " años) haciendo scroll";
    document.getElementById("añosPerdidosEn40años").textContent = "A lo largo de 40 años, habrás malgastado " + añosPerdidosEn40Años + " años haciendo scroll";
  } else if (tiempoDiarioMalgastadoEnMinutos == 61 || 61 < tiempoDiarioMalgastadoEnMinutos && tiempoDiarioMalgastadoEnMinutos < 120) {
    console.log(tiempoDiarioMalgastadoEnMinutos);
    console.log("Entre 1h y 2h");
    document.getElementById("imageReactionEmoji").src = "assets/images/phoneUse2h.png"
    document.getElementById("labelNivelUso").textContent = "Este uso no es dañino. Menos de 2h está bien.";
    document.getElementById("labelMinutosDiarios").textContent = tiempoDiarioMalgastadoEnMinutos  + "min";
    document.getElementById("porcentajeDiarioMalgastado").textContent = "Estás malgastando el " + porcentajeDelDiaMalgastado + " % de tu día haciendo scroll";
    document.getElementById("diasPerdidosAlAño").textContent = "Estás malgastando " + diasPerdidosAlAño + " días al año haciendo scroll (" + mesesPerdidosAlAño + " meses al año)";
    document.getElementById("añosPerdidosEn10años").textContent = "A lo largo de 10 años, habrás malgastado " + mesesPerdidosEn10Años + " meses (" + añosPerdidosEn10Años + " años) haciendo scroll";
    document.getElementById("añosPerdidosEn40años").textContent = "A lo largo de 40 años, habrás malgastado " + añosPerdidosEn40Años + " años haciendo scroll";
  } else if (tiempoDiarioMalgastadoEnMinutos == 120 || 120 < tiempoDiarioMalgastadoEnMinutos && tiempoDiarioMalgastadoEnMinutos  < 240) {
    console.log(tiempoDiarioMalgastadoEnMinutos);
    console.log("Entre 2 y 4h");
    document.getElementById("imageReactionEmoji").src = "assets/images/phoneUse3h.png"
    document.getElementById("labelNivelUso").textContent = "Deberías reducir tu uso. Más de 2h al día no es recomendable.";
    document.getElementById("labelMinutosDiarios").textContent = tiempoDiarioMalgastadoEnMinutos  + "min";
    document.getElementById("porcentajeDiarioMalgastado").textContent = "Estás malgastando el " + porcentajeDelDiaMalgastado + " % de tu día haciendo scroll";
    document.getElementById("diasPerdidosAlAño").textContent = "Estás malgastando " + diasPerdidosAlAño + " días al año haciendo scroll (" + mesesPerdidosAlAño + " meses al año)";
    document.getElementById("añosPerdidosEn10años").textContent = "A lo largo de 10 años, habrás malgastado " + mesesPerdidosEn10Años + " meses (" + añosPerdidosEn10Años + " años) haciendo scroll";
    document.getElementById("añosPerdidosEn40años").textContent = "A lo largo de 40 años, habrás malgastado " + añosPerdidosEn40Años + " años haciendo scroll";
  } else if (tiempoDiarioMalgastadoEnMinutos == 240 || 240 < tiempoDiarioMalgastadoEnMinutos && tiempoDiarioMalgastadoEnMinutos  < 300) {
    console.log(tiempoDiarioMalgastadoEnMinutos);
    console.log("Entre 4 y 5h");
    document.getElementById("imageReactionEmoji").src = "assets/images/phoneUse4h.png"
    document.getElementById("labelNivelUso").textContent = "Usas el movil demasiado";
    document.getElementById("labelMinutosDiarios").textContent = tiempoDiarioMalgastadoEnMinutos  + "min";
    document.getElementById("porcentajeDiarioMalgastado").textContent = "Estás malgastando el " + porcentajeDelDiaMalgastado + " % de tu día haciendo scroll";
    document.getElementById("diasPerdidosAlAño").textContent = "Estás malgastando " + diasPerdidosAlAño + " días al año haciendo scroll (" + mesesPerdidosAlAño + " meses al año)";
    document.getElementById("añosPerdidosEn10años").textContent = "A lo largo de 10 años, habrás malgastado " + mesesPerdidosEn10Años + " meses (" + añosPerdidosEn10Años + " años) haciendo scroll";
    document.getElementById("añosPerdidosEn40años").textContent = "A lo largo de 40 años, habrás malgastado " + añosPerdidosEn40Años + " años haciendo scroll";
  } else if (tiempoDiarioMalgastadoEnMinutos == 300 || 300 < tiempoDiarioMalgastadoEnMinutos && tiempoDiarioMalgastadoEnMinutos  < 360) {
    console.log(tiempoDiarioMalgastadoEnMinutos);
    console.log("Entre 5 y 6h");
    document.getElementById("imageReactionEmoji").src = "assets/images/phoneUse5.png"
    document.getElementById("labelNivelUso").textContent = "Estás malgastando bastante tiempo al día";
    document.getElementById("labelMinutosDiarios").textContent = tiempoDiarioMalgastadoEnMinutos  + "min";
    document.getElementById("porcentajeDiarioMalgastado").textContent = "Estás malgastando el " + porcentajeDelDiaMalgastado + " % de tu día haciendo scroll";
    document.getElementById("diasPerdidosAlAño").textContent = "Estás malgastando " + diasPerdidosAlAño + " días al año haciendo scroll (" + mesesPerdidosAlAño + " meses al año)";
    document.getElementById("añosPerdidosEn10años").textContent = "A lo largo de 10 años, habrás malgastado " + mesesPerdidosEn10Años + " meses (" + añosPerdidosEn10Años + " años) haciendo scroll";
    document.getElementById("añosPerdidosEn40años").textContent = "A lo largo de 40 años, habrás malgastado " + añosPerdidosEn40Años + " años haciendo scroll";
  } else if (tiempoDiarioMalgastadoEnMinutos == 360 || tiempoDiarioMalgastadoEnMinutos > 360) {
    console.log(tiempoDiarioMalgastadoEnMinutos);
    console.log("Mas de 6h");
    document.getElementById("imageReactionEmoji").src = "assets/images/phoneUse6.png"
    document.getElementById("labelNivelUso").textContent = "Estás loco man. Tus receptores de dopamina están fritos";
    document.getElementById("labelMinutosDiarios").textContent = tiempoDiarioMalgastadoEnMinutos  + "min";
    document.getElementById("porcentajeDiarioMalgastado").textContent = "Estás malgastando el " + porcentajeDelDiaMalgastado + " % de tu día haciendo scroll";
    document.getElementById("diasPerdidosAlAño").textContent = "Estás malgastando " + diasPerdidosAlAño + " días al año haciendo scroll (" + mesesPerdidosAlAño + " meses al año)";
    document.getElementById("añosPerdidosEn10años").textContent = "A lo largo de 10 años, habrás malgastado " + mesesPerdidosEn10Años + " meses (" + añosPerdidosEn10Años + " años) haciendo scroll";
    document.getElementById("añosPerdidosEn40años").textContent = "A lo largo de 40 años, habrás malgastado " + añosPerdidosEn40Años + " años haciendo scroll";
  }
}