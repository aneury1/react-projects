

const SocketIO = require('socket.io');


const StartSocketIO = (server) =>{
const ws = SocketIO(server);
ws.on('connection', ()=>{
   console.log('new client?');
});
}


module.exports={
   StartSocketIO,
};