import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  // State holds data to be manipulated
  state: {
    path: 'Home',
    // list of pages
    paths: ['Home', 'About Us', 'Upcoming Shows'],
    // each band member objectified
    band: [
      { name: 'Jim', img: require('./assets/improvedImages/Jim-3.png'), bio: 'Jim has a masters degree in Music and plays the Guitar, Day Job: CIS Professor as SCC ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' },
      { name: 'Paul', img: require('./assets/improvedImages/paul.jpg'), bio: 'Instruments: Vocals, Harmonica, and Guitar, Day Job: Retired. ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' },
      { name: 'Sab', img: require('./assets/improvedImages/sab.jpg'), bio: 'Instruments: Vocals & Guitar, Day Job: Lawyer, ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' },
      { name: 'Doug', img: require('./assets/improvedImages/doug.jpg'), bio: 'Instruments: Vocals & Bass Day Job: Chemistry Professor at ASU. ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' },
      { name: 'Vince', img: require('./assets/improvedImages/vince.png'), bio: 'Instruments: Vocals and Drums, Day Job: Musician. ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' }  
    ],
    // venues played // upcoming.
    upcomingShows: [
      { date: '2019-04-20', venue: 'The Blues Foundation', img: require('./assets/bluesfoundation.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-04-28', venue: 'Moutain View Pub', img: require('./assets/mountainviewpub.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-04-30', venue: 'Phoenix blues Society', img: require('./assets/phoenixbluessociety.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-05-10', venue: 'The Rhythm Room', img: require('./assets/rhythmroom.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-05-01', venue: 'West Alley BBQ', img: require('./assets/westalleybbq.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' }
    ],
    aprilShows: [
      { date: '2019-04-20', venue: 'The Blues Foundation', img: require('./assets/blues.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-04-28', venue: 'Moutain View Pub', img: require('./assets/pub-1.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-04-30', venue: 'Phoenix blues Society', img: require('./assets/phoenixblues.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' }
    ],
    mayShows: [
      { date: '2019-05-10', venue: 'The Rhythm Room', img: require('./assets/rhythmroom.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' },
      { date: '2019-05-01', venue: 'West Alley BBQ', img: require('./assets/westalley.png'), details: 'ut perspiciatis unde omnis iste natus error sit voluptatem ' }
    ]
  },
  // getters serve data from the Vuex store
  getters: {
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
    },
    getAprilShows (state) {
      return state.aprilShows
    },
    getMayShows (state) {
      return state.mayShows
    }
  },
  // mutations change stored data.
  mutations: {
    // ---- for navigation drawer if used ----
    // toggleNavigationDisplay (state) {
    //   state.NavigationDisplay = !state.NavigationDisplay
    // },
    setPath (state, newPath) {
      state.path = newPath
    }
  }
})
