<template>
  <div class="label">
    <template v-if="tabId || tabId === 0">{{tabId}} - </template>
      {{labelId}} - {{text}}<slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['tabId', 'labelId', 'text']
}
</script>
