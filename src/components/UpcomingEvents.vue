<template>
  <!-- create a card for the event (div) -->
  <v-card color="#A9B1BD">
    <!-- append venues' image/logo -->
    <v-img :src="show.img"></v-img>
    <v-toolbar
      color="#93B0D2">
      <!-- toolbar with venue name and drop down button -->
      <v-toolbar-title class="tex" v-html="show.venue"></v-toolbar-title>
      <v-card-actions>
      <v-btn icon @click="display = !display">
        <!-- if display variable is false, point arrow down, if the expansion drawer is displaying point arrow up -->
        <v-icon>{{ display ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
      </v-card-actions>
      
    </v-toolbar>
    <!-- vertical slide transition -->
    <v-slide-y-transition>
      <!-- display details about the show / venue, and date / time of event -->
      <v-card-text class="tex" v-show="display">
        <p>{{ dateFormat(show.date) }}</p>
        <p>{{ show.details }}</p>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  name: 'UpcomingEvents',
  data () {
    return {
      display: false,
      months: [
        'error: ', 'January', 'February',
        'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October',
        'November', 'December'
      ]
    }
  },
  props: {
    show: {
      type: Object,
      required: true
    }
  },
  methods: {
    // receives the event's date, 
    // reformats it to 3 letter Month and day int.
    // i.e. 2019-04-20 becomes  Apr 20
    dateFormat (month) {
      let split = month.split('-')
      let day = split[2]
      let monthNum = split[1]
      monthNum = monthNum.substring(1)
      let monthy = this.months[monthNum]
      let newFormat = ' ' + monthy + ' ' + day
      return newFormat
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .tex {
    color: #003366;
    font-family: 'Roboto', 'sans-serif';
  }
</style>
