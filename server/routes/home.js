const server = require('server')
const pckg = require('../package.json')

const { get } = server.router
const { json } = server.reply

module.exports = [
  get('/', ctx => json({
    name: pckg.name,
    details: pckg.description,
    version: pckg.version
  }))
]
