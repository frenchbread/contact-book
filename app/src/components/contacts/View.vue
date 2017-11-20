<template lang="html">
  <div class="view">
    <div class="name">
      <span>{{ data.contact.first_name }} {{ data.contact.last_name }}</span>
    </div>

    <div class="details">
      <div v-if="data.contact.phone_numbers.length > 0">

        <h3>Phone numbers</h3>

        <div class="divider"></div>

        <div v-for="phone in data.contact.phone_numbers" class="grid">

          <div class="cell -2of12 align-center">
            <span class="icon" v-html="feather.toSvg('phone', opts)"></span>
          </div>

          <div class="cell -10of12">
             {{ phone }}
          </div>

        </div>

      </div>

      <div v-if="data.contact.emails.length > 0">

        <h3>Emails</h3>

        <div class="divider"></div>

        <div v-for="email in data.contact.emails" class="grid">

          <div class="cell -2of12 align-center">
            <span class="icon" v-html="feather.toSvg('mail', opts)"></span>
          </div>

          <div class="cell -10of12">
            {{ email }}
          </div>

        </div>

      </div>

      <div v-if="data.contact.addresses.length > 0">

        <h3>Addresses</h3>

        <div class="divider"></div>

        <div v-for="addr in data.contact.addresses" class="grid">

          <div class="cell -2of12 align-center">
            <span class="icon" v-html="feather.toSvg('map-pin', opts)"></span>
          </div>

          <div class="cell -10of12">
            {{ addr }}
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons'

export default {
  props: ['data'],
  data () {
    return {
      feather,
      opts: { height: 15, width: 15, 'stroke-width': 2.5 }
    }
  }
}
</script>

<style lang="scss" scoped>

.view {
  .name {
    padding: 2em;
    background-color: #f7f7f7;

    span {
      font-size: 3em;
    }
  }

  .details {
    padding: 0 5em;

    .cell {
      padding: 0.5em 0;

      .icon {
        display: inline-block;
        line-height: 0;
      }
    }
  }
}

</style>
