const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
const port = new SerialPort('COM1', {
baudRate: 9600,
dataBits: 8,
parity: 'none',
stopBits: 1,
flowControl: false
})

port.open(function () {
 console.log('연결됨');
port.on('data', function(data) {
 console.log('Data received: ' + data);
 });
});