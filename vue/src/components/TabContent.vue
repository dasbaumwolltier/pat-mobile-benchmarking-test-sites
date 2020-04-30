<template>
  <div v-if="activeTab === tabId">
    <app-label v-for="label in labelData" :key="Object.uid(label)" :id="'tbl-' + label.tabId + '-' + label.id" :tabId="label.tabId" :labelId="label.id">{{label.name}}</app-label>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['tabId', 'activeTab', 'labelData']
}
</script>
