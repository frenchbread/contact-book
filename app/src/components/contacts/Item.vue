<template lang="html">
  <div class="cb-style contact" @click="showContactDetails()">
    <b>{{ contact.first_name }} {{ contact.last_name }}</b>
  </div>
</template>

<script>
import ModalController from '@/components/modals/ModalController'

import View from './View'

export default {
  props: ['contact'],
  methods: {
    showContactDetails () {
      ModalController.open('Contact details', View, { contact: this.contact })
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../styles/colors.scss';

.contact {
  margin: 0.5em 0 0.5em;
  border-color: $main;

  &:hover {
    background-color: $main;
    color: #fff;
    cursor: pointer;
  }
}

</style>
