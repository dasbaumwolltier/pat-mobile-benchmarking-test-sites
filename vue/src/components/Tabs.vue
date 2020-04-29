<template>
  <div>
    <app-tab-button v-for="tab in tabs" :key="'tb-' + tab.id" :tabId="tab.id" v-on:activate="e => activeTab = e"></app-tab-button>
    <app-tab-content v-for="tab in tabs" :key="'tc-' + tab.id" :tabId="tab.id" :activeTab="activeTab" :labelData="tab.data"></app-tab-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0
    }
  },
  props: ['tabs']
}
</script>
