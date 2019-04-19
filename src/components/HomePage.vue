<template>
  <div>
    <v-parallax height="800" :src="require('../assets/improvedImages/banner-1.jpg')">
      <v-layout
        align-center
        column
        justify-center
      >
        <v-btn icon class="white--text" @click="$vuetify.goTo(950)"><v-icon>arrow_downward</v-icon></v-btn>   
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
