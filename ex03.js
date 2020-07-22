const express = require('express')
const server = express()

server.use('/api', function(req, res, next) {
  console.log('Início...')
  next()
  console.log('Fim...')
})
//desta forma aceita todas as requições pela Url
/*server.use(function(req, res, next) {
  console.log('Início...')
  next()
  console.log('Fim...')
})*/

server.use('/api', function(req, res) {
  console.log('Resposta...')
  res.send('<h1>Api...</h1>')
})

server.listen(3000, () => console.log('Executando...'))
