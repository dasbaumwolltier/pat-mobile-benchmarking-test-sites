import Vue from 'vue'
import App from './App.vue'
import Label from './components/Label.vue'
import TextBox from './components/TextBox.vue'
import TabButton from './components/TabButton.vue'
import TabContent from './components/TabContent.vue'
import Tabs from './components/Tabs.vue'

Vue.component('app-label', Label)
Vue.component('app-textbox', TextBox)
Vue.component('app-tab-button', TabButton)
Vue.component('app-tab-content', TabContent)
Vue.component('app-tabs', Tabs)
new Vue({
  el: '#app',
  render: h => h(App)
})
