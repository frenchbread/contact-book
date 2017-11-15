const server = require('server')
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('./config')

const { modern } = server.utils

// Initialize mongodb connection
mongoose.connect(config.db)

server(

  // Server config
  { port: config.port, security: { csrf: false } },

  // Cors
  modern(cors()),

  // Routes
  require('./routes')

).then(ctx => console.log(`server running at port ${ctx.options.port}`))
