import { createApp } from 'vue'
import App from './App.vue'
// import { store } from './store.js'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faPhone,
    faLocationDot,
    faChessPawn,
   faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

library.add(faLocationDot, faPhone, faChessPawn, faFacebookF, faPaperPlane, faInstagram)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')