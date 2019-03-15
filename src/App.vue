<template>
  <v-app>
    <toolbar />
    <HomePage/>
  </v-app>
</template>

<script>
import Toolbar from './components/navigation/Toolbar'
import HomePage from './components/HomePage.vue'
export default {
  name: 'app',
  components: {
    HomePage,
    Toolbar
  }
}
</script>

<style>

</style>
