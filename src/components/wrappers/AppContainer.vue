<template>
  <div class="container" :class="wFull && 'fill'">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  wFull: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem 2rem 1rem 1.5rem;

  max-width: 1200px;
}
.fill {
  max-width: 100%;
}
</style>
