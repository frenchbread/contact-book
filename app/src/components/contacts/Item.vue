<template lang="html">
  <div class="cb-style contact">
    <b>{{ contact.first_name }} {{ contact.last_name }}</b>
  </div>
</template>

<script>
export default {
  props: ['contact']
}
</script>

<style lang="scss" scoped>

.contact {
  margin-bottom: 1em;

  &:hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }
}

</style>
