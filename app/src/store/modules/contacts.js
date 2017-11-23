import apiContacts from '@/lib/contacts/api'
import libContacts from '@/lib/contacts'

const state = {
  all: [],
  q: '',
  isLoading: false
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
  UPDATE_CONTACT (state, contact) {
    const toRemove = state.all.map(x => x._id).indexOf(contact._id)
    state.all.splice(toRemove, 1)
    state.all.push(contact)
  },
  REMOVE_CONTACT (state, _id) {
    const toRemove = state.all.map(x => x._id).indexOf(_id)
    state.all.splice(toRemove, 1)
  },
  UPDATE_QUERY (state, q) {
    state.q = q
  },
  START_LOADER (state) {
    state.isLoading = true
  },
  STOP_LOADER (state) {
    state.isLoading = false
  }
}

const actions = {
  getContacts ({ commit }) {
    commit('START_LOADER')
    apiContacts.get()
      .then(contacts => {
        commit('ADD_CONTACTS', contacts)
        commit('STOP_LOADER')
      })
      .catch(err => {
        commit('STOP_LOADER')
        console.error(err.message)
      })
  },
  clearContacts ({ commit }) {
    commit('CLEAR_CONTACTS')
  },
  addContact ({ commit }, contact) {
    commit('ADD_CONTACT', contact)
  },
  updateContact ({ commit }, contact) {
    commit('UPDATE_CONTACT', contact)
  },
  removeContact ({ commit }, _id) {
    commit('REMOVE_CONTACT', _id)
  },
  updateQuery ({ commit }, q) {
    commit('UPDATE_QUERY', q)
  }
}

const getters = {
  contacts: state => {
    const q = state.q
    const contacts = state.all

    return libContacts.parseForList(contacts, q)
  },
  isLoading: state => {
    return state.isLoading
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
