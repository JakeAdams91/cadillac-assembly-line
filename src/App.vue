<template>
  <v-app>
    <toolbar />
    <!-- <nav-drawer /> -->
    <v-content>
      <home-page v-if="getCurrentPath === 'Home'"/>
      <about v-if="getCurrentPath === 'About Us'"/>
      <calendar v-if="getCurrentPath === 'Upcoming Shows'"/>
      <contact v-if="getCurrentPath === 'Contact Us'"/>
    </v-content>
  </v-app>
</template>

<script>
// import NavDrawer from './components/navigation/NavDrawer'    -- if used
import Toolbar from './components/navigation/Toolbar'
import HomePage from './components/HomePage'
import About from './components/About'
import Calendar from './components/Calendar'
import Contact from './components/Contact'
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
    Calendar,
    Contact
    // NavDrawer   -- if used
  }
}
</script>

<style>

</style>
