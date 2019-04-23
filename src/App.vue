<template>
<!-- this is the parent page, that pull everything together -->
  <v-app>
    <!-- place toolbar -->
    <toolbar/>
    <!-- declare content area. -->
    <v-content class="background">
      <!-- place the home-page, about, and calendar pages -->
      <!-- render them if their respective button is clicked. -->
      <home-page class="mt-1" v-if="getCurrentPath === 'Home'"/>
      <about class="mt-5" v-if="getCurrentPath === 'About Us'"/>
      <calendar class="mt-5" v-if="getCurrentPath === 'Upcoming Shows'"/>
    </v-content>
    <!-- Footer for all pages -->
    <v-footer
      color="#93B0D2"
      class="white--text"
      height="64">
      <!-- flex is a component of CSS Grid. -->
      <v-flex
        text-xs-center>
        &copy;2019<strong>Cadillac Assembly Line</strong>
        <v-flex>
          <a class="white--text" target="_blank" href="https://www.facebook.com/cadillacassemblylinebandaz/">Contact Us</a>
        </v-flex>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from './components/navigation/Toolbar'
import HomePage from './components/HomePage'
import About from './components/About'
import Calendar from './components/Calendar'
export default {
  name: 'app',
  data: () => ({
      icons:'fab fa-facebook'
    }),
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
