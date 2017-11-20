<template lang="html">
  <div class="modal-center" v-if="mState.show">
    <div :class="mState.bgMaskClass" @click="close()"></div>
    <div class="modal-container">
      <Modal
        :modal="mState.modal"
        :close="close">
      </Modal>
    </div>
  </div>
</template>

<script>
import ModalController from './ModalController'
import Modal from './Modal'

export default {
  data () {
    return {
      mState: ModalController.state
    }
  },
  methods: {
    close () {
      ModalController.close()
    }
  },
  components: { Modal }
}
</script>

<style lang="scss" scoped>

.modal-center {

  .modal-container {
    position: fixed;
    z-index: 12;
    overflow-x: hidden;
    overflow-y: auto;

    top: 0;
    left: 50%;
    max-height: 100%;

    transform: translate(-50%);
  }
}

.bg-mask {
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);

  -webkit-animation: bg-show .36s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Safari 4+ */
  -moz-animation:    bg-show .36s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Fx 5+ */
  -o-animation:      bg-show .36s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Opera 12+ */
  animation:         bg-show .36s cubic-bezier(0.175, 0.885, 0.32, 1.27499);

  &.hide {
    -webkit-animation: bg-hide .36s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Safari 4+ */
    -moz-animation:    bg-hide .36s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Fx 5+ */
    -o-animation:      bg-hide .36s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Opera 12+ */
    animation:         bg-hide .36s cubic-bezier(0.175, 0.885, 0.32, 1.27499);
  }
}

@keyframes bg-show {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes bg-hide {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

</style>
