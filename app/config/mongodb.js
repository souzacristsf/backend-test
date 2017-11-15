const mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = require('bluebird')


const online = false

const url = online ? '' : 'mongodb://localhost/catho';

// const options = { 
//   //useMongoClient: true,
//   db: { native_parser: true },
//   server: { "auto_reconnect": true, "poolSize": 10, "socketOptions": { "keepAlive": 60 } }
// }

const options = {
  useMongoClient: true
}

const connection = mongoose.createConnection(url, options);
// autoIncrement.initialize(connection);


mongoose.connect(url, options)
  .then(() => {
    mongoose.connection.on('error', (err) => {
      if (err) throw err
    })
  })
  .catch((err) => {
    if (err) throw err
  })

connection.on('error', (err) => console.log('Erro de conexao.', err))
connection.on('open', () => console.log('Conexão aberta.'))
connection.on('connected', () => console.log('Conectado'))
connection.on('disconnected', () => console.log('Desconectado'))

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    process.exit(0)
  })
})
