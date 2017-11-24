<template lang="html">
  <div class="cb-style list">

    <div v-if="!isLoading">
      <div v-if="itemsFound()">
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
      <div v-else class="grid">
        <div class="cell -1of12">

        </div>
        <div class="cell -11of12">
          <blockquote>
            > No items found
          </blockquote>
        </div>
      </div>

    </div>
    <div v-else class="align-center">
      <div class="loading"></div>
    </div>

  </div>
</template>

<script>
import _ from 'lodash'

import store from '@/store'

import Item from './Item'

export default {
  created () {
    store.dispatch('getContacts')
  },
  destroyed () {
    store.dispatch('clearContacts')
  },
  methods: {
    itemsFound () {
      return !_.isEmpty(this.contacts)
    }
  },
  computed: {
    contacts () {
      return store.getters.contacts
    },
    isLoading () {
      return store.getters.isLoading
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

  background-color: #fff;

  .letter {
    position: sticky;
    top: 0;
    padding: calc(1em + 3px) 0 calc(1em + 3px);
    font-size: 1.5em;
  }
}

</style>
