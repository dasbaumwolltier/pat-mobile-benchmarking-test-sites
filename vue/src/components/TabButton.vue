<template>
  <button :id="'tab-' + tabId" v-on:click="$emit('activate', tabId)" type="button">Tab {{tabId}}</button>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['tabId']
}
</script>
