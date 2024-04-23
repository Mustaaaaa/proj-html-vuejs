import { createApp } from 'vue'
import App from './App.vue'
// import { store } from './store.js'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faPhone,
    faLocationDot,
    faChessPawn,
} from '@fortawesome/free-solid-svg-icons'
import {

} from '@fortawesome/free-regular-svg-icons'

library.add(faLocationDot, faPhone, faChessPawn)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')