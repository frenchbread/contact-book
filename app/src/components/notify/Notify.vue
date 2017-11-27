<template lang="html">
</template>

<script>
export default {
  state: [],
  success (message, details, timeout, delay) {
    this.state.push({
      id: new Date().getTime(),
      message,
      details,
      timeout,
      delay,
      type: 'success'
    })
  },
  info (message, details, timeout, delay) {
    this.state.push({
      id: new Date().getTime(),
      message,
      details,
      timeout,
      delay,
      type: 'info'
    })
  },
  warning (message, details, timeout, delay) {
    this.state.push({
      id: new Date().getTime(),
      message,
      details,
      timeout,
      delay,
      type: 'warning'
    })
  },
  error (message, details, timeout, delay) {
    this.state.push({
      id: new Date().getTime(),
      message,
      details,
      timeout,
      delay,
      type: 'error'
    })
  },
  removeNotification: function (notification) {
    const tokenToRemove = this.state.map(x => x.id).indexOf(notification.id)
    setTimeout(() => {
      this.state.splice(tokenToRemove, 1)
    }, 360)
  }
}
</script>

<style lang="scss" scoped></style>
