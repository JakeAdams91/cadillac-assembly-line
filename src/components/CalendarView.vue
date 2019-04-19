<template>
<v-card>
  <v-calendar>
    <template v-slot:day="{ date }">
      <template v-for="event in eventsMap[date]">
        <v-menu
          :key="event.venue"
          v-model="event.open"
          full-width
          offset-x
        >
          <template v-slot:activator="{ on }">
            <div
              v-if="!event.time"
              v-ripple
              class="my-event"
              v-on="on"
              v-html="event.venue"
            ></div>
          </template>
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              color="#4372AA"
              dark
            >
              <v-toolbar-title v-html="event.venue + ' ' + dateFormat(event.date)"> </v-toolbar-title>
            </v-toolbar>
            <v-card-title primary-title>
              <span v-html="event.details"></span>
            </v-card-title>
            <v-card-actions>
              <v-btn
                flat
                color="#687C97"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </template>
    </template>
    </v-calendar>
  </v-card>
</template>

<script>
export default {
  name: 'CalendarView',
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
  computed: {
    // get upcoming show data
    upcomingShows () {
      return this.$store.getters.getUpcomingShows
    },
    // sort events by date and create new objects of each upcoming event.
    eventsMap () {
      const map = {}
      this.upcomingShows.forEach(e => (map[e.date] = map[e.date] || []).push(e))
      return map
    },
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
      let newFormat = '- ' + monthy + ' ' + day
      // console.log(monthy)
      return newFormat
    }
  }
}
</script>

<style>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #4372AA;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>