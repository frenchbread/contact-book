const Contact = require('../../schemas/contact')

module.exports = {

  add (data) {
    data.updatedAt = new Date()
    data.createdAt = new Date()

    const contact = new Contact(data)

    return new Promise((resolve, reject) => {
      contact.save((err, res) => {
        if (err) reject(err)

        resolve(res)
      })
    })
  },

  get (q) {
    return new Promise((resolve, reject) => {
      Contact
        .find(q)
        .exec((err, res) => {
          if (err) reject(err)

          resolve(res)
        })
    })
  },

  getOne (q) {
    return new Promise((resolve, reject) => {
      Contact
        .findOne(q)
        .exec((err, res) => {
          if (err) reject(err)

          resolve(res)
        })
    })
  },

  update (_id, data) {
    data.updatedAt = new Date()

    return new Promise((resolve, reject) => {
      Contact
        .update({ _id }, data)
        .exec((err, res) => {
          if (err) reject(err)

          this.getOne({ _id })
            .then(updatedContact => resolve(updatedContact))
            .catch(err1 => reject(err1))
        })
    })
  },

  remove (_id) {
    return new Promise((resolve, reject) => {
      Contact
        .remove({ _id })
        .exec((err, res) => {
          if (err) reject(err)

          resolve(res)
        })
    })
  }
}
