const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ContactSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  date_of_birth: {
    type: String
  },
  addresses: {
    type: Array
  },
  phone_numbers: {
    type: Array
  },
  emails: {
    type: Array
  },
  updatedAt: {
    type: Date
  },
  createdAt: {
    type: Date
  }
})

module.exports = mongoose.model('Contact', ContactSchema)
