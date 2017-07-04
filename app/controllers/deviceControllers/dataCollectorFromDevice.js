var net = require('net');
var config = require('./../../../config/config.json');

var server = net.createServer(function(socket){

     socket.on('connect',socketConnectionSuccesfull(socket));
     socket.on('data',dataRecievedFromDeviceAndStoringInDatabase(socket,dataRecievedFromDevice));
     socket.on('error',errorOccureWhileRecievingData(socket,error));
     socket.on('close',socketConnectionIsClosedFromDevice(socket));
 });

var socketConnectionSuccesfull = function (socket) {
    console.log(`connection is succesfully: ${socket.remoteAddress} : ${socket.remotePort}`);
};

var dataRecievedFromDeviceAndStoringInDatabase = function (socket,datarecievedfromdevice) {
    console.log(`data recieved from ${socket.remoteAddress} : ${socket.remotePort} is ${datarecievedfromdevice}`);
};

var errorOccureWhileRecievingData = function (socket,error) {
    console.log(`error occure while connecting to ${socket.remoteAddress} : ${socket.remotePort} is ${error}`);
};

var socketConnectionIsClosedFromDevice = function (socket) {
    console.log(`connection is closed: ${socket.remoteAddress} : ${socket.remotePort}`);
};

server.listen(config.portTcp,function (err) {
    if(err){
        console.log(`there is an error in running server ${err}`)
    }else{
        console.log('server is runnning properly');
    }
});