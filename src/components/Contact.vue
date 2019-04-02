<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <form>
            <v-text-field
              v-model="name"
              v-validate="'required|max:20'"
              :counter="20"
              :error-messages="errors.collect('name')"
              label="Name"
              data-vv-name="name"
              required
            ></v-text-field>
            <v-text-field
              v-model="venue"
              label="Venue/Business"
              data-vv-name="venue"
            ></v-text-field>
            <v-text-field
              v-model="email"
              v-validate="'required|email'"
              :error-messages="errors.collect('email')"
              label="E-mail"
              data-vv-name="email"
              required
            ></v-text-field>
            <v-textarea
              v-model="textBox"
              v-validate="'required|max:500'"
              :counter="500"
              :error-messages="errors.collect('name')"
              label="Message"
              data-vv-name="textBox"
              required>
              </v-textarea>

            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Contact',
  data: () => ({
    name: '',
    email: '',
    textBox: '',
    venue: '',
    dictionary: {
      attributes: {
        email: 'E-mail Address'
      },
      custom: {
        name: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 20 characters'
        },
        textBox: {
          required: () => 'Message can not be empty',
          max: 'the message box may not be greater than 500 characters'
        }
      }
    }
  }),
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.name = ''
      this.venue = ''
      this.email = ''
      this.textBox = ''
      this.$validator.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
