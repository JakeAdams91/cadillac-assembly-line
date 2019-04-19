<template>
  <!-- create a card for each upcoming event. -->
  <v-card color="#6E7B8B">
    <v-img :src="show.img"></v-img>
    <v-toolbar
      color="#4372AA">
      <v-toolbar-title v-html="show.venue"></v-toolbar-title>
      <v-card-actions>
      <v-btn icon @click="display = !display">
        <v-icon>{{ display ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
      </v-card-actions>
      
    </v-toolbar>
    <v-slide-y-transition color="#4372AA">
      <v-card-text v-show="display">
        {{ dateFormat(show.date) }}
        {{ show.details }}
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
        'error: ', 'Jan', 'Feb',
        'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
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
  
</style>
