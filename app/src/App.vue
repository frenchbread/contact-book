<template lang="html">
  <div id="app">

    <NavBar></NavBar>

    <router-view></router-view>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: { NavBar }
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
