<template lang="html">
  <div class="cb-style list">

    <Search></Search>

    <Item
      v-for="contact in contacts"
      :key="contact._id"
      :contact="contact"
      >
    </Item>

  </div>
</template>

<script>
import store from '@/store'

import Item from './Item'
import Search from './Search'

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
  components: { Item, Search }
}
</script>

<style lang="scss" scoped>

.list {
  position: absolute;

  top: 6em;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: auto;
}

</style>
