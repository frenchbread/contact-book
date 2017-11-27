<template lang="html">
  <div :class="getClass()" @click="triggerClose(notification)">
    <div class="notification-message">
      <div class="message">{{notification.message}}</div>
      <div v-if="notification.details" class="details">
        {{notification.details}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['notification', 'closeNotification'],
  data () {
    return {
      timer: null,
      close: false
    }
  },
  created () {
    const { timeout, delay } = this.notification
    if ((typeof timeout === 'undefined') || (this.notification.timeout)) {
      this.timer = setTimeout(function () {
        this.triggerClose(this.notification)
      }.bind(this), (typeof delay !== 'undefined') ? delay : 6000)
    }
  },
  methods: {
    getClass () {
      return `notification notification-${this.notification.type} ${(this.close) ? 'remove' : ''}`
    },
    triggerClose (notification) {
      clearTimeout(this.timer)
      this.close = true
      this.closeNotification(notification)
    }
  }
}
</script>

<style lang="scss" scoped>

$width: 310px;

.notification {
  width: $width;
  margin-top: 1em;
  word-wrap: break-word;
  position: relative;
  background-color: white;
  color: #555;
  opacity: 0.9;

  // border-radius: 3px;
  // -moz-border-radius: 3px;
  // -webkit-border-radius: 3px;

  -webkit-animation: notification-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Safari 4+ */
  -moz-animation:    notification-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Fx 5+ */
  -o-animation:      notification-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Opera 12+ */
  animation:         notification-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499);

  &.remove {
    -webkit-animation:  notification-hide .12s cubic-bezier(.34,.07,1,.2),
                        notification-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1); /* Safari 4+ */
    -moz-animation:    notification-hide .12s cubic-bezier(.34,.07,1,.2),
                        notification-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1); /* Fx 5+ */
    -o-animation:      notification-hide .12s cubic-bezier(.34,.07,1,.2),
                        notification-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1); /* Opera 12+ */
    animation:         notification-hide .12s cubic-bezier(.34,.07,1,.2),
                        notification-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1);

    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .message {
    padding: 10px;
    font-size: 1.1em;
    font-weight: bold;
  }

  .details {
    font-size: 0.9em;
    padding: 0 10px 10px;
  }

  &.notification-info {
    color: #fff;
    background-color: #2196f3;
  }

  &.notification-success {
    color: #fff;
    background-color: #4caf50;
  }

  &.notification-warning {
    color: #fff;
    background-color: #ff9800;
  }

  &.notification-error {
    color: #fff;
    background-color: #f44336;
  }
}

// Animations

@keyframes notification-show {
  0% { opacity: 0; transform: perspective($width) translate(0, -5px) rotateX(90deg); }
  100% { opacity: 1; transform: perspective($width) translate(0, 0) rotateX( 0deg); }
}

@keyframes notification-shrink {
    0% {  opacity: 0; max-height: 500px; transform: scale(.8); }
  100% {  opacity: 0; max-height: 0;           transform: scale(.8); }
}

@keyframes notification-hide {
  0% { opacity: 1; transform: scale(1); }
  10% { opacity: 1; transform: scale(1.01); }
  20% { opacity: 1; transform: scale(1.02); }
  30% { opacity: 1; transform: scale(1.03); }
  40% { opacity: 1; transform: scale(1.04); }
  50% { opacity: 1; transform: scale(1.05); }
  60% { opacity: 1; transform: scale(1.04); }
  70% { opacity: 1; transform: scale(1.03); }
  80% { opacity: 1; transform: scale(1.01); }
  90% { opacity: 1; transform: scale(.9); }
  100% { opacity: 0; transform: scale(.8); }
}

</style>
