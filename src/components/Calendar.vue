<template>
  <!-- init CSS grid -->
  <v-container grid-list-lg>
    <h1 class="fonty">Upcoming Events</h1>

    
    <!-- April Showings -->
    <h2>April Gigs</h2>
    <v-divider />
    <v-layout justify-space-around>  
      <!-- for loop over gridcolumns() function, creating grid columns -->
      <v-flex sm5 xs12 v-for="(column, i) in gridColumns(this.getAprilShows)" :key="i">
        <v-layout column>
          <!-- for loop over each created column, placing an upcoming-event component -->
          <v-flex v-for="(element, index) in column" :key="index">
            <!-- UpcomingEvents component -->
            <upcoming-events :show="element"></upcoming-events>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <!-- May Showings -->
    <h2>May Gigs</h2>
    <v-divider />
    <v-layout justify-space-around>
      <v-flex sm5 xs12 v-for="(column, i) in gridColumns(this.getMayShows)" :key="i">
        <v-layout column>
          <v-flex v-for="(element, index) in column" :key="index">
            <upcoming-events :show="element"></upcoming-events>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  
    <!-- CalendarView component -->
    <v-divider />
    <v-flex sm8 xs12 offset-sm2>
      <calendar-view class="mt-3" />
    </v-flex>
  </v-container>
</template>

<script>
import UpcomingEvents from './UpcomingEvents.vue'
import CalendarView from './CalendarView.vue'
export default {
  name: 'Calendar',
  computed: {
    getAprilShows () {
      return this.$store.getters.getAprilShows
    },
    getMayShows () {
      return this.$store.getters.getMayShows
    }
  },
  methods: {
    gridColumns (month) {
      let i = 0
      let j = 0
      let columns
      if (this.$vuetify.breakpoint.xs) {
        columns = []
        columns.push(month)
        return columns
      } else if (this.$vuetify.breakpoint.smAndUp) {
        columns = [[], []]
        while (i < month.length) {
          columns[j].push(month[i])
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

<style>
.v-divider {
  background-color: #4372AA;
}
</style>
