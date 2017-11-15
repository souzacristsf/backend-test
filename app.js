const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
// const path = require('path')
const validator = require('express-validator')
const consign = require('consign')

const app = express()

app.set('superSecret', '1a5H(qzO&1+!8M35tXvai3A*JF%Os]eOoG63/Oo+:1S(R[%x[js09UKDam0#85')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(morgan('dev'))
app.use(validator())
app.use(cors())

// app.use(express.static(path.join(__dirname, './public')));
//DESCOMENTE A LINHA ABAIXO, PARA ATIVAR A AUTENTICACAO.
// app.use('/api', app.jwt);

app.set('port', (process.env.PORT || 5000))

const port = app.get('port')
const server = http.createServer(app)

//Para trabalhar com socket.io
// const io = require('socket.io')(server)

// app.use(function (req, res, next) {
//   res.io = io
//   next()
// })

consign({cwd: 'app', verbose: false})
  // .include('config')
  .include('middleware')
  .include('models')
  .include('helps')
  .include('socket')
  .include('controllers')
  // .include('insertAutomatic')
  .include('validates')
  .include('routes')
  .into(app)

// quando a rota não existir enviar um status 404
app.use(function(req, res, next) {
  const err = {error: 'Route not found'}
  res.status(404).json(err)
});

server.listen(port)
