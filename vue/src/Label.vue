<template>
  <div class="label">
    <template v-if="tabId">{{tabId}} - </template>
      {{labelId}} - <slot></slot>
  </div>
</template>

<script>

</script>
