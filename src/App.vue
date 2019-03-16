<template>
  <v-app>
    <toolbar />
    <!-- <nav-drawer /> -->
    <v-content>
      <home-page/>
      <about />
      <calendar />
      <contact />
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
