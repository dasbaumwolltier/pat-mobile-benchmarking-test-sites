import Vue from 'vue'
import App from './App.vue'
import { Tabs, Tab } from 'vue-tabs-component';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
new Vue({
  el: '#app',
  render: h => h(App)
})
