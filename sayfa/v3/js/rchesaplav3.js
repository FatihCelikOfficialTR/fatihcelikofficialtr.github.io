//Botones para consumir API
const btnDollar = document.getElementById("dollar");
const btnEuro = document.getElementById("euro");
// const btnCalcular = document.getElementById("btn-calcular");

//Inicializar
var crytocurrencies;

//Contadores
let clickDollar = 0;
let clickEuro = 0;

//Parametros de RESETBOARD
const moneda = ["dollar", "euro"];
const monedaSimbolo = ["$", "₺"];

//INICIALIZACION ARREGLOS DE PRECIOS PARA CONVERSION
const precioDollarMonedas = [];
const precioEuroMonedas = [];

//CONSULTA DOLARES API
let xhReq = new XMLHttpRequest();
xhReq.open(
  "GET",
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20litecoin%2C%20tron%2C%20binancecoin%2C%20dogecoin%2C%20matic-network%2C%20solana&order=market_cap_desc&per_page=100&page=1&sparkline=false",
  false
);
xhReq.send(null);
let dataDollar = JSON.parse(xhReq.responseText);
console.log(dataDollar);
currentPriceDollar(dataDollar);

btnDollar.addEventListener("click", function () {
  if (clickDollar === 0) {
    resetBoard(dataDollar, moneda[0], monedaSimbolo[0]);
    clickDollar++;
  }
  Mostrar(moneda[0]);
});

//CONSULTA EUROS API
let euroReq = new XMLHttpRequest();
euroReq.open(
  "GET",
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&ids=bitcoin%2C%20ethereum%2C%20litecoin%2C%20tron%2C%20binancecoin%2C%20dogecoin%2C%20matic-network%2C%20solana&order=market_cap_desc&per_page=100&page=1&sparkline=false",
  false
);
euroReq.send(null);
let dataEuro = JSON.parse(euroReq.responseText);
console.log(dataEuro);
currenPriceEuro(dataEuro);

btnEuro.addEventListener("click", function () {
  if (clickEuro === 0) {
    resetBoard(dataEuro, moneda[1], monedaSimbolo[1]);
    clickEuro++;
  }
  Mostrar(moneda[1]);
});

//IMPRIMIR TABLA
function resetBoard(data, moneda, monedaSimbolo) {
  var $list = $(`#${moneda}-data`);
  $list.find(".crytocurrency").remove();
  const dataMoneda = [];

  for (let i = 0; i < 8; i++) {
    dataMoneda.push({
      name: data[i].name,
      symbol: data[i].symbol,
      current_price: data[i].current_price,
      price_change: data[i].price_change_percentage_24h,
      image: data[i].image,
    });
  }
  for (var i = 0; i < dataMoneda.length; i++) {
    var $item = $(
      "<tr class='text-center'>" +
        "<td>" +
        (i + 1) +
        "</td>" +
        "<td class='name'>" +
        "<img class='img__crypto' src='" +
        dataMoneda[i].image +
        "'/>" +
        "<span>" +
        dataMoneda[i].name +
        "</span>" +
        "<span class='symbol'>" +
        dataMoneda[i].symbol +
        "</span>" +
        "</td>" +
        // "<td class='symbol'>" + crytocurrencies[i].symbol + "</td>" +
        "<td>" +
        monedaSimbolo +
        " " +
        dataMoneda[i].current_price +
        "</td>" +
        "<td class=''>" +
        dataMoneda[i].price_change +
        "</td>" +
        // "<td class='image'>"+"<img class='img__crypto' src='"+ crytocurrencies[i].image+"'/>" + "</td>" +
        "</tr>"
    );
    dataMoneda[i].$item = $item;
    $list.append($item);
  }
}

//Mostrar y ocultas tablas
function Mostrar(moneda) {
  let elem = document.querySelector(`.tabla--${moneda}`);
  // let prom = document.querySelector(".prom");
  let textBtnMostrar = document.querySelector(".text-btn-mostrar");

  if (elem.classList.contains("hidden")) {
    elem.classList.remove("hidden");
    textBtnMostrar.innerHTML = "Gizlemek için düğmeye tıklayın!";
  } else {
    elem.classList.add("hidden");
    textBtnMostrar.innerHTML = "Kripto fiyatlarını görmek için butona tıklayın!";
  }
}

//CALCULAR - ENTER
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    console.log(e);
    calculateGoalPower();
  }
});

//Conversion SATOSHI a BTC
function calculateBTC() {
  var satoshi = parseFloat(document.getElementById("satoshi-value").value);
  var btc = satoshi / 100000000;

  console.log(satoshi);

  console.log(btc);

  document.getElementById("btc-resultado").value = btc.toFixed(8);
}

function currentPriceDollar(data) {
  for (let i = 0; i < 5; i++) {
    precioDollarMonedas.push({
      name: data[i].name,
      current_price: data[i].current_price,
    });
  }
  console.log(precioDollarMonedas);
}

function currenPriceEuro(data) {
  for (let i = 0; i < 5; i++) {
    precioEuroMonedas.push({
      name: data[i].name,
      current_price: data[i].current_price,
    });
  }
  console.log(precioEuroMonedas);
}

//Conversion Cripto a USD/EUR
function calculated$() {
  let crypto = parseFloat(document.getElementById("btc-value").value);

  let btc_dolar = crypto * precioDollarMonedas[0].current_price;
  let eth_dolar = crypto * precioDollarMonedas[1].current_price;
  let bnb_dolar = crypto * precioDollarMonedas[2].current_price;
  let doge_dolar = crypto * precioDollarMonedas[3].current_price;
  let matic_dolar = crypto * precioDollarMonedas[4].current_price;

  let btc_euro = crypto * precioEuroMonedas[0].current_price;
  let eth_euro = crypto * precioEuroMonedas[1].current_price;
  let bnb_euro = crypto * precioEuroMonedas[2].current_price;
  let doge_euro = crypto * precioEuroMonedas[3].current_price;
  let matic_euro = crypto * precioEuroMonedas[4].current_price;

  switch (document.getElementById("crypto-type").selectedIndex) {
    case 0:
      switch (document.getElementById("coin-type").selectedIndex) {
        case 0:
          document.getElementById("coin-resultado").value =
            btc_dolar.toFixed(2);
          break;
        default:
          document.getElementById("coin-resultado").value = btc_euro.toFixed(2);
          break;
      }
      break;
    case 1:
      switch (document.getElementById("coin-type").selectedIndex) {
        case 0:
          document.getElementById("coin-resultado").value =
            eth_dolar.toFixed(2);
          break;
        default:
          document.getElementById("coin-resultado").value = eth_euro.toFixed(2);
          break;
      }
      break;
    case 2:
      switch (document.getElementById("coin-type").selectedIndex) {
        case 0:
          document.getElementById("coin-resultado").value =
            bnb_dolar.toFixed(2);
          break;
        default:
          document.getElementById("coin-resultado").value = bnb_euro.toFixed(2);
          break;
      }
      break;
    case 3:
      switch (document.getElementById("coin-type").selectedIndex) {
        case 0:
          document.getElementById("coin-resultado").value =
            doge_dolar.toFixed(2);
          break;
        default:
          document.getElementById("coin-resultado").value =
            doge_euro.toFixed(2);
          break;
      }
      break;
    case 4:
      switch (document.getElementById("coin-type").selectedIndex) {
        case 0:
          document.getElementById("coin-resultado").value =
            matic_dolar.toFixed(2);
          break;
        default:
          document.getElementById("coin-resultado").value =
            matic_euro.toFixed(2);
          break;
      }
      break;
	  
  }
  console.log(crypto);
  console.log(btc_dolar);
}

/*---------------CALCULADORA------------------*/

function blockAmount() {
  // Returns pre-set block rewards based on block selected
  // Update if updated on rollercoin
  switch (document.getElementById("block-type").selectedIndex) {
    case 0:
      //bitcoin 28000
      var blockreward = 37500;
      document.getElementById("block-reward").value = 37500;
      break;
    case 1:
      //Doge 60
      var blockreward = 120;
      document.getElementById("block-reward").value = 120;
      break;
    case 2:
      //eth 0.0055
      var blockreward = 0.0065;
      document.getElementById("block-reward").value = 0.0065;
      break;
    case 3:
      //bnb 0.025
      var blockreward = 0.038;
      document.getElementById("block-reward").value = 0.038;
      break;
    case 4:
      //matic 4
      var blockreward = 5;
      document.getElementById("block-reward").value = 5;
      console.log("matic end");
      break;
    case 5:
      //SOL 0.06
      var blockreward = 0.19;
      document.getElementById("block-reward").value = 0.19;
      console.log("sol end");
      break;
	case 6:
      //TRX 60
      var blockreward = 60;
      document.getElementById("block-reward").value = 60;
      console.log("trx end");
      break;
	case 7:
      //LTC 0.015
      var blockreward = 0.015;
      document.getElementById("block-reward").value = 0.015;
      console.log("ltc end");
      break;
	case 8:
      //RST 150
      var blockreward = 150;
      document.getElementById("block-reward").value = 150;
      console.log("rst end");
      break;
    default:
      //RLT 20
      console.log("rlt start");
      var blockreward = 20;
      document.getElementById("block-reward").value = 20;
      break;
  }
}

function showHashpowerHelp() {
  var x = document.querySelector(
    "body > div.row.no-gutters.hashinput > div > div:nth-child(1) > img"
  );
  if (x.classList.contains("hide")) {
    x.classList.remove("hide");
  } else {
    x.classList.add("hide");
  }
}

function supportMeToggle() {
  var x = document.querySelector("body > div.supportMe");
  if (x.classList.contains("hidden")) {
    x.classList.add("animate__animate", "animate__fadeInLeft");
    x.classList.remove("hidden");
    console.log("revealed SupportMe");
    // x.classList.add("animate__animated", "animate__bounceOutLeft");
  } else {
    x.classList.add("hidden");
    console.log("Hide SupportMe");
  }
}

function calculateGoalPower() {
  console.log("Calculate Begin");
  var netpower = parseFloat(document.getElementById("network-power").value);
  var goalpower = parseFloat(document.getElementById("goal-power").value);
  var blockreward = parseFloat(document.getElementById("block-reward").value);

  switch (document.getElementById("network-power-selector").selectedIndex) {
    case 0:
      netpower *= 1000000000;
      console.log("Netpower after ghs conversion: " + netpower);
      break;
    case 1:
      netpower *= 1000000000000;
      console.log("Netpower after ths conversion: " + netpower);
      break;
    case 2:
      netpower *= 1000000000000000;
      console.log("Netpower after phs conversion: " + netpower);
      break;
    default:
      netpower *= 1000000000000000000;
      console.log("Netpower after ehs conversion: " + netpower);
      break;
  }
  switch (document.getElementById("goal-power-selector").selectedIndex) {
    case 0:
      //GH/s
      goalpower *= 1000000000;
      console.log("goalpower after ghs conversion: " + goalpower);
      break;
    case 1:
      //TH/s
      goalpower *= 1000000000000;
      console.log("goalpower after ths conversion: " + goalpower);
      break;
    case 2:
      //PH/s
      goalpower *= 1000000000000000;
      console.log("goalpwer after phs conversion: " + goalpower);
      break;
    default:
      //EH/s
      goalpower *= 1000000000000000000;
      console.log("goalpwer after ehs conversion: " + goalpower);
      break;
  }
  console.log("Block: " + blockreward);
  var exp_reward = blockreward * (goalpower / netpower);

  console.log("exp. reward " + exp_reward.toFixed(4));

  //All timers are now the same 2021-04-19
  const BlockTimer = 600;
  const secFullDay = 86400;

  const dailyBlocks = secFullDay / BlockTimer;
  console.log(exp_reward);

  switch (document.getElementById("block-type").selectedIndex) {
    case 0:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(4) + " <img src='../../img/svg_rc/btc.svg'  width='15' height='15'>";
      var btcResult = (exp_reward * dailyBlocks).toFixed(4);
      document.getElementById("daily").innerHTML = btcResult + " <img src='../../img/svg_rc/btc.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (btcResult * 7).toFixed(4) + " <img src='../../img/svg_rc/btc.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (btcResult * 30).toFixed(4) + " <img src='../../img/svg_rc/btc.svg'  width='15' height='15'>";
      break;
    case 1:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(4) + " <img src='../../img/svg_rc/doge.svg'  width='15' height='15'>";
      var dogeResult = (exp_reward * dailyBlocks).toFixed(6);
      document.getElementById("daily").innerHTML = dogeResult + " <img src='../../img/svg_rc/doge.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (dogeResult * 7).toFixed(4) + " <img src='../../img/svg_rc/doge.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (dogeResult * 30).toFixed(4) + " <img src='../../img/svg_rc/doge.svg'  width='15' height='150'>";
      break;
    case 2:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(8) + " <img src='../../img/svg_rc/eth.svg'  width='15' height='15'>";
      var ethResult = (exp_reward * dailyBlocks).toFixed(8);
      document.getElementById("daily").innerHTML = ethResult + " <img src='../../img/svg_rc/eth.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (ethResult * 7).toFixed(8) + " <img src='../../img/svg_rc/eth.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (ethResult * 30).toFixed(8) + " <img src='../../img/svg_rc/eth.svg'  width='15' height='15'>";
      break;
    case 3:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(8) + " <img src='../../img/svg_rc/bnb.svg'  width='15' height='15'>";
      var bnbResult = (exp_reward * dailyBlocks).toFixed(8);
      document.getElementById("daily").innerHTML = bnbResult + " <img src='../../img/svg_rc/bnb.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (bnbResult * 7).toFixed(8) + " <img src='../../img/svg_rc/bnb.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (bnbResult * 30).toFixed(8) + " <img src='../../img/svg_rc/bnb.svg'  width='15' height='15'>";
      break;
    case 4:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(8) + " <img src='../../img/svg_rc/matic.svg'  width='15' height='15'>";
      var maticResult = (exp_reward * dailyBlocks).toFixed(8);
      document.getElementById("daily").innerHTML = maticResult + " <img src='../../img/svg_rc/matic.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (maticResult * 7).toFixed(8) + " <img src='../../img/svg_rc/matic.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (maticResult * 30).toFixed(8) + " <img src='../../img/svg_rc/matic.svg'  width='15' height='15'>";
      break;
    case 5:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(8) + " <img src='../../img/svg_rc/sol.svg'  width='15' height='15'>";
      var solResult = (exp_reward * dailyBlocks).toFixed(8);
      document.getElementById("daily").innerHTML = solResult + " <img src='../../img/svg_rc/sol.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (solResult * 7).toFixed(8) + " <img src='../../img/svg_rc/sol.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (solResult * 30).toFixed(8) + " <img src='../../img/svg_rc/sol.svg'  width='15' height='15'>";
      break;
	case 6:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(8) + " <img src='../../img/svg_rc/trx.svg'  width='15' height='15'>";
      var trxResult = (exp_reward * dailyBlocks).toFixed(8);
      document.getElementById("daily").innerHTML = trxResult + " <img src='../../img/svg_rc/trx.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (trxResult * 7).toFixed(8) + " <img src='../../img/svg_rc/trx.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (trxResult * 30).toFixed(8) + " <img src='../../img/svg_rc/trx.svg'  width='15' height='15'>";
      break;
	case 7:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(8) + " <img src='../../img/svg_rc/ltc.svg'  width='15' height='15'>";
      var ltcResult = (exp_reward * dailyBlocks).toFixed(8);
      document.getElementById("daily").innerHTML = ltcResult + " <img src='../../img/svg_rc/ltc.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (ltcResult * 7).toFixed(8) + " <img src='../../img/svg_rc/ltc.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (ltcResult * 30).toFixed(8) + " <img src='../../img/svg_rc/ltc.svg'  width='15' height='15'>";
      break;
	case 8:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(8) + " <img src='../../img/svg_rc/rst.svg'  width='15' height='15'>";
      var rstResult = (exp_reward * dailyBlocks).toFixed(8);
      document.getElementById("daily").innerHTML = rstResult + " <img src='../../img/svg_rc/rst.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (rstResult * 7).toFixed(8) + " <img src='../../img/svg_rc/rst.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (rstResult * 30).toFixed(8) + " <img src='../../img/svg_rc/rst.svg'  width='15' height='15'>";
      break;
    default:
      document.getElementById("exp_reward").innerHTML =
        exp_reward.toFixed(8) + " <img src='../../img/svg_rc/rlt.svg'  width='15' height='15'>";
      var rltResult = (exp_reward * dailyBlocks).toFixed(4);
      document.getElementById("daily").innerHTML = rltResult + " <img src='../../img/svg_rc/rlt.svg'  width='15' height='15'>";
      document.getElementById("weekly").innerHTML =
        (rltResult * 7).toFixed(4) + " <img src='../../img/svg_rc/rlt.svg'  width='15' height='15'>";
      document.getElementById("monthly").innerHTML =
        (rltResult * 30).toFixed(4) + " <img src='../../img/svg_rc/rlt.svg'  width='15' height='15'>";
      break;
  }
}
