import Vue from 'vue'
import App from './App.vue'
import  firebase from "firebase";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';


Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyDLjntbZmT5LZAcssWgbNKmxMX-b-A8rGk",
  authDomain: "liga-con-chats.firebaseapp.com",
  databaseURL: "https://liga-con-chats-default-rtdb.firebaseio.com",
  projectId: "liga-con-chats",
  storageBucket: "liga-con-chats.appspot.com",
  messagingSenderId: "1001378915035",
  appId: "1:1001378915035:web:d15da195cd3df3fb9c62fe"
};




// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')