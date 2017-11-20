<template lang="html">
  <div class="cb-style list">

    <div v-for="(key, index) in contacts">

      <div class="grid">
        <div class="cell -1of12">
          <div class="letter">
            {{ index }}
          </div>
        </div>
        <div class="cell -11of12">
          <Item
            v-for="contact in contacts[index]"
            :key="contact._id"
            :contact="contact"
            >
          </Item>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import store from '@/store'

import Item from './Item'

export default {
  created () {
    store.dispatch('getContacts')
  },
  destroyed () {
    store.dispatch('clearContacts')
  },
  computed: {
    contacts () {
      return store.getters.contacts
    }
  },
  components: { Item }
}
</script>

<style lang="scss" scoped>

.list {
  position: absolute;

  top: 6em;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 2em;
  overflow: auto;

  .letter {
    position: sticky;
    top: 0;
    padding-top: calc(1em + 3px);
    font-size: 1.5em;
  }
}

</style>
