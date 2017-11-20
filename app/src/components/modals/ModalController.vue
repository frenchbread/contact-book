<template lang="html">

</template>

<script>
const BG_MASK_CLASS = 'bg-mask'
const MODAL_REMOVE_CLASS = ' remove'
const BG_MASK_HIDE_CLASS = ' hide'

export default {
  state: {
    modal: {},
    show: false,
    bgMaskClass: BG_MASK_CLASS
  },

  open (title, component, data) {
    if (!this.state.show) {
      this._add({ title, component, data })
      this.state.show = true
    }
  },

  close () {
    this.state.modal.className += MODAL_REMOVE_CLASS
    this.state.bgMaskClass += BG_MASK_HIDE_CLASS

    setTimeout(() => {
      this.state.modal = {}
      this.state.show = false

      this.state.bgMaskClass = BG_MASK_CLASS
    }, 160)
  },

  _add ({ title, component, data }) {
    this.state.modal = {
      id: new Date().getTime(),
      title,
      component,
      data,
      className: 'modal'
    }
  }
}
</script>

<style lang="css">
</style>
