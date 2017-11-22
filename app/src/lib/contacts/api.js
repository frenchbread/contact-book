import axe from '../axe'

export default {
  get () {
    return axe.get('/contacts')
      .then(res => res.data)
      .catch(err => err)
  },
  add (data) {
    return axe.post('/contacts', data)
      .then(res => res.data)
      .catch(err => err)
  },
  update (id, data) {
    return axe.put(`/contacts/${id}`, data)
      .then(res => res.data)
      .catch(err => err)
  },
  remove (id) {
    return axe.delete(`/contacts/${id}`)
      .then(res => res.data)
      .catch(err => err)
  }
}
