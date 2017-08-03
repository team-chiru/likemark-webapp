var vue = require('vue');

import 'babel-polyfill'
import Vue from 'vue'
//import App from './components/App.vue'
//import store from './store'
//mport { getAllMessages } from './store/actions'

new Vue({
        el: "#hello-world-app",
        data() {
          return {
            msg: "Hello World!"
          }
        }
})
