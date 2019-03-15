<template>
  <v-toolbar
    app
    dark
    clipped-left
    color="success"
  >
   <!-- if design wants a nav drawer use below code.
    <v-toolbar-side-icon @click="toggleNavigationDisplay"></v-toolbar-side-icon> -->
    <v-toolbar-title>{{ path }}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-title></v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    // if team wants nav drawer
    // toggleNavigationDisplay () {
    //   this.$store.commit('toggleNavigationDisplay')
    // }
  },
  computed: {
    getPath () {
      return this.$store.getters.getPath
    },
    path () {
      if(this.getPath === 'Home') {
        return 'Git: A guide to Version Control Software'
      } else {
        return 'Git: ' + this.getPath
      }
    }
  }
}
</script>