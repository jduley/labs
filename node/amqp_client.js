var amqp = require('amqp');
var sys = require('sys');
var connection = amqp.createConnection({ host: 'localhost' });
connection.addListener('ready', function () {
	
	//listen for telemetry messages
    var q = connection.queue('t1', { autoDelete: false, durable: false, exclusive: false });
    q.bind('#');

    // handle incoming telemetry
    q.subscribe(function (message) {
		console.log(message.data.toString());
		var obj = JSON.parse(message.data);
		console.log(obj);
    });
});
