<template>
  <v-card>
    <v-img :src="show.img"></v-img>
    <v-toolbar
      color="#4372AA">
      <!-- TODO: fix this thing. -->
      <!-- + ' ' + dateFormat(show.date) -->
      <v-toolbar-title v-html="show.venue"></v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'UpcomingEvents',
  data () {
    return {
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
    },
    methods: {
      // receives the event's date, 
      // reformats it to 3 letter Month and day int.
      // i.e. 2019-04-20 becomes  Apr 20
      dateFormat (month) {
        let split = month.split('-')
        let day = split[2]
        console.log(day)
        let monthNum = split[1]
        monthNum = monthNum.substring(1)
        console.log(monthNum)
        let monthy = this.months[monthNum]
        let newFormat = '- ' + monthy + ' ' + day
        // console.log(monthy)
        return newFormat
      }
    }
  }
}
</script>

<style>
  
</style>
