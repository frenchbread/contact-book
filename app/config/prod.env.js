var config = require('./config.js')

module.exports = {
  NODE_ENV: '"production"',
  API_HOST: `"${config.api_host}"`
}
