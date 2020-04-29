<template>
  <input :id="'tb-' + value.id" v-model="value.text" type="text" @input="handleInput"/>
</template>

<script>
export default {
  data() {
    return {
      content: this.value
    }
  },
  props: ['value'],
  methods: {
    handleInput(e) {
      this.$emit('input', this.content)
    }
  }
}
</script>
