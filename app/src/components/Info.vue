<template lang="html">
  <div>
    <h1>{{ app }} v{{ version }}</h1>
    <p>
      This is a contacts book application developed for a code test. The app uses
      <a target="_blank" href="https://github.com/vuejs/vue">VueJS</a> on the
      front-end and <a href="https://github.com/franciscop/server">ServerJS</a>
      on a backend.
    </p>

    <h3>Keyboard shortcuts</h3>
    <p>App is also powered with keyboard shortcuts that may simplify user experience.</p>
    <ul>
      <li>
        <code>n</code> - Opens form to create new contact.
      </li>
      <li>
        <code>s</code> - Focuses on search field
      </li>
      <li>
        <code>esc</code> - Closes opened modal windows.
      </li>
    </ul>

    <h3>Author</h3>
    <p>{{ author }}</p>

    <div class="gib-gap"></div>

    <a target="_blank" :href="repo" class="btn btn-block btn-info">Open repository on GitHub</a>
  </div>
</template>

<script>
import pckg from '../../package.json'

export default {
  data () {
    return {
      app: pckg.name,
      version: pckg.version,
      author: pckg.author,
      repo: pckg.repository
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
