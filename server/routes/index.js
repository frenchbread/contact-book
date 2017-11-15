const homeRoutes = require('./home')
const contactRoutes = require('./contacts')

let routes = []

routes = routes.concat(homeRoutes, contactRoutes)

module.exports = routes
