<template lang="html">
  <div class="view">
    <div class="grid header">
      <div class="cell -10of12 text">
        <span class="name">{{ data.contact.first_name }} {{ data.contact.last_name }}</span>
      </div>
      <div class="cell -2of12 controls align-right">
        <span class="icon-btn" @click="openEditContactModal()" v-html="feather.toSvg('edit-2', opts2)"></span>
        <span class="icon-btn" @click="openRemoveConfirmationModal()" v-html="feather.toSvg('trash-2', opts2)"></span>
      </div>
    </div>

    <div class="divider"></div>

    <div class="details" v-if="detailsExist()">

      <div class="gap"></div>

      <div v-if="data.contact.date_of_birth">

        <h3>Date of birth</h3>

        <div class="divider"></div>

        <div class="grid">

          <div class="cell -2of12 align-center">
            <span class="icon" v-html="feather.toSvg('calendar', opts)"></span>
          </div>

          <div class="cell -10of12">
             {{ formatDoB(data.contact.date_of_birth) }}
          </div>

        </div>

      </div>

      <div v-if="data.contact.phone_numbers[0] !== ''">

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

      <div v-if="data.contact.emails[0] !== ''">

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

      <div v-if="data.contact.addresses[0] !== ''">

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

      <div class="gap"></div>

    </div>

    <div v-else>
      <blockquote class="blank">
        No details provided.
      </blockquote>
    </div>

    <div class="divider"></div>

    <div>
      Created at <b>{{ formatDateTime(data.contact.createdAt) }}</b>
    </div>

    <div>
      Updated at <b>{{ formatDateTime(data.contact.updatedAt) }}</b>
    </div>

  </div>
</template>

<script>
import feather from 'feather-icons'
import moment from 'moment'

import ModalController from '@/components/modals/ModalController'
import AddContact from '@/components/contacts/Add'
import RemoveContact from '@/components/contacts/Remove'

export default {
  props: ['data'],
  data () {
    return {
      feather,
      opts: { height: 15, width: 15, 'stroke-width': 2.5 },
      opts2: { height: 20, width: 20, 'stroke-width': 2.5 }
    }
  },
  methods: {
    detailsExist () {
      return this.data.contact.phone_numbers[0] !== '' ||
        this.data.contact.emails[0] !== '' ||
        this.data.contact.addresses[0] !== '' ||
        this.data.contact.date_of_birth
    },
    formatDateTime (date) {
      return moment(date).format('HH:mm, DD MMM YYYY')
    },
    formatDoB (date) {
      return moment(date, 'YYYY-MM-DD').format('DD MMM YYYY')
    },
    openEditContactModal () {
      ModalController.closeAndOpen('Edit contact', AddContact, { isEdit: true, contact: this.data.contact })
    },
    openRemoveConfirmationModal () {
      ModalController.closeAndOpen('Remove contact', RemoveContact, { contact: this.data.contact })
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../styles/colors.scss';

.view {
  .header {
    .text {
      padding: 2em;

      .name {
        font-size: 3em;
      }

      .dob {
        font-size: 1em;
      }
    }

    .controls {
      padding: 2em;

      .icon-btn {
        &:hover {
          color: $main;
          cursor: pointer;
        }
      }
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

  .blank {
    margin: 3em;
  }
}

</style>
