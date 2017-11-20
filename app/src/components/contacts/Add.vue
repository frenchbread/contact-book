<template lang="html">
  <form class="form" @submit.prevent="submit()">

    <!-- First name & Last name -->
    <div class="block">
      <div class="grid">
        <div class="form-group cell -3of12">
          <label for="contact-first-name">Name</label>
        </div>
        <div class="cell -3of12">
          <input
            id="contact-first-name"
            type="text"
            class="form-control"
            placeholder="First name"
            v-model="contact.first_name" />
        </div>
        <div class="cell -3of12">
          <input
            id="contact-last-name"
            type="text"
            class="form-control"
            placeholder="Last name"
            v-model="contact.last_name" />
        </div>
      </div>

      <!-- Date of birth -->
      <div class="grid">
        <div class="form-group cell -3of12">
          <label for="contact-dob">Date of Birth</label>
        </div>
        <div class="cell -3of12">
          <input
            id="contact-dob"
            type="date"
            class="form-control"
            v-model="contact.dob" />
        </div>
      </div>

      <!-- Addresses -->
      <div class="grid">
        <div class="form-group cell -3of12">
          <label>Address</label>
        </div>
        <div class="form-group cell -9of12">
          <div class="grid" v-for="(addr, index) in contact.addresses">
            <div class="cell -9of12">
              <input
                type="text"
                class="form-control"
                :placeholder="'Address ' + (index + 1)"
                v-model="contact.addresses[index]"/>
            </div>
            <div class="cell -3of12 controls">
              <span
                class="icon-btn"
                v-if="index > 0"
                @click="removeItem('addresses', index)"
                v-html="feather.toSvg('minus', opts)">
              </span>
              <span
                class="icon-btn"
                v-if="index === contact.addresses.length - 1"
                @click="contact.addresses.push('')"
                v-html="feather.toSvg('plus', opts)">
              </span>
            </div>
          </div>
        </div>
      </div>


      <!-- Phone numbers -->
      <div class="grid">
        <div class="form-group cell -3of12">
          <label>Phone</label>
        </div>
        <div class="form-group cell -9of12">
          <div class="grid" v-for="(addr, index) in contact.phone_numbers">
            <div class="cell -9of12">
              <input
                type="text"
                class="form-control"
                :placeholder="'Number ' + (index + 1)"
                v-model="contact.phone_numbers[index]"/>
            </div>
            <div class="cell -3of12 controls">
              <span
                class="icon-btn"
                v-if="index > 0"
                @click="removeItem('phone_numbers', index)"
                v-html="feather.toSvg('minus', opts)">
              </span>
              <span
                class="icon-btn"
                v-if="index === contact.phone_numbers.length - 1"
                @click="contact.phone_numbers.push('')"
                v-html="feather.toSvg('plus', opts)">
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Emails -->
      <div class="grid">
        <div class="form-group cell -3of12">
          <label>Email</label>
        </div>
        <div class="form-group cell -9of12">
          <div class="grid" v-for="(addr, index) in contact.emails">
            <div class="cell -9of12">
              <input
                type="text"
                class="form-control"
                :placeholder="'Email ' + (index + 1)"
                v-model="contact.emails[index]"/>
            </div>
            <div class="cell -3of12 controls">
              <span
                class="icon-btn"
                v-if="index > 0"
                @click="removeItem('emails', index)"
                v-html="feather.toSvg('minus', opts)">
              </span>
              <span
                class="icon-btn"
                v-if="index === contact.emails.length - 1"
                @click="contact.emails.push('')"
                v-html="feather.toSvg('plus', opts)">
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="gap-big"></div>

    <div>
      <button v-if="isEdit" type="submit" class="btn btn-primary btn-block">Update contact</button>
      <button v-else type="submit" class="btn btn-primary btn-block">Create contact</button>
    </div>
  </form>
</template>

<script>
import $ from 'jquery'
import feather from 'feather-icons'

import store from '@/store'
import apiContacts from '@/lib/contacts/api'

import ModalController from '@/components/modals/ModalController'

export default {
  props: ['close', 'data'],
  data () {
    return {
      feather,
      opts: { height: 15, width: 15, 'stroke-width': 2.5 },
      contact: {
        first_name: '',
        last_name: '',
        dob: '',
        addresses: [''],
        phone_numbers: [''],
        emails: ['']
      },
      isEdit: false
    }
  },
  created () {
    if (this.data.isEdit) {
      this.isEdit = true
      this.contact = this.data.contact
    }
  },
  mounted () {
    $('#contact-first-name').focus()
  },
  methods: {
    submit () {
      const contact = this.contact

      if (contact.first_name) {
        if (this.isEdit) {
          apiContacts.update(contact._id, contact)
            .then(updatedContact => {
              store.dispatch('updateContact', updatedContact)

              if (this.data.prevModal) {
                const { title, component, data } = this.data.prevModal

                ModalController.closeAndOpen(title, component, data)
              }
            })
            .catch(err => console.error(err.message))
        } else {
          apiContacts.add(contact)
            .then(newContact => {
              store.dispatch('addContact', newContact)
              this.close()
            })
            .catch(err => console.error(err.message))
        }
      }
    },
    removeItem (type, index) {
      this.contact[type].splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../styles/colors.scss';

.form {
  .block {
    margin: 2em;

    .controls {
      padding: 0.6em;
      text-align: left;

      .icon-btn {
        padding: 0.5em;
        display: inline-block;
        line-height: 0;
        background-color: #f7f7f7;

        &:hover {
          background-color: $main;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}

</style>
