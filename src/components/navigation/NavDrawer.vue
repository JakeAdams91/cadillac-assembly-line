<!-- <template>
   <v-navigation-drawer
    app
    fixed
    clipped
    stateless
    class="elevation-3"
    :value="displayingSiteNavigation"
  >
    <v-list>
      <v-list-tile @click="route('Home')">
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="route('Version Control')">
        <v-list-tile-content>
          <v-list-tile-title>Version Control</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="route('Cheat-Sheet')">
        <v-list-tile-content>
          <v-list-tile-title>Cheat Sheet</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer> 
</template> -->

<script>
// export default {
//   name: 'NavDrawer',
//   computed: {
//     displayingSiteNavigation () {
//       return this.$store.getters.getNavigationDisplay
//     }
//   },
//   methods: {
//     // Change path routes for band - page
//     route (path) {
//       if(path === 'Home') {
//         this.$store.commit('setPath', 'Home')
//       } else if(path === 'Version Control') {
//         this.$store.commit('setPath', 'Version Control')
//       } else {
//         this.$store.commit('setPath', 'Cheat-Sheet')
//       }
//       this.$store.commit('toggleNavigationDisplay')
//     }
//   }
// }
// </script>