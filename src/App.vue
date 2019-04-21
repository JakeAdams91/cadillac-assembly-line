<template>
  <v-app>
    <toolbar/>
    <v-content class="background">
      <home-page class="mt-1" v-if="getCurrentPath === 'Home'"/>
      <about class="mt-5" v-if="getCurrentPath === 'About Us'"/>
      <calendar class="mt-5" v-if="getCurrentPath === 'Upcoming Shows'"/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/navigation/Toolbar'
import HomePage from './components/HomePage'
import About from './components/About'
import Calendar from './components/Calendar'
export default {
  name: 'app',
  computed: {
    getCurrentPath () {
      return this.$store.getters.getCurrentPath
    }
  },
  components: {
    Toolbar,
    HomePage,
    About,
    Calendar
  }
}
</script>

<style>
.fonty {
  text-align: center;
}
.background {
  background-color: #ecf2f9;
 }
</style>
