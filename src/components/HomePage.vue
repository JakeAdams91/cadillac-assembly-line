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
    <v-card color="#ecf2f9" flat>
      <v-flex xs12 sm6 offset-sm3>
      <!-- <v-card-title class="headline centerize">Cadillac Assembly Line</v-card-title> -->
        <v-card-text class="subheading">
          Cadillac Assembly line is made up of five Blues Music lovers who met over 25 years ago by attending Blues jam sessions in Phoenix.
          Though each member of the band has played in other bands prior, Cadillac Assembly line is the culmination of jamming with other bands
          and getting to know each other through the years,
          playing at Rhythm Room or Chopper John’s.
          These five guys have a passion for true Blue’s music and while four of five have day jobs, playing together in Cadillac Assembly line is their true love.
        </v-card-text>
      </v-flex>
    </v-card>
    <v-flex xs12 offset-xs3 offset-sm5>
      <h1>Updates / News</h1>
    </v-flex>
    <v-divider class="widtherizer"></v-divider>    
    <v-container>
      <v-layout row>
        <v-flex sm4>
          <p>ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu</p>
        </v-flex>
        <v-divider class="ml-2 mr-2" vertical></v-divider>
        <v-flex sm4>
          <p>ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanti</p>
        </v-flex>
        <v-divider class="ml-2 mr-2" vertical></v-divider>
        <v-flex sm4>
          <p>ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanti</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style>
.centerize {
  text-align: center;
}
.widtherizer {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
