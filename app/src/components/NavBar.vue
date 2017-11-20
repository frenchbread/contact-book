<template lang="html">
  <header class="cb-style grid">
    <div class="cell -3of12">
      <span class="logo">Contacts</span>
    </div>
    <div class="cell -6of12">
      <input
        class="search"
        type="text"
        placeholder="Search by name or phone..."
        v-model="searchText"
        @keyup="submitSearch()"
        />
    </div>
    <div class="cell -3of12 align-right">
      <span @click="openAddContactModal()" class="icon-btn" v-html="feather.toSvg('plus', opts)"></span>
    </div>
  </header>
</template>

<script>
import feather from 'feather-icons'

import store from '@/store'

import ModalController from '@/components/modals/ModalController'
import AddContact from '@/components/contacts/Add'

export default {
  data () {
    return {
      feather,
      opts: { height: 20, width: 20, 'stroke-width': 2.5 },
      searchText: ''
    }
  },
  methods: {
    openAddContactModal () {
      ModalController.open('Add new contact', AddContact)
    },
    submitSearch () {
      store.dispatch('updateQuery', this.searchText)
    }
  },
  components: { AddContact }
}
</script>

<style lang="scss" scoped>

@import '../styles/colors.scss';

header {
  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  height: 5em;
  line-height: 2.7em;

  background-color: $main2;
  border-color: $main2;
  color: #fff;

  .logo {
    font-size: 1.5em;
    font-weight: bold;
  }

  .search {
    padding: 0.3em;
    font-size: 1em;
    width: 100%;
    border: 3px solid #ccc;
    border-radius: 3px;

    outline-color: $main;
  }

  .icon-btn {
    padding: 0.5em;
    display: inline-block;
    line-height: 0;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      background-color: $main;
      color: white;
    }
  }
}

</style>
