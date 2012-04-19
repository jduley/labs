 var amqp = require('amqp');
 var sys = require('sys');
 var connection = amqp.createConnection({ host: 'localhost' });

 connection.addListener('ready', function () {
    // Create a queue and bind to all messages.
    // Use the default 'amq.topic' exchange
    var q = connection.queue('hello', { autoDelete: false, durable: false, exclusive: false });
    // Catch all messages
    q.bind('#');

    // Receive messages
    q.subscribe(function (message) {
      console.log(message.data.toString());
    });
 });
