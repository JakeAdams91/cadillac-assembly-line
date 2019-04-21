<template>
  <!-- init css Grid -->
  <v-container grid-list-md>
    <h1 class="fonty">Meet the Band</h1>
    <v-divider />
    <!-- Layout styles -->
    <v-layout justify-space-around>
      <!-- for loop over gridColumns() function; creating columns -->
      <!-- sm6 xs12 -->
      <v-flex  v-for="(column, i) in gridColumns" :key="i">
        <v-layout column>
          <!-- for loop over the created columns; place band members -->
          <v-flex sm6 xs12 v-for="(element, index) in column" :key="index">
            <!-- dynamically render each band member card -->
            <v-card flat
              color="#ecf2f9">
            <band-members :member="element"></band-members>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BandMembers from './BandMembers'
export default {
  name: 'About',
  computed: {
    // gets band data.
    getBand () {
      return this.$store.getters.getBand
    },
    // Create columns to display each band member
    // dynamically change based on screen size.
    gridColumns () {
      let i = 0
      let j = 0
      let columns
      if (this.$vuetify.breakpoint.xs) {
        columns = []
        columns.push(this.getBand)
        return columns
      } else if (this.$vuetify.breakpoint.smAndUp) {
        columns = [[], []]
        while (i < this.getBand.length) {
          columns[j].push(this.getBand[i])
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
    BandMembers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
