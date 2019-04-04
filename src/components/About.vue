<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title class="">
            Meet the Band
          </v-card-title>
          <v-parallax :src="require('../assets/images/banner.jpg')"></v-parallax>
          <v-card>
            <band-members />
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BandMembers from './BandMembers'
export default {
  name: 'About',
  components: {
    BandMembers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
