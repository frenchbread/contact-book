<template lang="html">
  <div id="app">

    <NavBar></NavBar>

    <router-view></router-view>

    <ModalCenter></ModalCenter>

    <KeyBinds></KeyBinds>

    <NotificationCenter></NotificationCenter>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import ModalCenter from '@/components/modals/ModalCenter'
import KeyBinds from '@/components/KeyBinds'
import NotificationCenter from '@/components/notify/NotificationCenter'

export default {
  name: 'app',
  components: { NavBar, ModalCenter, KeyBinds, NotificationCenter }
}
</script>

<style lang="scss" scoped>

#app {
  position: absolute;

  width: 40em;

  top: 0;
  left: calc(50% - 20em);
  bottom: 0;

  margin: 1em;
}

</style>

<style src="./styles/main.scss" lang="scss"></style>
