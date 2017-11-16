import apiContacts from '@/lib/contacts/api'

const state = {
  all: []
}

const mutations = {
  ADD_CONTACTS (state, contacts) {
    state.all = contacts
  },
  ADD_CONTACT (state, contact) {
    state.all.push(contact)
  },
  CLEAR_CONTACTS (state) {
    state.all = []
  },
  EDIT_CONTACT (state, contact) {
    const toRemove = state.all.map(x => x._id).indexOf(contact._id)
    state.all.splice(toRemove, 1)
    state.all.push(contact)
  },
  REMOVE_CONTACT (state, _id) {
    const toRemove = state.all.map(x => x._id).indexOf(_id)
    state.all.splice(toRemove, 1)
  }
}

const actions = {
  getContacts ({ commit }) {
    apiContacts.get()
      .then(contacts => commit('ADD_CONTACTS', contacts))
      .catch(err => console.error(err.message))
  },
  clearContacts ({ commit }) {
    commit('CLEAR_CONTACTS')
  }
}

const getters = {
  contacts: state => state.all
}

export default {
  state,
  mutations,
  actions,
  getters
}
