<template>
<!-- init CSS grid system -->
  <v-container>
    <!-- layout styles -->
    <v-layout row>
      <!-- if screen size is xs (smartphone) -->
      <v-flex v-if="this.$vuetify.breakpoint.mdAndDown">
        <v-flex xs12>
            <v-img :src="member.img" width="250" height="250"></v-img>
        </v-flex>
        <v-flex xs12>
            <h3 class="headline mb-0"> {{ member.name }} </h3>
            <v-divider />
            <div> {{ member.bio }} </div>
        </v-flex>
      </v-flex>

      <!-- medium and up screen sizes -->
      <template v-else>
        <v-flex sm6 md5 lg6 xl4>
          <v-img :src="member.img" width="250" height="250"></v-img>
        </v-flex>
        <v-flex sm6 md7 lg6 xl8>
            <h3 class="headline mb-0"> {{ member.name }} </h3>
            <v-divider />
            <div> {{ member.bio }} </div>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "BandMembers",
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  
</style>
