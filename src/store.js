import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // --- for navigation drawer if used ---
    // NavigationDisplay: false,
    // default page
    path: 'Home',
    // list of pages
    paths: ['Home', 'About Us', 'Upcoming Shows'],
    // each band member objectified
    band: [
      { name: 'Jim', img: require('./assets/images/Jim-6.jpg'), bio: 'Jim has a masters degree in Music, ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' },
      { name: 'Paul', img: require('./assets/improvedImages/paul.jpg'), bio: 'ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' },
      { name: 'Sab', img: require('./assets/improvedImages/sab.jpg'), bio: 'ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' },
      { name: 'Doug', img: require('./assets/improvedImages/doug.jpg'), bio: 'ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' },
      { name: 'Vince', img: require('./assets/images/vince.jpg'), bio: 'ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' }  
    ],
    // venues played // upcoming.
    upcomingShows: [
      { date: '2019-04-20', venue: 'The Blues Foundation', img: require('./assets/bluesfoundation.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-04-28', venue: 'Moutain View Pub', img: require('./assets/mountainviewpub.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-04-30', venue: 'Phoenix blues Society', img: require('./assets/phoenixbluessociety.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-04-23', venue: 'The Rhythm Room', img: require('./assets/rhythmroom.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-05-01', venue: 'West Alley BBQ', img: require('./assets/westalleybbq.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' }
    ]
  },
  getters: {
    // ---- for navigation drawer if used ----
    // getNavigationDisplay (state) {
    //   return state.NavigationDisplay
    // },
    getPaths (state) {
      return state.paths
    },
    getCurrentPath (state) {
      return state.path
    },
    getBand (state) {
      return state.band
    },
    getUpcomingShows (state) {
      return state.upcomingShows
    }
  },
  mutations: {
    // ---- for navigation drawer if used ----
    // toggleNavigationDisplay (state) {
    //   state.NavigationDisplay = !state.NavigationDisplay
    // },
    setPath (state, newPath) {
      state.path = newPath
    }
  },
  actions: {

  }
})
