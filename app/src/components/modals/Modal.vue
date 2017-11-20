<template lang="html">
  <div :class="modal.className">
    <div class="card">
      <header class="card-header grid">
        <div class="title cell -10of12 align-left">
          {{ modal.title }}
        </div>
        <div class="controls cell -2of12 align-right">
          <span @click="close()" class="icon-btn" v-html="feather.toSvg('x', opts)"></span>
        </div>
      </header>
      <div class="card-content">
        <div class="inner">

          <!-- Dynamic component -->
          <component
            :is="modal.component"
            :data="modal.data"
            :close="close">
          </component>

          <!-- Confirmation button -->
          <button
            v-if="modal.isConfirmation"
            @click="confirm()"
            class="btn btn-success btn-block">
            <span v-if="loading">Loading..</span>
            <span v-else>Ok</span>
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons'

export default {
  props: ['modal', 'close'],
  data () {
    return {
      feather,
      opts: { height: 15, width: 15, 'stroke-width': 2.5 }
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../styles/colors.scss';

$width: 50em;

.modal {
  width: $width;
  margin: 1em;
  word-wrap: break-word;
  position: relative;
  background-color: white;

  -webkit-animation: modal-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Safari 4+ */
  -moz-animation:    modal-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Fx 5+ */
  -o-animation:      modal-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Opera 12+ */
  animation:         modal-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499);

  &.remove {
    -webkit-animation:  modal-hide .12s cubic-bezier(.34,.07,1,.2),
                        modal-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1); /* Safari 4+ */
    -moz-animation:    modal-hide .12s cubic-bezier(.34,.07,1,.2),
                        modal-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1); /* Fx 5+ */
    -o-animation:      modal-hide .12s cubic-bezier(.34,.07,1,.2),
                        modal-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1); /* Opera 12+ */
    animation:         modal-hide .12s cubic-bezier(.34,.07,1,.2),
                        modal-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1);

    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .card {
    border: 2px solid #ccc;

    .card-header {
      padding: 0;

      .title {
        padding: 0.5em;
      }

      .controls {
        .icon-btn {
          padding: 0.5em;
          display: inline-block;
          line-height: 0;

          &:hover {
            cursor: pointer;
            background-color: $main;
            color: white;
          }
        }
      }
    }
  }
}

// Animations

@keyframes modal-show {
  0% { opacity: 0; transform: perspective($width) translate(0, -5px) rotateX(90deg); }
  100% { opacity: 1; transform: perspective($width) translate(0, 0) rotateX( 0deg); }
}

@keyframes modal-shrink {
    0% {  opacity: 0; max-height: 500px; transform: scale(.8); }
  100% {  opacity: 0; max-height: 0; transform: scale(.8); }
}

@keyframes modal-hide {
  0% { opacity: 1; transform: scale(1); }
  10% { opacity: 1; transform: scale(1.01); }
  20% { opacity: 1; transform: scale(1.02); }
  30% { opacity: 1; transform: scale(1.03); }
  40% { opacity: 1; transform: scale(1.04); }
  50% { opacity: 1; transform: scale(1.05); }
  60% { opacity: 1; transform: scale(1); }
  70% { opacity: 0.9; transform: scale(0.9); }
  80% { opacity: 0.8; transform: scale(0.8); }
  90% { opacity: 0.7; transform: scale(0.7); }
  100% { opacity: 0.6; transform: scale(0.6); }
}

</style>
