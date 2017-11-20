import _ from 'lodash'

export default {
  parseForList (contacts, query) {
    const filtered = helpers._filter(contacts, query)

    const grouped = helpers._groupByLetter(filtered)

    const sorted = helpers._sortObjectKeys(grouped)

    return sorted
  }
}

const helpers = {
  _filter (contacts, q) {
    return _.filter(contacts, contact => {
      const a = contact.first_name.toLowerCase()
      const b = contact.last_name.toLowerCase()
      const c = a + ' ' + b

      const result =
        a.indexOf(q) > -1 ||
        b.indexOf(q) > -1 ||
        c.indexOf(q) > -1

      return result
    })
  },
  _groupByLetter (contacts) {
    return _.groupBy(contacts, contact => {
      return contact.first_name[0].toUpperCase()
    })
  },
  _sortObjectKeys (contactsBook) {
    let sorted = {}

    _.forEach(Object.keys(contactsBook).sort(), key => {
      sorted[key] = contactsBook[key]
    })

    return sorted
  }
}
