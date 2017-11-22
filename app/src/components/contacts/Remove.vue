<template lang="html">
  <div>
    <blockquote>
      Are you sure you want to remove
      {{ data.contact.first_name }} {{ data.contact.last_name }}
      from contacts list?
    </blockquote>

    <div class="gap"></div>
    <button class="btn btn-block btn-error" @click="removeContact()">Yes, remove</button>
    <div class="gap"></div>
    <button class="btn btn-block btn-primary btn-ghost" @click="cancelRemove()">Cancel</button>
  </div>
</template>

<script>
import store from '@/store'

import apiContacts from '@/lib/contacts/api'

import ModalController from '@/components/modals/ModalController'

export default {
  props: ['data', 'close'],
  methods: {
    removeContact () {
      const contact = this.data.contact
      apiContacts.remove(contact._id, contact)
        .then(res => {
          store.dispatch('removeContact', contact._id)

          this.close()
        })
        .catch(err => console.error(err.message))
    },
    cancelRemove () {
      const { title, component, data } = this.data.prevModal
      ModalController.closeAndOpen(title, component, data)
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
