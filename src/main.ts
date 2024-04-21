import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'

import App from './App.vue'
import router from './router'
import * as FaIcons from 'oh-vue-icons/icons/fa'
import * as MdIcons from 'oh-vue-icons/icons/md'
import { FcVlc } from "oh-vue-icons/icons";
const icons = Object.values({ ...FaIcons, ...MdIcons, FcVlc })
addIcons(...icons)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
