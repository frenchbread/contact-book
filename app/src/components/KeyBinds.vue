<template lang="html">

</template>

<script>
import $ from 'jquery'
import mousetrap from 'mousetrap'

import ModalController from '@/components/modals/ModalController'
import AddContact from '@/components/contacts/Add'

export default {
  mounted () {
    mousetrap.bind('n', e => {
      e.preventDefault()

      ModalController.open('Add new contact', AddContact)
    })

    mousetrap.bind('s', e => {
      e.preventDefault()

      $('.search').focus()
    })

    mousetrap.bind('esc', e => {
      e.preventDefault()

      $('.search').blur()
      ModalController.close()
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
