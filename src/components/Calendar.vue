<template>
  <v-container grid-list-lg>
    
    <v-layout justify-space-around>
      <v-flex sm5 xs12 v-for="(column, i) in gridColumns" :key="i">
        <v-layout column>
          <v-flex v-for="(element, index) in column" :key="index">
            <upcoming-events :show="element"></upcoming-events>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-flex sm8 xs12 offset-sm3>
      <calendar-view />
    </v-flex>
  </v-container>
  <!-- <v-flex xs6>
    <upcoming-events
      v-for="(show, index) in upcomingShows" :key="index"
      :show="show"/>
  </v-flex> -->
  
</template>

<script>
import UpcomingEvents from './UpcomingEvents.vue'
import CalendarView from './CalendarView.vue'
export default {
  name: 'Calendar',
  computed: {
    upcomingShows () {
      return this.$store.getters.getUpcomingShows
    },
    gridColumns () {
      let i = 0
      let j = 0
      let columns
      if (this.$vuetify.breakpoint.xs) {
        columns = []
        columns.push(this.upcomingShows)
        return columns
      } else if (this.$vuetify.breakpoint.smAndUp) {
        columns = [[], []]
        while (i < this.upcomingShows.length) {
          columns[j].push(this.upcomingShows[i])
          i += 1
          j += 1
          if (j === columns.length) {
            j = 0
          }
        }
        return columns
      }
    }
  },
  components: {
    UpcomingEvents,
    CalendarView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
