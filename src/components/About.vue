<template>
        <!-- <v-card>
          <v-card-title class="">
            Meet the Band
          </v-card-title>
          <v-parallax :src="require('../assets/images/banner.jpg')"></v-parallax>
          <v-card xs6>
            <band-members/>
          </v-card>
        </v-card> -->
  <v-container grid-list-lg>
    <v-layout justify-space-around>
      <v-flex sm5 xs12 v-for="(column, i) in gridColumns" :key="i">
        <v-layout column>
          <v-flex v-for="(element, index) in column" :key="index">
            <band-members :member="element"></band-members>
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
