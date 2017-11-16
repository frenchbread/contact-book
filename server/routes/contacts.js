const server = require('server')

const contactsModel = require('../lib/contacts')

const { get, post, put, del } = server.router
const { json, status } = server.reply

module.exports = [

  // Retrieve all contacts
  get('/contacts', ctx => {
    return contactsModel.get({})
      .then(data => json(data))
      .catch(() => status(500))
  }),

  // Add new contact
  post('/contacts', ctx => {
    const data = ctx.data

    return contactsModel.add(data)
      .then(data => json(data))
      .catch(() => status(500))
  }),

  // Update contact
  put('/contacts/:_id', ctx => {
    const _id = ctx.params._id
    const data = ctx.data

    return contactsModel.update(_id, data)
      .then(data => json(data))
      .catch(() => status(500))
  }),

  // Delete contact
  del('/contacts/:_id', ctx => {
    const _id = ctx.params._id

    return contactsModel.remove(_id)
      .then(data => json(data))
      .catch(() => status(500))
  })

]
