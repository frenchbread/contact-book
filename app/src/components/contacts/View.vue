<template lang="html">
  <div>
    <h1>{{ data.contact.first_name }} {{ data.contact.last_name }}</h1>

    <div v-if="data.contact.phone_numbers.length > 0">
      <h3>Phone numbers</h3>
      <div v-for="phone in data.contact.phone_numbers">
        {{ phone }}
      </div>
    </div>

    <div v-if="data.contact.emails.length > 0">
      <h3>Emails</h3>
      <div v-for="email in data.contact.emails">
        {{ email }}
      </div>
    </div>

    <div v-if="data.contact.addresses.length > 0">
      <h3>Addresses</h3>
      <div v-for="addr in data.contact.addresses">
        {{ addr }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
</style>
