<template>
  <div v-if="activeTab === tabId">
    <app-label v-for="label in labelData" :key="label.id" :tabId="tabId" :labelId="label.id">{{label.name}}</app-label>
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
