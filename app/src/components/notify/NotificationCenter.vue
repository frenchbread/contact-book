<template lang="html">
  <div class="notification-center">
    <Notification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
      :closeNotification="removeNotification"
      transition="fade">
    </Notification>
  </div>
</template>

<script>
import Notification from './Notification'
import Notify from './Notify'
export default {
  data () {
    return {
      notifications: Notify.state
    }
  },
  methods: {
    removeNotification (notification) {
      Notify.removeNotification(notification)
    }
  },
  components: {
    Notification
  }
}
</script>

<style lang="scss" scoped>

.notification-center {
  position: fixed;
  z-index: 12;
  bottom: 0.5em;
  right: 0.5em;
  min-width: 310px;
}

</style>
