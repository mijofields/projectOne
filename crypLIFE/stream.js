$(document).ready(function() {

	var currentPrice = {};
	var socket = io.connect('https://streamer.cryptocompare.com/');
	//Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
	//Use SubscriptionId 0 for TRADE, 2 for CURRENT and 5 for CURRENTAGG
	//For aggregate quote updates use CCCAGG as market
	var subscription = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD', '5~CCCAGG~LTC~USD', '5~CCCAGG~XRP~USD'];
	socket.emit('SubAdd', { subs: subscription });
	socket.on("m", function(message) {
		var messageType = message.substring(0, message.indexOf("~"));
		var res = {};
		if (messageType == CCC.STATIC.TYPE.CURRENTAGG) {
			res = CCC.CURRENT.unpack(message);
			dataUnpack(res);
		}
	});

	var dataUnpack = function(data) {
		var from = data['FROMSYMBOL'];
		var to = data['TOSYMBOL'];
		var fsym = CCC.STATIC.CURRENCY.getSymbol(from);
		var tsym = CCC.STATIC.CURRENCY.getSymbol(to);
		var pair = from + to;
		console.log(data);

		if (!currentPrice.hasOwnProperty(pair)) {
			currentPrice[pair] = {};
		}

		for (var key in data) {
			currentPrice[pair][key] = data[key];
		}

		if (currentPrice[pair]['LASTTRADEID']) {
			currentPrice[pair]['LASTTRADEID'] = parseInt(currentPrice[pair]['LASTTRADEID']).toFixed(0);
		}
		currentPrice[pair]['CHANGE24HOUR'] = CCC.convertValueToDisplay(tsym, (currentPrice[pair]['PRICE'] - currentPrice[pair]['OPEN24HOUR']));
		currentPrice[pair]['CHANGE24HOURPCT'] = ((currentPrice[pair]['PRICE'] - currentPrice[pair]['OPEN24HOUR']) / currentPrice[pair]['OPEN24HOUR'] * 100).toFixed(2) + "%";;
		displayData(currentPrice[pair], from, tsym, fsym);
	};

	var displayData = function(current, from, tsym, fsym) {
		console.log(current);
		var priceDirection = current.FLAGS;
		for (var key in current) {
			if (key == 'CHANGE24HOURPCT') {
				$('#' + key + '_' + from).text(' (' + current[key] + ')');
			}
			else if (key == 'LASTVOLUMETO' || key == 'VOLUME24HOURTO') {
				$('#' + key + '_' + from).text(CCC.convertValueToDisplay(tsym, current[key]));
			}
			else {
				$('#' + key + '_' + from).text(current[key]);
			}
		}

		$('#PRICE_' + from).removeClass();
		if (priceDirection & 1) {
			$('#PRICE_' + from).addClass("up");
		}
		else if (priceDirection & 2) {
			$('#PRICE_' + from).addClass("down");
		}
		if (current['PRICE'] > current['OPEN24HOUR']) {
			$('#CHANGE24HOURPCT_' + from).removeClass();
			$('#CHANGE24HOURPCT_' + from).addClass("up");
		}
		else if (current['PRICE'] < current['OPEN24HOUR']) {
			$('#CHANGE24HOURPCT_' + from).removeClass();
			$('#CHANGE24HOURPCT_' + from).addClass("down");
		}
	};
});
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoIQU3nsam8-aqDQ2-3Kq-vLXQNJsl9xw",
    authDomain: "chat-8b589.firebaseapp.com",
    databaseURL: "https://chat-8b589.firebaseio.com",
    projectId: "chat-8b589",
    storageBucket: "",
    messagingSenderId: "198324721118"
  };
  firebase.initializeApp(config);
            var db = new Firebase('https://new-project-84360.firebaseio.com/');
            $('#send-button').click(function() {
                var message = $('#text-message').val();
                var name = $('#text-name').val();
                db.push({
                    message: message,
                    name: name
                });
                $('#text-message').val("");
            });
            db.on('child_added', function(snapshot) {
                var data = snapshot.val();
                $('#messages').append(($('<b></b>').text("--> " + data.name + ": ")));
                $('#messages').append(($('<h></h>').text(data.message)));
                $('#messages').append(($('<p>').text("")));
            });
            // general config for all charts
var config = {
    presetColorScheme: 'albuquerque',
    timePeriod: '30m'
}

// exchange, currency pair, html element id
var charts = [
    ['bitfinex', 'btcusd', 'one'],
    ['kraken', 'btceur', 'two'],
    ['okcoin', 'btccny', 'three'],
    ['okcoin', 'btcusd-quarterly-futures', 'four']
]

// create all charts
charts.forEach(function (chart) {
    chart.push(new cryptowatch.Embed(chart[0], chart[1], config))
    chart[3].mount('#' + chart[2])
})

// listen for changes in "time period" select box
document.getElementById('timePeriod').onchange = function(event) {
    charts.forEach(function (chart) {
        var cell = document.getElementById(chart[2])
        cell.removeChild(cell.firstChild)
        chart[3].opts.timePeriod = event.target.value
        chart[3].mount('#' + chart[2])
    })
}