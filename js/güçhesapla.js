//Conversion SATOSHI a BTC
function calculateBTC() {
  var satoshi = parseFloat(document.getElementById("satoshi-value").value);
  var btc = satoshi / 100000000;
  document.getElementById("btc-resultado").value = btc.toFixed(8);
}

const { Block } = require("strip-comments/lib/Node");

function blockAmount() {
    // Returns pre-set block rewards based on block selected
    // Update if updated on rollercoin
    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            //Bitcoin - 28000
            var blockreward = 33000;
            document.getElementById("block-reward").value = 33000;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            break;
        case 1:
            //Doge - 60
            var blockreward = 180;
            document.getElementById("block-reward").value = 180;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            break;
        case 2:
            //Eth - 0.0055
            var blockreward = 0.0044;
            document.getElementById("block-reward").value = 0.0044;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            break;
        case 3:
            //Bnb - 0.025
            var blockreward = 0.04;
            document.getElementById("block-reward").value = 0.04;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            break;
        case 4:
            //Matic - 4
            var blockreward = 11;
            document.getElementById("block-reward").value = 11;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            console.log("matic end");
            break;
        case 5:
            //SOL - 0.06
            var blockreward = 0.15;
            document.getElementById("block-reward").value = 0.15;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            console.log("sol end");
            break;
		case 6:
            //TRX - 60
            var blockreward = 57;
            document.getElementById("block-reward").value = 57;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            console.log("trx end");
            break;
		case 7:
            //LTC - 0.015
            var blockreward = 0.017;
            document.getElementById("block-reward").value = 0.017;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            console.log("ltc end");
            break;
		case 8:
            //RST - 150
            var blockreward = 150;
            document.getElementById("block-reward").value = 150;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            console.log("rst end");
            break;
    default:
            //RLT - 20
            console.log("rlt start");
            var blockreward = 20;
            document.getElementById("block-reward").value = 20;
			document.getElementById("exp_reward").innerHTML = "❌ ⛏";
			document.getElementById("daily").innerHTML = "❌ ⛏";
			document.getElementById("weekly").innerHTML = "❌ ⛏";
			document.getElementById("monthly").innerHTML = "❌ ⛏";
			document.getElementById("yearly").innerHTML = "❌ ⛏";
            break;
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
        case 3:
            netpower *= 1000000000000000000;
            console.log("Netpower after ehs conversion: " + netpower);
            break;
		default:
            netpower *= 1000000000000000000000;
            console.log("Netpower after zhs conversion: " + netpower);
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
        case 3:
            //EH/s
            goalpower *= 1000000000000000000;
            console.log("goalpwer after ehs conversion: " + goalpower);
            break;
		default:
            //ZH/s
            goalpower *= 1000000000000000000000;
            console.log("goalpwer after zhs conversion: " + goalpower);
            break;
    }
    console.log("Block: " + blockreward);
    var exp_reward = blockreward * (goalpower / netpower);

    console.log("exp. reward " + exp_reward.toFixed(4));

    //All timers are now the same 2021-04-19
    let blockInput = parseFloat(document.getElementById("block-timer").value);
    const BlockTimer = blockInput * 60;
    console.log("Blocktimer is: " + BlockTimer + ". (" + blockInput + " * 60");
    const secFullDay = 86400;

    const dailyBlocks = secFullDay / BlockTimer;
    console.log(exp_reward);

    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " SAT ⛏";
            var btcResult = (exp_reward * dailyBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = btcResult + " SAT ⛏";
            document.getElementById("weekly").innerHTML = (btcResult * 7).toFixed(4) + " SAT ⛏";
            document.getElementById("monthly").innerHTML = (btcResult * 30).toFixed(4) + " SAT ⛏";
			document.getElementById("yearly").innerHTML = (btcResult * 365).toFixed(4) + " SAT ⛏";
            break;
        case 1:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " <img src='img/svg_rc/doge.svg'  width='15' height='15'>";
            var dogeResult = (exp_reward * dailyBlocks).toFixed(6);
            document.getElementById("daily").innerHTML = dogeResult + " <img src='img/svg_rc/doge.svg'  width='15' height='15'>";
            document.getElementById("weekly").innerHTML = (dogeResult * 7).toFixed(4) + " <img src='img/svg_rc/doge.svg'  width='15' height='15'>";
            document.getElementById("monthly").innerHTML = (dogeResult * 30).toFixed(4) + " <img src='img/svg_rc/doge.svg'  width='15' height='15'>";
			document.getElementById("yearly").innerHTML = (dogeResult * 365).toFixed(4) + " <img src='img/svg_rc/doge.svg'  width='15' height='15'>";
            break;
        case 2:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " <img src='img/svg_rc/eth.svg'  width='15' height='15'>";
            var ethResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = ethResult + " <img src='img/svg_rc/eth.svg'  width='15' height='15'>";
            document.getElementById("weekly").innerHTML = (ethResult * 7).toFixed(8) + " <img src='img/svg_rc/eth.svg'  width='15' height='15'>";
            document.getElementById("monthly").innerHTML = (ethResult * 30).toFixed(8) + " <img src='img/svg_rc/eth.svg'  width='15' height='15'>";
			document.getElementById("yearly").innerHTML = (ethResult * 365).toFixed(8) + " <img src='img/svg_rc/eth.svg'  width='15' height='15'>";
            break;
        case 3:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " <img src='img/svg_rc/bnb.svg'  width='15' height='15'>";
            var bnbResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = bnbResult + " <img src='img/svg_rc/bnb.svg'  width='15' height='15'>";
            document.getElementById("weekly").innerHTML = (bnbResult * 7).toFixed(8) + " <img src='img/svg_rc/bnb.svg'  width='15' height='15'>";
            document.getElementById("monthly").innerHTML = (bnbResult * 30).toFixed(8) + " <img src='img/svg_rc/bnb.svg'  width='15' height='15'>";
			document.getElementById("yearly").innerHTML = (bnbResult * 365).toFixed(8) + " <img src='img/svg_rc/bnb.svg'  width='15' height='15'>";
            break;
        case 4:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " <img src='img/svg_rc/matic.svg'  width='15' height='15'>";
            var maticResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = maticResult + " <img src='img/svg_rc/matic.svg'  width='15' height='15'>";
            document.getElementById("weekly").innerHTML = (maticResult * 7).toFixed(8) + " <img src='img/svg_rc/matic.svg'  width='15' height='15'>";
            document.getElementById("monthly").innerHTML = (maticResult * 30).toFixed(8) + " <img src='img/svg_rc/matic.svg'  width='15' height='15'>";
			document.getElementById("yearly").innerHTML = (maticResult * 365).toFixed(8) + " <img src='img/svg_rc/matic.svg'  width='15' height='15'>";
            break;
        case 5:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " <img src='img/svg_rc/sol.svg'  width='15' height='15'>";
            var solResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = solResult + " <img src='img/svg_rc/sol.svg'  width='15' height='15'>";
            document.getElementById("weekly").innerHTML = (solResult * 7).toFixed(8) + " <img src='img/svg_rc/sol.svg'  width='15' height='15'>";
            document.getElementById("monthly").innerHTML = (solResult * 30).toFixed(8) + " <img src='img/svg_rc/sol.svg'  width='15' height='15'>";
			document.getElementById("yearly").innerHTML = (solResult * 365).toFixed(8) + " <img src='img/svg_rc/sol.svg'  width='15' height='15'>";
            break;
		case 6:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " <img src='img/svg_rc/trx.svg'  width='15' height='15'>";
            var trxResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = trxResult + " <img src='img/svg_rc/trx.svg'  width='15' height='15'>";
            document.getElementById("weekly").innerHTML = (trxResult * 7).toFixed(8) + " <img src='img/svg_rc/trx.svg'  width='15' height='15'>";
            document.getElementById("monthly").innerHTML = (trxResult * 30).toFixed(8) + " <img src='img/svg_rc/trx.svg'  width='15' height='15'>";
			document.getElementById("yearly").innerHTML = (trxResult * 365).toFixed(8) + " <img src='img/svg_rc/trx.svg'  width='15' height='15'>";
            break;
		case 7:
           document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " <img src='img/svg_rc/ltc.svg'  width='15' height='15'>";
            var ltcResult = (exp_reward * dailyBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = ltcResult + " <img src='img/svg_rc/ltc.svg'  width='15' height='15'>";
            document.getElementById("weekly").innerHTML = (ltcResult * 7).toFixed(4) + " <img src='img/svg_rc/ltc.svg'  width='15' height='15'>";
            document.getElementById("monthly").innerHTML = (ltcResult * 30).toFixed(4) + " <img src='img/svg_rc/ltc.svg'  width='15' height='15'>";
			document.getElementById("yearly").innerHTML = (ltcResult * 365).toFixed(4) + " <img src='img/svg_rc/ltc.svg'  width='15' height='15'>";
            break;
		case 8:
           document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " <img src='img/svg_rc/rst.svg'  width='15' height='15'>";
            var rstResult = (exp_reward * dailyBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = rstResult + " <img src='img/svg_rc/rst.svg'  width='15' height='15'>";
            document.getElementById("weekly").innerHTML = (rstResult * 7).toFixed(4) + " <img src='img/svg_rc/rst.svg'  width='15' height='15'>" ;
            document.getElementById("monthly").innerHTML = (rstResult * 30).toFixed(4) + " <img src='img/svg_rc/rst.svg'  width='15' height='15'>";
			document.getElementById("yearly").innerHTML = (rstResult * 365).toFixed(4) + " <img src='img/svg_rc/rst.svg'  width='15' height='15'>";
            break;
        default:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " <img src='img/svg_rc/rlt.svg'  width='15' height='15'>";
            var rltResult = (exp_reward * dailyBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = rltResult + " <img src='img/svg_rc/rlt.svg'  width='15' height='15'>";
            document.getElementById("weekly").innerHTML = (rltResult * 7).toFixed(4) + " <img src='img/svg_rc/rlt.svg'  width='15' height='15'>";
            document.getElementById("monthly").innerHTML = (rltResult * 30).toFixed(4) + " <img src='img/svg_rc/rlt.svg'  width='15' height='15'>";
			document.getElementById("yearly").innerHTML = (rltResult * 365).toFixed(4) + " <img src='img/svg_rc/rlt.svg'  width='15' height='15'>";
            break;
    }
}